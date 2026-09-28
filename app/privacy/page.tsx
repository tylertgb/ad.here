import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Privacy Policy | ad.here",
  description: "Privacy Policy for ad.here - Learn how we collect, use, and protect your personal information.",
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 sm:pt-36 sm:pb-24 bg-navy overflow-hidden">
          <div className="wrap relative z-10">
            <p className="text-sm uppercase tracking-wide text-gold font-semibold mb-4">
              Legal
            </p>
            <h1 className="text-4xl sm:text-5xl font-semibold text-white mb-5">
              Privacy Policy
            </h1>
            <p className="text-base lg:text-lg text-gray-300 max-w-2xl">
              Last updated: January 2026
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="wrap py-20 sm:py-24 bg-white">
          <div className="max-w-4xl mx-auto prose prose-slate">
            <h2 className="text-2xl font-semibold text-navy mb-4">Introduction</h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              ad.here ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>

            <h2 className="text-2xl font-semibold text-navy mb-4 mt-12">Information We Collect</h2>
            
            <h3 className="text-xl font-semibold text-navy mb-3 mt-8">Personal Information</h3>
            <p className="text-slate-700 leading-relaxed mb-4">
              When you contact us or request a proposal, we may collect:
            </p>
            <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-6">
              <li>Full name</li>
              <li>Business name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Campaign details and preferences</li>
              <li>Mall location preferences</li>
            </ul>

            <h3 className="text-xl font-semibold text-navy mb-3 mt-8">Automatically Collected Information</h3>
            <p className="text-slate-700 leading-relaxed mb-4">
              When you visit our website, we may automatically collect:
            </p>
            <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-6">
              <li>IP address</li>
              <li>Browser type and version</li>
              <li>Device information</li>
              <li>Pages visited and time spent</li>
              <li>Referring website</li>
            </ul>

            <h2 className="text-2xl font-semibold text-navy mb-4 mt-12">How We Use Your Information</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-6">
              <li>Respond to your inquiries and provide requested information</li>
              <li>Process and fulfill your advertising campaign requests</li>
              <li>Send you proposals, pricing information, and campaign details</li>
              <li>Improve our website and services</li>
              <li>Communicate with you about our services and updates</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2 className="text-2xl font-semibold text-navy mb-4 mt-12">Information Sharing and Disclosure</h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              We do not sell, trade, or rent your personal information to third parties. We may share your information with:
            </p>
            <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-6">
              <li><strong>Service Providers:</strong> Third-party vendors who assist us in operating our website and conducting our business</li>
              <li><strong>Mall Partners:</strong> Shopping malls where you wish to run advertising campaigns (with your consent)</li>
              <li><strong>Legal Requirements:</strong> When required by law or to protect our rights and safety</li>
            </ul>

            <h2 className="text-2xl font-semibold text-navy mb-4 mt-12">Data Security</h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
            </p>

            <h2 className="text-2xl font-semibold text-navy mb-4 mt-12">Your Rights</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              You have the right to:
            </p>
            <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-6">
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your personal information</li>
              <li>Opt-out of marketing communications</li>
              <li>Object to processing of your personal information</li>
            </ul>

            <h2 className="text-2xl font-semibold text-navy mb-4 mt-12">Cookies and Tracking Technologies</h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              We may use cookies and similar tracking technologies to enhance your browsing experience, analyze website traffic, and understand user preferences. You can control cookie settings through your browser preferences.
            </p>

            <h2 className="text-2xl font-semibold text-navy mb-4 mt-12">Third-Party Links</h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies.
            </p>

            <h2 className="text-2xl font-semibold text-navy mb-4 mt-12">Children's Privacy</h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children.
            </p>

            <h2 className="text-2xl font-semibold text-navy mb-4 mt-12">Changes to This Privacy Policy</h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
            </p>

            <h2 className="text-2xl font-semibold text-navy mb-4 mt-12">Contact Us</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              If you have any questions about this Privacy Policy or our data practices, please contact us:
            </p>
            <ul className="list-none text-slate-700 space-y-2 mb-6">
              <li><strong>Email:</strong> ad.hereghana@gmail.com</li>
              <li><strong>Location:</strong> Haatso, Accra, Ghana</li>
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
