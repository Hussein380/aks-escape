import { motion } from "framer-motion";
import { ArrowRight, Users, Maximize } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { rooms } from "@/data/hotel";
import roomDeluxeImage from "@/assets/room-deluxe.jpg";
import roomSuiteImage from "@/assets/room-suite.jpg";

const RoomsPreview = () => {
  const imageMap: Record<string, string> = {
    "room-deluxe.jpg": roomDeluxeImage,
    "room-suite.jpg": roomSuiteImage,
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="rooms" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
            Exceptional <span className="text-gradient-gold">Accommodations</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From intimate retreats to spacious suites, each room is meticulously designed 
            to provide comfort, elegance, and unforgettable experiences.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {rooms.map((room) => (
            <motion.div key={room.id} variants={cardVariants}>
              <Card className="overflow-hidden hover-lift border-0 shadow-luxury bg-card/50 backdrop-blur-sm">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={imageMap[room.images[0]] || roomDeluxeImage}
                    alt={room.name}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-gradient-gold text-luxury-navy font-semibold">
                      From ${room.priceFrom}
                    </Badge>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="font-serif text-2xl font-semibold mb-2">{room.name}</h3>
                  <p className="text-muted-foreground mb-4 line-clamp-2">{room.shortDescription}</p>
                  
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      <span>{room.maxGuests} guests</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Maximize className="h-4 w-4" />
                      <span>{room.size}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {room.amenities.slice(0, 3).map((amenity) => (
                      <Badge key={amenity} variant="outline" className="text-xs">
                        {amenity}
                      </Badge>
                    ))}
                    {room.amenities.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{room.amenities.length - 3} more
                      </Badge>
                    )}
                  </div>
                  
                  <Button 
                    className="w-full bg-primary hover:bg-primary/90 group"
                    size="sm"
                  >
                    View Details
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Button 
            size="lg" 
            variant="outline"
            className="px-8 py-4 text-lg hover-glow group"
          >
            View All Rooms
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default RoomsPreview;