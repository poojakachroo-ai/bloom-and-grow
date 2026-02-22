import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Clients from "./components/Clients";
import Testimonials from "./components/Testimonials";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#2C2C2C]">
      <Header />
      <main>
        <Hero />
        <Services />
        <Clients />
        <Testimonials />
        <CallToAction />
        <Footer />
      </main>
    </div>
  );
}
