import Link from "next/link";
import { OrangeButton } from "@/components/ui/Section";

export default function NotFound() {
  return (
    <section className="section container-site text-center">
      <p className="eyebrow">Error 404</p>
      <h1 className="mt-3 font-heading text-[2.2rem] font-extrabold text-ink">Page Not Found</h1>
      <p className="mx-auto mt-4 max-w-md text-[15px] text-body">
        The page you are looking for doesn&rsquo;t exist or has moved. Let us guide you back.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <OrangeButton href="/">Return Home</OrangeButton>
        <Link href="/services" className="inline-flex items-center rounded-md border border-navy-900/30 px-6 py-3.5 text-[15px] font-bold text-navy-900 hover:border-orange-500 hover:text-orange-600">
          Browse Services
        </Link>
      </div>
    </section>
  );
}
