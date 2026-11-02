import Link from "next/link";
import { MessageCircle, Phone } from "lucide-react";
import { contact } from "@/config/company";

/** Fixed bottom-right WhatsApp conversion button (hidden when placeholder). */
export default function WhatsAppButton() {
  if (contact.whatsapp.placeholder) return null;
  return (
    <>
      <a
        href={contact.whatsapp.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Spearhead Security on WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-cardHover transition-transform hover:scale-105"
      >
        <MessageCircle className="h-7 w-7" aria-hidden />
        <span className="absolute -ml-3 mt-[-2.7rem] ml-0 rounded-full bg-navy-950 px-3 py-1 text-[11px] font-semibold text-white opacity-0 transition-opacity hover:opacity-100">
          Chat with us
        </span>
      </a>
      {/* Mobile click-to-call companion */}
      <a
        href={contact.phone.href}
        aria-label="Call Spearhead Security"
        className="fixed bottom-6 left-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-navy-900 text-white shadow-cardHover transition-transform hover:scale-105 md:hidden"
      >
        <Phone className="h-6 w-6" aria-hidden />
      </a>
    </>
  );
}
