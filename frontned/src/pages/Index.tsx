import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import PageLoader from "@/components/PageLoader";

const Index = () => {
  return (
    <PageLoader>
      <div className="min-h-screen bg-background text-foreground ferret-home">
        <Navbar />

        <Hero />

        <Services />
        <Contact />
        <Footer />
      </div>
    </PageLoader>
  );
};

export default Index;
