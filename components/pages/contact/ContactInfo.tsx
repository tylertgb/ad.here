import Link from "next/link";
import { Mail, Phone, MapPin, Monitor } from "lucide-react";

const CONTACT_DETAILS = [
  {
    icon: Mail,
    label: "Email",
    value: "adhere.ghana@gmail.com",
    color: "coral",
  },
  {
    icon: Phone,
    label: "Phone / WhatsApp",
    value: "055 860 7807",
    color: "coral",
  },
  {
    icon: MapPin,
    label: "Based in",
    value: "Haatso, Accra, Ghana",
    color: "coral",
  },
  {
    icon: Monitor,
    label: "Currently live",
    value: "3 screens across Atlantic Mall & Marina Mall, Accra",
    color: "navy",
  },
];

export default function ContactInfo() {
  return (
    <div className="lg:sticky lg:top-24">
      <div className="bg-gray-50 p-8 rounded-lg">
        <h3 className="text-xl font-bold text-navy mb-6">Get in touch</h3>

        <div className="space-y-6">
          {CONTACT_DETAILS.map((detail, index) => {
            const Icon = detail.icon;
            return (
              <div key={index} className="flex items-start gap-4">
                <div className={`w-10 h-10 rounded-sm ${
                  detail.color === 'coral' ? 'bg-coral/10' : 'bg-navy/10'
                } flex items-center justify-center shrink-0`}>
                  <Icon className={`w-5 h-5 ${
                    detail.color === 'coral' ? 'text-coral' : 'text-navy'
                  }`} strokeWidth={2} />
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
                    {detail.label}
                  </div>
                  <div className="text-sm text-slate-700 font-medium">
                    {detail.value}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 pt-8 border-t border-slate-200">
          <p className="text-sm text-slate-600 leading-relaxed">
            Need a quote for Screen Rental or Purchase LED Screen? Use the request forms on{" "}
            <Link href="/ad-offers" className="text-coral hover:text-coral-dim transition-colors font-semibold">
              Ad Offers →
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
