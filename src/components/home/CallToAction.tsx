import { motion } from "framer-motion";
import { ArrowRight, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const CallToAction = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-gold opacity-10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary opacity-10 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 relative">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-4xl md:text-6xl font-bold mb-6">
            Ready to Experience <br />
            <span className="text-gradient-gold">Luxury</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
            Book your unforgettable stay at AKs Hotel and discover why discerning travelers 
            choose us for exceptional hospitality and unmatched comfort.
          </p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Button 
              size="lg"
              className="bg-gradient-gold text-luxury-navy hover:shadow-gold font-semibold px-12 py-6 text-xl hover-lift group"
            >
              Book Your Stay
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="outline"
              size="lg"
              className="border-border hover:bg-accent/10 px-12 py-6 text-xl group"
            >
              <Phone className="mr-3 h-6 w-6 group-hover:scale-110 transition-transform" />
              Call Us
            </Button>
          </motion.div>
        </motion.div>

        {/* Contact Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Card className="text-center hover-lift border-0 shadow-glass bg-card/30 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-gradient-gold rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-gold">
                <Phone className="h-8 w-8 text-luxury-navy" />
              </div>
              <h3 className="font-semibold text-xl mb-3">Call Us</h3>
              <p className="text-muted-foreground mb-4">
                Speak with our reservations team
              </p>
              <p className="font-semibold text-lg text-accent">
                +1 (555) 123-HOTEL
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover-lift border-0 shadow-glass bg-card/30 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-gradient-gold rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-gold">
                <Mail className="h-8 w-8 text-luxury-navy" />
              </div>
              <h3 className="font-semibold text-xl mb-3">Email Us</h3>
              <p className="text-muted-foreground mb-4">
                Send us your inquiry
              </p>
              <p className="font-semibold text-lg text-accent">
                reservations@akshotel.com
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover-lift border-0 shadow-glass bg-card/30 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-gradient-gold rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-gold">
                <MapPin className="h-8 w-8 text-luxury-navy" />
              </div>
              <h3 className="font-semibold text-xl mb-3">Visit Us</h3>
              <p className="text-muted-foreground mb-4">
                Prime downtown location
              </p>
              <p className="font-semibold text-lg text-accent">
                123 Luxury Avenue<br />Downtown District
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;