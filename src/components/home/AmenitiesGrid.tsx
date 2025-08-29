import { motion } from "framer-motion";
import { 
  Sparkles, 
  Dumbbell, 
  ChefHat, 
  Building, 
  Waves, 
  Bell, 
  Wifi, 
  Car 
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { amenities } from "@/data/hotel";

const iconMap = {
  Sparkles,
  Dumbbell,
  ChefHat,
  Building,
  Waves,
  Bell,
  Wifi,
  Car
};

const AmenitiesGrid = () => {
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

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1 }
  };

  return (
    <section id="amenities" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
            World-Class <span className="text-gradient-gold">Amenities</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Indulge in our carefully curated collection of premium facilities and services, 
            designed to elevate your stay beyond expectations.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {amenities.map((amenity) => {
            const IconComponent = iconMap[amenity.icon as keyof typeof iconMap];
            
            return (
              <motion.div key={amenity.id} variants={cardVariants}>
                <Card className="h-full hover-lift transition-luxury group cursor-pointer border-0 shadow-glass bg-card/30 backdrop-blur-sm">
                  <CardContent className="p-8 text-center">
                    <motion.div
                      className="mb-6 flex justify-center"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="w-16 h-16 bg-gradient-gold rounded-2xl flex items-center justify-center shadow-gold group-hover:shadow-lg transition-all duration-300">
                        <IconComponent className="h-8 w-8 text-luxury-navy" />
                      </div>
                    </motion.div>
                    
                    <h3 className="font-semibold text-xl mb-3 group-hover:text-accent transition-colors">
                      {amenity.name}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {amenity.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default AmenitiesGrid;