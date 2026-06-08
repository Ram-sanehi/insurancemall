import { useState } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", insuranceType: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      toast({ title: "Please fill required fields", description: "Name, email, and phone are required.", variant: "destructive" });
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: "", email: "", phone: "", insuranceType: "", message: "" });
      toast({ title: "Thank you!", description: "We'll get back to you within 24 hours with an insurance consultation." });
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="py-28 md:py-36 hero-gradient relative overflow-hidden border-b border-border/10">
        <div className="absolute inset-0 overflow-hidden"><div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl pointer-events-none" /></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl mx-auto text-center space-y-6">
            <span className="text-primary text-xs uppercase tracking-widest font-semibold bg-primary/10 px-4 py-1.5 rounded-full border border-primary/20">Get In Touch</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight">Contact <span className="gold-text">Insurance Mall</span></h1>
            <p className="text-lg md:text-xl text-muted-foreground/90 max-w-2xl mx-auto font-light leading-relaxed">Get expert insurance guidance. Schedule a free consultation with our advisory team.</p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-display font-bold mb-2">Get Your <span className="gold-text">Insurance Quote</span></h2>
                <p className="text-muted-foreground/80 text-sm font-light leading-relaxed">Reach out to us for comprehensive insurance advisory. We're here to help you find the right coverage.</p>
              </div>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/5 border border-primary/20 flex items-center justify-center flex-shrink-0"><MapPin className="h-4 w-4 text-primary" /></div>
                  <div><h4 className="text-xs font-bold uppercase tracking-wider text-primary mb-1">Office Address</h4><p className="text-sm text-muted-foreground/80 font-light leading-relaxed">Shop no 2, First Floor, Mahalungeker Complex,<br />Mahalunge Ingale Kaman,<br />Chakan-Talegaon Highway, Chakan,<br />Pune 410501</p></div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/5 border border-primary/20 flex items-center justify-center flex-shrink-0"><Phone className="h-4 w-4 text-primary" /></div>
                  <div><h4 className="text-xs font-bold uppercase tracking-wider text-primary mb-1">Phone</h4><a href="tel:+919607509586" className="text-sm text-muted-foreground/80 hover:text-primary transition-colors font-medium">+91 9607509586</a></div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/5 border border-primary/20 flex items-center justify-center flex-shrink-0"><Mail className="h-4 w-4 text-primary" /></div>
                  <div><h4 className="text-xs font-bold uppercase tracking-wider text-primary mb-1">Email</h4><a href="mailto:alphainvestmentmnt@gmail.com" className="text-sm text-muted-foreground/80 hover:text-primary transition-colors font-medium">alphainvestmentmnt@gmail.com</a></div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/5 border border-primary/20 flex items-center justify-center flex-shrink-0"><Clock className="h-4 w-4 text-primary" /></div>
                  <div><h4 className="text-xs font-bold uppercase tracking-wider text-primary mb-1">Office Hours</h4><p className="text-sm text-muted-foreground/80 font-light">Mon - Fri: 9am - 6pm<br />Sat: 10am - 2pm</p></div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:col-span-3">
              <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-8 border border-border/30 space-y-6">
                <h3 className="text-lg font-display font-bold">Request Insurance Consultation</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground/70">Full Name *</label>
                    <Input value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} placeholder="Your full name" className="bg-[#030712]/50 border-border/30 focus-visible:ring-primary/30 rounded-lg h-11" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground/70">Email *</label>
                    <Input type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} placeholder="your@email.com" className="bg-[#030712]/50 border-border/30 focus-visible:ring-primary/30 rounded-lg h-11" />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground/70">Phone *</label>
                    <Input value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} placeholder="+91 XXXXX XXXXX" className="bg-[#030712]/50 border-border/30 focus-visible:ring-primary/30 rounded-lg h-11" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground/70">Insurance Type</label>
                    <select value={formData.insuranceType} onChange={e => setFormData({...formData, insuranceType: e.target.value})} className="w-full bg-[#030712]/50 border border-border/30 rounded-lg h-11 px-3 text-sm text-foreground focus:ring-primary/30 focus:border-primary/30">
                      <option value="">Select insurance type</option>
                      <option>Health Insurance</option>
                      <option>Life Insurance</option>
                      <option>Term Insurance</option>
                      <option>Vehicle Insurance</option>
                      <option>Travel Insurance</option>
                      <option>Home & Shop Insurance</option>
                      <option>Commercial Vehicle Insurance</option>
                      <option>Industrial Insurance</option>
                      <option>Pension / Retirement</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground/70">Message</label>
                  <textarea value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} placeholder="Tell us about your insurance needs..." rows={4}
                    className="w-full bg-[#030712]/50 border border-border/30 rounded-lg px-3 py-3 text-sm text-foreground focus:ring-primary/30 focus:border-primary/30 resize-none" />
                </div>
                <Button type="submit" disabled={isSubmitting} className="w-full gold-gradient text-primary-foreground hover:opacity-95 font-semibold text-xs uppercase tracking-wider h-12 rounded-lg shadow-lg">
                  {isSubmitting ? "Sending..." : <><Send className="h-4 w-4 mr-2" /> Send Consultation Request</>}
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-12 border-t border-border/10">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto rounded-2xl overflow-hidden border border-border/30 shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3779.123456789!2d73.86!3d18.76!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDQ1JzM2LjAiTiA3M8KwNTEnMzYuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%" height="400" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Insurance Mall Office Location"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;
