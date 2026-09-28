import { MapPin } from "lucide-react";
import Image from "next/image";
import SectionHeading from "./SectionHeading";

const MALLS = [
  { 
    city: "Accra", 
    name: "Marina Mall", 
    screens: "12 screens",
    locations: "Entrances & Food Court",
    image: "/mall (1).jpg"
  },
  { 
    city: "Accra", 
    name: "West Hills Mall", 
    screens: "10 screens",
    locations: "Main Corridors & Courts",
    image: "/mall (2).jpg"
  },
  { 
    city: "Kumasi", 
    name: "Kumasi City Mall", 
    screens: "8 screens",
    locations: "Central Areas & Entrance",
    image: "/mall (3).jpg"
  },
  { 
    city: "Accra", 
    name: "Achimota Mall", 
    screens: "10 screens",
    locations: "High-Traffic Zones",
    image: "/mall (4).jpg"
  },
];

export default function Locations() {
  return (
    <section id="locations" className="py-24 sm:py-32 bg-gray-50">
      <div className="wrap">
        <div className="max-w-3xl mx-auto flex flex-col items-center text-center mb-16">
          <SectionHeading title="Our Network" />
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-navy mb-5 leading-tight tracking-tight">
            Premium Locations Across Accra & Kumasi
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Phase 1 rollout covers Ghana's busiest malls with strategic screen placements.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {MALLS.map((mall, index) => (
            <div
              key={mall.name}
              className="relative group bg-gray-50 rounded-lg overflow-hidden transition-all duration-300"
            >
              <div className="relative h-80 lg:h-125 overflow-hidden">
                <Image
                  src={mall.image}
                  alt={mall.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-linear-to-t from-navy/90 via-navy/40 to-transparent" />
                <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full">
                  <MapPin size={14} className="text-coral" />
                  <span className="text-xs font-semibold text-white">{mall.city}</span>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-2xl font-semibold text-white mb-1">{mall.name}</h3>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between text-sm">
                  <div>
                    <p className="text-slate-500 text-xs mb-1">Coverage</p>
                    <p className="text-navy font-semibold">{mall.screens}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-slate-500 text-xs mb-1">Placement</p>
                    <p className="text-navy font-semibold">{mall.locations}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-12 text-center text-sm text-slate-500 max-w-2xl mx-auto">
          Expanding to more locations across Ghana. Want your mall in our network?{" "}
          <a href="#contact" className="font-semibold text-coral hover:text-coral-dim transition-colors">
            Get in touch
          </a>
        </p>
      </div>
    </section>
  );
}
