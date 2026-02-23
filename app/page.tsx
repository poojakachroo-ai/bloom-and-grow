import AnnouncementBar from "./components/AnnouncementBar";
import Header from "./components/Header";
import Hero from "./components/Hero";
import CredibilityBar from "./components/CredibilityBar";
import WhyUs from "./components/WhyUs";
import Services from "./components/Services";
import Clients from "./components/Clients";
import Testimonials from "./components/Testimonials";
import Founder from "./components/Founder";
import InstagramGrid from "./components/InstagramGrid";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#2C2C2C]">
      <AnnouncementBar />
      <Header />
      <main>
        <Hero />
        <CredibilityBar />
        <WhyUs />
        <Services />
        <Clients />
        <Testimonials />
        <Founder />
        <InstagramGrid />
        <CallToAction />
        <Footer />
      </main>
    </div>
  );
}
