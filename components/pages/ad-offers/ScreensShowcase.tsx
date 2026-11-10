import Image from "next/image";
import { MapPin } from "lucide-react";

const SCREENS = [
  {
    name: "Atlantic Mall - Phase 1",
    location: "Ground floor · Panda Mart entrance",
    city: "Accra - Atomic Roundabout",
    image: "/malls/panda-mart.jpg",
    monthlyPrice: "₵3,500",
    eventPrice: "₵950",
    status: "Live",
  },
  {
    name: "Atlantic Mall - Phase 2",
    location: "1st floor · Elevator entrance",
    city: "Accra - Atomic Roundabout",
    image: "/malls/game-it-up.jpg",
    monthlyPrice: "₵3,500",
    eventPrice: "₵950",
    status: "Live",
  },
  {
    name: "Marina Mall",
    location: "Supermarket walkway entrance",
    city: "Accra - Airport",
    image: "/malls/game-it-up.jpg",
    monthlyPrice: "₵4,500",
    eventPrice: "₵1,050",
    status: "Live",
  },
];

export default function ScreensShowcase() {
  return (
    <section className="py-20 sm:py-28 bg-gray-50">
      <div className="wrap">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block mb-6 px-4 py-1.5 bg-navy/5 rounded-full">
            <p className="text-xs uppercase tracking-widest text-navy font-semibold">
              Our Screens
            </p>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-navy mb-5 leading-tight tracking-tight">
            Three screens. Two malls.
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Every screen sits at a prime, high-footfall entrance - not tucked in a corner.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {SCREENS.map((screen) => (
            <div
              key={screen.name}
              className="group relative bg-gray-50 rounded-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              {/* Screen Image */}
              <div className="relative h-96 overflow-hidden">
                <Image
                  src={screen.image}
                  alt={screen.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-linear-to-t from-navy/95 via-navy/50 to-transparent" />
                
                {/* City Badge */}
                <div className="absolute top-4 left-4 flex items-center gap-1.5 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full">
                  <MapPin size={14} className="text-coral" />
                  <span className="text-xs font-semibold text-white uppercase tracking-wide">
                    {screen.city}
                  </span>
                </div>

                {/* Status Badge */}
                {screen.status && (
                  <div className="absolute top-4 right-4 bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {screen.status}
                  </div>
                )}

                {/* Screen Info Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-semibold text-white mb-2">
                    {screen.name}
                  </h3>
                  <p className="text-sm text-gray-200">{screen.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
