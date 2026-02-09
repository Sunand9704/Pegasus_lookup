import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <Hero />

      <Services />
      <About />
      <Portfolio />
      <Process />
      <Testimonials />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
