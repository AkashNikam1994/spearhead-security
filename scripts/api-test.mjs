const start = "http://localhost:3000";
const pdfHeader = "%PDF-1.4\n1 0 obj<</Type/Catalog/Pages 2 0 R>>endobj\n2 0 obj<</Type/Pages/Kids[3 0 R]/Count 1>>endobj\n3 0 obj<</Type/Page/Parent 2 0 R/MediaBox[0 0 612 792]>>endobj\nxref\n0 4\ntrailer<</Size 4/Root 1 0 R>>\nstartxref\n9\n%%EOF";
const filler = "\n" + "1".repeat(900);
const pdfFile = new File([pdfHeader + filler.repeat(40)], "test-resume.pdf", { type: "application/pdf" });
const fd = new FormData();
fd.set("full_name", "Rahul Deshmukh"); fd.set("email", "rahul.d@email.com"); fd.set("phone", "+91 9811122233");
fd.set("current_location", "Pune, Maharashtra"); fd.set("preferred_position", "Security Supervisor");
fd.set("experience", "3-5 years"); fd.set("consent", "on"); fd.set("resume", pdfFile);
const r1 = await fetch(start + "/api/career-applications", { method: "POST", body: fd });
const j1 = await r1.json();

const bogus = new File(["x".repeat(3 * 1024 * 1024)], "huge.txt", { type: "text/plain" });
const fd2 = new FormData();
fd2.set("full_name", "X"); fd2.set("email", "x@x.com"); fd2.set("phone", "11111111111");
fd2.set("current_location", "Y"); fd2.set("preferred_position", "Other"); fd2.set("experience", "Fresher"); fd2.set("resume", bogus);
const r2 = await fetch(start + "/api/career-applications", { method: "POST", body: fd2 });
const j2 = await r2.json();

const evil = new File(["%PDF-1.4 fake but fine size-wise" + "z".repeat(50)], "evil.pdf", { type: "application/pdf" });
const fd3 = new FormData();
fd3.set("full_name", "E"); fd3.set("email", "e@e.com"); fd3.set("phone", "12345678");
fd3.set("current_location", "E"); fd3.set("preferred_position", "Other"); fd3.set("experience", "Fresher"); fd3.set("resume", evil);
const r3 = await fetch(start + "/api/career-applications", { method: "POST", body: fd3 });

console.log(`UPLOAD: ${r1.status} ok=${j1.ok} msg-present=${!!j1.message}`);
console.log(`REJECT: ${r2.status} resume-error=${(j2.errors || {}).resume}`);
console.log(`EVIL-ACCEPTED-BY-DESIGN(no content scan documented): ${r3.status}`);
