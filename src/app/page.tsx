import {
  Hero,
  TrustBar,
  Services,
  WhyChooseUs,
  Team,
  Testimonials,
  BookingForm,
  ContactStrip,
} from "@/component/sections";

/**
 * Lumière Dental Studio — landing page.
 * Sections are ordered to build trust, then convert:
 * hero → trust bar → services → why us → team → reviews → booking → contact.
 */
export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Services />
      <WhyChooseUs />
      <Team />
      <Testimonials />
      <BookingForm />
      <ContactStrip />
    </>
  );
}
