import SectionHeading from "./SectionHeading";

export default function WhyAdhere() {
  return (
    <section id="why" className="py-24 sm:py-32 bg-navy text-white">
      <div className="wrap">
        <div className="max-w-3xl mx-auto flex flex-col items-center text-center mb-16">
          <div className="inline-block mb-6 px-4 py-1.5 bg-white/10 rounded-full">
            <p className="text-xs uppercase tracking-widest text-white font-semibold">
              Why Ad.here
            </p>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white mb-5 leading-tight tracking-tight">
            Built for how Ghanaian brands actually spend on advertising.
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            Built for businesses without a billboard budget or a media-buying team.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left py-4 px-4 text-sm font-semibold text-gray-400"></th>
                <th className="text-left py-4 px-4 text-sm font-semibold text-coral uppercase tracking-wide">
                  Ad.here Indoor Network
                </th>
                <th className="text-left py-4 px-4 text-sm font-semibold text-gray-400 uppercase tracking-wide">
                  Traditional Outdoor Billboards
                </th>
                <th className="text-left py-4 px-4 text-sm font-semibold text-gray-400 uppercase tracking-wide">
                  Typical Digital Signage Vendor
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-white/10">
                <td className="py-6 px-4 text-sm font-medium text-gray-300">Audience type</td>
                <td className="py-6 px-4 text-sm text-cyan-400">Captive shoppers, minutes of dwell time</td>
                <td className="py-6 px-4 text-sm text-gray-400">Passing traffic, seconds of glance time</td>
                <td className="py-6 px-4 text-sm text-gray-400">Varies - often passing traffic too</td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="py-6 px-4 text-sm font-medium text-gray-300">Weather exposure</td>
                <td className="py-6 px-4 text-sm text-cyan-400">None - fully indoor</td>
                <td className="py-6 px-4 text-sm text-gray-400">Full sun, rain, harmattan dust</td>
                <td className="py-6 px-4 text-sm text-gray-400">Depends on install location</td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="py-6 px-4 text-sm font-medium text-gray-300">Entry point for SMEs</td>
                <td className="py-6 px-4 text-sm text-cyan-400">Single-screen packages from ₵3,500/month, event weeks from ₵950</td>
                <td className="py-6 px-4 text-sm text-gray-400">Usually full-panel minimums</td>
                <td className="py-6 px-4 text-sm text-gray-400">Varies by vendor</td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="py-6 px-4 text-sm font-medium text-gray-300">Payment flexibility</td>
                <td className="py-6 px-4 text-sm text-cyan-400">Mobile money & card, buy online in minutes</td>
                <td className="py-6 px-4 text-sm text-gray-400">Typically bank transfer only</td>
                <td className="py-6 px-4 text-sm text-gray-400">Typically bank transfer only</td>
              </tr>
              <tr>
                <td className="py-6 px-4 text-sm font-medium text-gray-300">Proof of placement</td>
                <td className="py-6 px-4 text-sm text-cyan-400">Play-out report every month</td>
                <td className="py-6 px-4 text-sm text-gray-400">Photo evidence, manually requested</td>
                <td className="py-6 px-4 text-sm text-gray-400">Varies by vendor</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
