import Header from "./components/Header";
import Hero from "./components/Hero";
import CredibilityBar from "./components/CredibilityBar";
import Services from "./components/Services";
import WhyUs from "./components/WhyUs";
import Clients from "./components/Clients";
import CaseStudies from "./components/CaseStudies";
import Testimonials from "./components/Testimonials";
import Founder from "./components/Founder";
import InstagramGrid from "./components/InstagramGrid";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#2C2C2C]">
      <Header />
      <main>
        <Hero />
        <CredibilityBar />
        <Services />
        <WhyUs />
        <Clients />
        <CaseStudies />
        <Testimonials />
        <Founder />
        <InstagramGrid />
        <CallToAction />
        <Footer />
      </main>
    </div>
  );
}
