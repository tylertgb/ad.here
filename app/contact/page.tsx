import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactHero from "@/components/pages/contact/ContactHero";
import ContactForm from "@/components/pages/contact/ContactForm";
import ContactInfo from "@/components/pages/contact/ContactInfo";

export const metadata = {
  title: "Contact | ad.here",
  description: "Tell us which screen or which offer you want. Send a few details and we'll reply with availability, pricing, and a schedule.",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <ContactHero />
        <section id="enquiry-form" className="py-20 sm:py-28 bg-white">
          <div className="wrap">
            <div className="grid lg:grid-cols-[1fr_400px] gap-12 items-start">
              <div id="contact-form">
                <ContactForm />
              </div>
              <div id="contact-details">
                <ContactInfo />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
