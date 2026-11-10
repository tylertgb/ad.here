import { MapPin } from "lucide-react";
import Image from "next/image";
import SectionHeading from "./SectionHeading";

const MALLS = [
  { 
    city: "Accra - Atomic Roundabout", 
    name: "Atlantic Mall",
    phases: [
      {
        name: "Phase 1",
        location: "Ground floor · Panda Mart entrance",
        monthlyPrice: "₵3,500",
        eventPrice: "₵950",
      },
      {
        name: "Phase 2", 
        location: "1st floor · Elevator entrance",
        monthlyPrice: "₵3,500",
        eventPrice: "₵950",
      }
    ],
    screens: "2 screens",
    status: "Live",
    image: "/malls/atlanticmall-main.jpg"
  },
  { 
    city: "Accra - Airport", 
    name: "Marina Mall", 
    location: "Supermarket walkway entrance",
    screens: "1 screen",
    monthlyPrice: "₵4,500",
    eventPrice: "₵1,050",
    status: "Live",
    image: "/malls/marinamall-main.png"
  },
  // Coming soon
  // { 
  //   city: "Kumasi", 
  //   name: "Kumasi City Mall", 
  //   screens: "8 screens",
  //   locations: "Central Areas & Entrance",
  //   image: "/malls/IMG_8485.jpeg"
  // },
  // { 
  //   city: "Accra", 
  //   name: "Achimota Mall", 
  //   screens: "10 screens",
  //   locations: "High-Traffic Zones",
  //   image: "/malls/IMG_8488.jpeg"
  // },
];

export default function Locations() {
  return (
    <section id="locations" className="py-24 sm:py-32 bg-white">
      <div className="wrap">
        <div className="max-w-3xl mx-auto flex flex-col items-center text-center mb-16">
          <div className="inline-block mb-6 px-4 py-1.5 bg-navy/5 rounded-full">
            <p className="text-xs uppercase tracking-widest text-navy font-semibold">
              Where You'll Be Seen
            </p>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-navy mb-5 leading-tight tracking-tight">
            Three screens. Two malls.
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Every screen sits at a prime, high-footfall entrance - not tucked in a corner.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {MALLS.map((mall, index) => (
            <div
              key={mall.name}
              className="relative group bg-white rounded-[28px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-80 lg:h-96 overflow-hidden">
                <Image
                  src={mall.image}
                  alt={mall.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/40 to-transparent" />
                <div className="absolute top-4 left-4 flex items-center gap-1.5 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full">
                  <MapPin size={14} className="text-coral" />
                  <span className="text-xs font-semibold text-white uppercase tracking-wide">{mall.city}</span>
                </div>
                {mall.status && (
                  <div className="absolute top-4 right-4 bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {mall.status}
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-navy mb-2">{mall.name}</h3>
                
                {/* If mall has phases, show both */}
                {mall.phases ? (
                  <div className="space-y-4 mb-4">
                    {mall.phases.map((phase, idx) => (
                      <div key={phase.name} className={`${idx > 0 ? 'pt-4 border-t border-slate-200' : ''}`}>
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-sm font-semibold text-navy">{phase.name}</span>
                          <span className="text-xs text-slate-500">·</span>
                          <span className="text-xs text-slate-500">{phase.location}</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-slate-600">Monthly: <span className="text-coral font-semibold">{phase.monthlyPrice}</span></span>
                          <span className="text-slate-600">Event: <span className="text-coral font-semibold">{phase.eventPrice}</span></span>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  // Single location mall
                  <>
                    <p className="text-sm text-slate-500 mb-4">{mall.location}</p>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-600">Monthly</span>
                        <span className="text-coral font-semibold text-lg">{mall.monthlyPrice}/month</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-600">Event week</span>
                        <span className="text-coral font-semibold text-lg">{mall.eventPrice}/week</span>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>

        <p className="mt-12 text-center text-sm text-slate-600 max-w-2xl mx-auto">
          More malls join the network as it grows. Want yours on the list?{" "}
          <a href="/contact" className="font-semibold text-coral hover:text-coral-dim transition-colors">
            Get in touch →
          </a>
        </p>
      </div>
    </section>
  );
}
