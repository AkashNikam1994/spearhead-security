import { MessageCircle, Phone } from "lucide-react";
import { contact } from "@/config/company";

/**
 * Fixed conversion buttons.
 * - WhatsApp: appears only once a real WhatsApp number is configured
 *   (hidden while the placeholder flag is set — no dead buttons).
 * - Click-to-call: appears on mobile whenever a real phone number exists.
 */
export default function WhatsAppButton() {
  const showWhatsApp = !contact.whatsapp.placeholder;
  const showCall = !contact.phone.placeholder;

  return (
    <>
      {showWhatsApp && (
        <a
          href={contact.whatsapp.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with Spearhead Security Service on WhatsApp"
          className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-cardHover transition-transform hover:scale-105"
        >
          <MessageCircle className="h-7 w-7" aria-hidden />
        </a>
      )}
      {showCall && (
        <a
          href={contact.phone.href}
          aria-label="Call Spearhead Security Service on 9552666896"
          className="fixed bottom-6 left-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-navy-900 text-white shadow-cardHover transition-transform hover:scale-105 md:hidden"
        >
          <Phone className="h-6 w-6" aria-hidden />
        </a>
      )}
    </>
  );
}
