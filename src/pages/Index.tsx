import Header from "@/components/core/Header";
import Footer from "@/components/core/Footer";
import Hero from "@/components/home/Hero";
import RoomsPreview from "@/components/home/RoomsPreview";
import AmenitiesGrid from "@/components/home/AmenitiesGrid";
import Gallery from "@/components/home/Gallery";
import Testimonials from "@/components/home/Testimonials";
import FAQ from "@/components/home/FAQ";
import CallToAction from "@/components/home/CallToAction";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <RoomsPreview />
        <AmenitiesGrid />
        <Gallery />
        <Testimonials />
        <FAQ />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
