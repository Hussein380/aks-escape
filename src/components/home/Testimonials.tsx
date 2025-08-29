import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { testimonials } from "@/data/hotel";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const navigate = (direction: "prev" | "next") => {
    if (direction === "prev") {
      setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1);
    } else {
      setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1);
    }
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-5 w-5 ${
          i < rating
            ? "text-accent fill-accent"
            : "text-muted-foreground"
        }`}
      />
    ));
  };

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-luxury-gold to-transparent" />
      </div>
      
      <div className="container mx-auto px-4 relative">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
            Guest <span className="text-gradient-gold">Testimonials</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover what our valued guests have to say about their extraordinary 
            experiences at AKs Hotel.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Navigation Buttons */}
            <Button
              variant="outline"
              size="icon"
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 z-10 rounded-full border-accent/20 hover:border-accent hover:bg-accent/10"
              onClick={() => navigate("prev")}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>

            <Button
              variant="outline"
              size="icon"
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 z-10 rounded-full border-accent/20 hover:border-accent hover:bg-accent/10"
              onClick={() => navigate("next")}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>

            {/* Testimonial Cards */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="border-0 shadow-luxury bg-card/30 backdrop-blur-sm">
                  <CardContent className="p-12">
                    <div className="flex flex-col items-center text-center">
                      {/* Quote Icon */}
                      <div className="mb-8">
                        <Quote className="h-12 w-12 text-accent/40" />
                      </div>

                      {/* Rating */}
                      <div className="flex items-center gap-1 mb-6">
                        {renderStars(testimonials[currentIndex].rating)}
                      </div>

                      {/* Comment */}
                      <blockquote className="text-xl md:text-2xl font-medium leading-relaxed mb-8 text-foreground">
                        "{testimonials[currentIndex].comment}"
                      </blockquote>

                      {/* Guest Info */}
                      <div className="flex items-center gap-4">
                        <img
                          src={testimonials[currentIndex].avatar}
                          alt={testimonials[currentIndex].name}
                          className="w-16 h-16 rounded-full object-cover border-2 border-accent/20"
                        />
                        <div className="text-left">
                          <h4 className="font-semibold text-lg text-foreground">
                            {testimonials[currentIndex].name}
                          </h4>
                          <p className="text-muted-foreground">
                            {testimonials[currentIndex].location}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-accent scale-125"
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                  onClick={() => setCurrentIndex(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;