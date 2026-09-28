import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Terms of Service | ad.here",
  description: "Terms of Service for ad.here - Understand the terms and conditions for using our advertising platform.",
};

export default function TermsPage() {
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
              Terms of Service
            </h1>
            <p className="text-base lg:text-lg text-gray-300 max-w-2xl">
              Last updated: January 2026
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="wrap py-20 sm:py-24 bg-white">
          <div className="max-w-4xl mx-auto prose prose-slate">
            <h2 className="text-2xl font-semibold text-navy mb-4">Agreement to Terms</h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              By accessing or using ad.here's website and services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing our services.
            </p>

            <h2 className="text-2xl font-semibold text-navy mb-4 mt-12">Description of Services</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              ad.here provides an AI-powered media buying platform that enables businesses to advertise on indoor LED screens located in shopping malls across Ghana. Our services include:
            </p>
            <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-6">
              <li>Automated campaign brief processing and placement</li>
              <li>Indoor LED screen advertising across multiple mall locations</li>
              <li>Campaign scheduling and management</li>
              <li>Performance monitoring and proof-of-play reporting</li>
              <li>Ad.here Locate wayfinding integration</li>
            </ul>

            <h2 className="text-2xl font-semibold text-navy mb-4 mt-12">Phase 1 Rollout</h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              ad.here is currently in Phase 1 rollout. Services are being deployed mall by mall as screens are installed and lease agreements are finalized. Service availability may vary by location. We will communicate clearly about which malls are currently operational.
            </p>

            <h2 className="text-2xl font-semibold text-navy mb-4 mt-12">User Accounts and Registration</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              To use certain features of our services, you may need to provide information about your business and advertising requirements. You agree to:
            </p>
            <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-6">
              <li>Provide accurate, current, and complete information</li>
              <li>Maintain and update your information to keep it accurate</li>
              <li>Accept responsibility for all activities under your account</li>
              <li>Notify us immediately of any unauthorized use</li>
            </ul>

            <h2 className="text-2xl font-semibold text-navy mb-4 mt-12">Advertising Content</h2>
            
            <h3 className="text-xl font-semibold text-navy mb-3 mt-8">Content Guidelines</h3>
            <p className="text-slate-700 leading-relaxed mb-4">
              All advertising content submitted through our platform must:
            </p>
            <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-6">
              <li>Comply with all applicable laws and regulations in Ghana</li>
              <li>Not contain false, misleading, or deceptive information</li>
              <li>Not infringe on intellectual property rights of third parties</li>
              <li>Not contain offensive, discriminatory, or inappropriate content</li>
              <li>Meet technical specifications for display on LED screens</li>
            </ul>

            <h3 className="text-xl font-semibold text-navy mb-3 mt-8">Content Rights</h3>
            <p className="text-slate-700 leading-relaxed mb-6">
              You retain ownership of your advertising content. By submitting content to ad.here, you grant us a non-exclusive, worldwide license to display, reproduce, and distribute your content across our network for the purpose of fulfilling your advertising campaign.
            </p>

            <h2 className="text-2xl font-semibold text-navy mb-4 mt-12">Pricing and Payment</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              Campaign pricing is provided in proposals and packages detailed on our website. Payment terms include:
            </p>
            <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-6">
              <li>Pricing is quoted per campaign length and screen count</li>
              <li>Payment methods include mobile money and card payments</li>
              <li>Payment is required before campaign launch unless otherwise agreed</li>
              <li>Prices are subject to change with notice</li>
              <li>Bundle discounts apply as advertised</li>
            </ul>

            <h2 className="text-2xl font-semibold text-navy mb-4 mt-12">Campaign Scheduling and Performance</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              We will make commercially reasonable efforts to:
            </p>
            <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-6">
              <li>Deploy campaigns within 35 minutes of brief approval</li>
              <li>Display ads according to agreed schedules and dayparts</li>
              <li>Provide accurate proof-of-play reports</li>
              <li>Notify you of any technical issues affecting campaign delivery</li>
            </ul>
            <p className="text-slate-700 leading-relaxed mb-6">
              However, we do not guarantee uninterrupted service due to factors such as power outages, technical failures, or force majeure events.
            </p>

            <h2 className="text-2xl font-semibold text-navy mb-4 mt-12">Cancellation and Refunds</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              Campaign cancellation and refund policies:
            </p>
            <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-6">
              <li>Cancellations made before campaign launch may receive full refunds</li>
              <li>Partial refunds may be issued for technical failures preventing campaign delivery</li>
              <li>No refunds for campaigns that have already started running</li>
              <li>Refund requests must be submitted in writing to ad.hereghana@gmail.com</li>
            </ul>

            <h2 className="text-2xl font-semibold text-navy mb-4 mt-12">Intellectual Property</h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              The ad.here platform, website, logo, and all related content are owned by ad.here and protected by copyright and trademark laws. You may not copy, modify, or distribute our intellectual property without written permission.
            </p>

            <h2 className="text-2xl font-semibold text-navy mb-4 mt-12">Limitation of Liability</h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              To the maximum extent permitted by law, ad.here shall not be liable for any indirect, incidental, consequential, or punitive damages arising from your use of our services. Our total liability shall not exceed the amount paid by you for the specific campaign in question.
            </p>

            <h2 className="text-2xl font-semibold text-navy mb-4 mt-12">Warranty Disclaimer</h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              Our services are provided "as is" without warranties of any kind, either express or implied. We do not guarantee that our services will be error-free, uninterrupted, or meet your specific requirements.
            </p>

            <h2 className="text-2xl font-semibold text-navy mb-4 mt-12">Indemnification</h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              You agree to indemnify and hold ad.here harmless from any claims, damages, or expenses arising from your advertising content, your use of our services, or your violation of these Terms.
            </p>

            <h2 className="text-2xl font-semibold text-navy mb-4 mt-12">Governing Law</h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              These Terms shall be governed by and construed in accordance with the laws of Ghana. Any disputes arising from these Terms shall be resolved in the courts of Ghana.
            </p>

            <h2 className="text-2xl font-semibold text-navy mb-4 mt-12">Changes to Terms</h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting to our website. Your continued use of our services after changes constitutes acceptance of the modified Terms.
            </p>

            <h2 className="text-2xl font-semibold text-navy mb-4 mt-12">Termination</h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              We may terminate or suspend your access to our services immediately, without prior notice, for conduct that we believe violates these Terms or is harmful to other users, us, or third parties.
            </p>

            <h2 className="text-2xl font-semibold text-navy mb-4 mt-12">Contact Information</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              For questions about these Terms of Service, please contact us:
            </p>
            <ul className="list-none text-slate-700 space-y-2 mb-6">
              <li><strong>Email:</strong> ad.hereghana@gmail.com</li>
              <li><strong>Location:</strong> Haatso, Accra, Ghana</li>
            </ul>

            <p className="text-slate-700 leading-relaxed mb-6 mt-8">
              By using ad.here's services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
