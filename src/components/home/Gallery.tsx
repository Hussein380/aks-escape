import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import heroImage from "@/assets/hero-hotel.jpg";
import roomDeluxeImage from "@/assets/room-deluxe.jpg";
import roomSuiteImage from "@/assets/room-suite.jpg";
import amenitySpaImage from "@/assets/amenity-spa.jpg";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  
  const galleryImages = [
    { src: heroImage, alt: "Hotel Exterior", title: "Elegant Facade" },
    { src: roomDeluxeImage, alt: "Deluxe Room", title: "Deluxe King Room" },
    { src: roomSuiteImage, alt: "Executive Suite", title: "Executive Suite" },
    { src: amenitySpaImage, alt: "Spa & Wellness", title: "Luxury Spa" },
    { src: heroImage, alt: "Hotel Lobby", title: "Grand Lobby" },
    { src: roomDeluxeImage, alt: "Restaurant", title: "Fine Dining" },
    { src: roomSuiteImage, alt: "Pool Area", title: "Rooftop Pool" },
    { src: amenitySpaImage, alt: "Fitness Center", title: "Modern Gym" },
  ];

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: "prev" | "next") => {
    if (selectedImage === null) return;
    
    if (direction === "prev") {
      setSelectedImage(selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1);
    } else {
      setSelectedImage(selectedImage === galleryImages.length - 1 ? 0 : selectedImage + 1);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  };

  return (
    <section id="gallery" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
            Visual <span className="text-gradient-gold">Journey</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Explore our stunning spaces through carefully curated imagery that captures 
            the essence of luxury and sophistication at AKs Hotel.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              variants={imageVariants}
              className={`relative overflow-hidden rounded-2xl cursor-pointer group ${
                index % 7 === 0 ? "md:col-span-2 md:row-span-2" : ""
              }`}
              onClick={() => openLightbox(index)}
            >
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="font-semibold text-lg">{image.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Lightbox Modal */}
        <Dialog open={selectedImage !== null} onOpenChange={closeLightbox}>
          <DialogContent className="max-w-7xl w-full h-full max-h-screen p-0 bg-black/95 border-0">
            <div className="relative w-full h-full flex items-center justify-center">
              {selectedImage !== null && (
                <>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-4 right-4 z-50 text-white hover:bg-white/10"
                    onClick={closeLightbox}
                  >
                    <X className="h-6 w-6" />
                  </Button>

                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-50 text-white hover:bg-white/10"
                    onClick={() => navigateImage("prev")}
                  >
                    <ChevronLeft className="h-8 w-8" />
                  </Button>

                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-50 text-white hover:bg-white/10"
                    onClick={() => navigateImage("next")}
                  >
                    <ChevronRight className="h-8 w-8" />
                  </Button>

                  <motion.img
                    src={galleryImages[selectedImage].src}
                    alt={galleryImages[selectedImage].alt}
                    className="max-w-full max-h-full object-contain"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3 }}
                    key={selectedImage}
                  />

                  <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center text-white">
                    <h3 className="text-2xl font-semibold mb-2">
                      {galleryImages[selectedImage].title}
                    </h3>
                    <p className="text-white/70">
                      {selectedImage + 1} of {galleryImages.length}
                    </p>
                  </div>
                </>
              )}
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Gallery;