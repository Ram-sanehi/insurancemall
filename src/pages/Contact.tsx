import { useState } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Send,
  Check,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const MediumIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M13.54 12c0 3.77-3.03 6.82-6.77 6.82S0 15.77 0 12s3.03-6.82 6.77-6.82 6.77 3.05 6.77 6.82zm7.42 0c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42zm3.04 0c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75c.66 0 1.19 2.58 1.19 5.75z" />
  </svg>
);

const contactCards = [
  {
    icon: MapPin,
    title: "Visit Our Office",
    details: [
      "Shop no 2, First Floor",
      "Mahalungeker Complex, (opposite R K Wine shop)",
      "Mahalunge Ingale Kaman",
      "Chakan-Talegaon Highway, Chakan",
      "Pune 410501",
    ],
    isAddress: true,
  },
  {
    icon: Phone,
    title: "Call Us",
    details: ["+91 9607509586"],
    links: ["tel:+919607509586"],
  },
  {
    icon: Mail,
    title: "Email Us",
    details: ["alphainvestmentmnt@gmail.com"],
    links: ["mailto:alphainvestmentmnt@gmail.com"],
  },
  {
    icon: Clock,
    title: "Working Hours",
    details: [
      "Monday - Friday: 9:00 AM - 6:00 PM",
      "Saturday: 10:00 AM - 2:00 PM",
      "Sunday: Closed",
    ],
    isHours: true,
  },
];

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    insuranceType: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      toast({
        title: "Please fill required fields",
        description: "Name, email, and phone are required.",
        variant: "destructive",
      });
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: "", email: "", phone: "", insuranceType: "", message: "" });
      toast({
        title: "Thank you!",
        description: "We'll get back to you within 24 hours with an insurance consultation.",
      });
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>

      {/* Hero Section */}
      <section className="py-28 md:py-36 hero-gradient relative overflow-hidden border-b border-border/10">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl mx-auto text-center space-y-6"
          >
            <span className="text-primary text-xs uppercase tracking-widest font-semibold bg-primary/10 px-4 py-1.5 rounded-full border border-primary/20">
              Get In Touch
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight mt-4">
              Speak With Our <br className="hidden md:inline" />
              <span className="gold-text">Insurance Experts</span>
            </h1>
            <p className="text-base md:text-lg text-muted-foreground/90 max-w-2xl mx-auto font-light leading-relaxed">
              Have questions about coverage, claims, or the right insurance plan? Connect with our advisory team for a free consultation tailored to your protection needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-12 items-start">

            {/* Left Column — Contact Info Cards */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6 lg:col-span-1"
            >
              <div className="space-y-2">
                <span className="text-primary font-semibold text-xs tracking-wider uppercase">Contact Details</span>
                <h2 className="text-2xl font-display font-bold">Connect Directly</h2>
                <p className="text-muted-foreground/80 text-sm font-light">
                  Reach out through any of our direct lines for assistance.
                </p>
              </div>

              {/* Contact Info Cards */}
              <div className="space-y-5">
                {contactCards.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05, duration: 0.5 }}
                    className="relative overflow-hidden glass-card rounded-2xl p-6 border border-border/30 hover:border-primary/45 hover:-translate-y-[2px] transition-all duration-300 shadow-sm flex items-start gap-5 group"
                  >
                    {/* Animated gold bottom line */}
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2.5px] bg-primary group-hover:w-full transition-all duration-500 z-10" />
                    <div className="w-12 h-12 rounded-xl border border-primary/20 bg-primary/5 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-foreground mb-2 text-xs uppercase tracking-wider">{item.title}</h3>
                      <div className="space-y-1">
                        {item.details.map((detail, i) =>
                          item.links ? (
                            <a
                              key={i}
                              href={item.links[i]}
                              className="block text-muted-foreground/85 hover:text-primary transition-colors text-sm font-light leading-relaxed"
                            >
                              {detail}
                            </a>
                          ) : (
                            <div key={i} className="text-muted-foreground/85 text-sm font-light leading-relaxed">
                              {detail}
                              {item.isAddress && i < item.details.length - 1 && (
                                <span className="block border-b border-border/10 my-1.5" />
                              )}
                            </div>
                          )
                        )}
                      </div>
                      {item.isHours && (
                        <span className="mt-3.5 inline-block text-[9px] font-bold text-primary uppercase tracking-[0.12em] bg-primary/5 px-2.5 py-1 rounded border border-primary/10">
                          Consultation by Appointment Available
                        </span>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* WhatsApp Card */}
              <motion.a
                href="https://wa.me/919607509586?text=Hi%2C%20I%20need%20help%20with%20an%20insurance%20consultation."
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.25, duration: 0.5 }}
                className="relative overflow-hidden glass-card rounded-2xl p-6 border border-border/30 hover:border-emerald-500/45 hover:-translate-y-[2px] transition-all duration-300 shadow-sm flex items-start gap-5 group block"
              >
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2.5px] bg-emerald-500 group-hover:w-full transition-all duration-500 z-10" />
                <div className="w-12 h-12 rounded-xl border border-emerald-500/30 bg-emerald-500/5 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300">
                  <MessageCircle className="h-5 w-5 text-emerald-500" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-foreground mb-1 text-xs uppercase tracking-wider">WhatsApp Us</h3>
                  <p className="text-muted-foreground/80 text-sm font-light leading-relaxed">
                    Chat directly for a quick insurance quote or query.
                  </p>
                  <span className="mt-2 inline-block text-[9px] font-bold text-emerald-500 uppercase tracking-[0.12em] bg-emerald-500/5 px-2.5 py-1 rounded border border-emerald-500/15">
                    +91 9607509586
                  </span>
                </div>
              </motion.a>

              {/* Trust Badge Grid Card */}
              <div className="glass-card rounded-2xl p-6 border border-border/30 bg-[#030712]/30 space-y-4 shadow-sm group relative overflow-hidden transition-all duration-300 hover:border-primary/30">
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2.5px] bg-primary group-hover:w-full transition-all duration-500 z-10" />
                <h4 className="text-[10px] font-bold uppercase tracking-[0.18em] text-primary">Our Credentials</h4>
                <div className="grid grid-cols-2 gap-3.5 pt-1">
                  {[
                    "SEBI Registered Unit",
                    "20+ Insurance Partners",
                    "3,000+ Families Covered",
                    "100% Transparent Process",
                  ].map((badge) => (
                    <div key={badge} className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full bg-primary/5 border border-primary/20 flex items-center justify-center shrink-0">
                        <Check className="h-3 w-3 text-primary" />
                      </div>
                      <span className="text-[11px] text-muted-foreground/90 font-light">{badge}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="space-y-4 pt-2">
                <div>
                  <h4 className="text-[10px] font-bold uppercase tracking-[0.18em] text-primary">Follow Us</h4>
                  <p className="text-muted-foreground/80 text-[11px] font-light mt-1.5 leading-relaxed">
                    Stay connected for insurance tips, policy updates, and protection planning guides.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {[
                    { icon: Linkedin, href: "#", name: "LinkedIn" },
                    { icon: Twitter, href: "https://x.com/alphaaim_in", name: "Twitter/X" },
                    { icon: Facebook, href: "https://www.facebook.com/shalini.malhotra.50767984/", name: "Facebook" },
                    { icon: Instagram, href: "https://www.instagram.com/alphainvestmentmanagement?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", name: "Instagram" },
                    { icon: MediumIcon, href: "https://medium.com/@mcp", name: "Medium" },
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target={social.href !== "#" ? "_blank" : undefined}
                      rel={social.href !== "#" ? "noopener noreferrer" : undefined}
                      aria-label={social.name}
                      className="w-9 h-9 rounded-lg bg-slate-900/40 border border-border/30 hover:border-primary/45 flex items-center justify-center text-muted-foreground hover:bg-primary/10 hover:text-primary transition-all duration-300 hover:scale-105 active:scale-95 shadow-sm"
                    >
                      <social.icon className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Column — Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2 space-y-6"
            >
              <div className="space-y-2 text-left">
                <span className="text-primary font-semibold text-xs tracking-wider uppercase">Inquiry Form</span>
                <h2 className="text-2xl font-display font-bold">Request a Free Quote</h2>
                <p className="text-muted-foreground/80 text-sm font-light">
                  Submit your details and an insurance advisor will reach out with the best coverage options for you.
                </p>
              </div>

              {/* Consultation Benefits Strip */}
              <div className="grid sm:grid-cols-3 gap-4 p-5 rounded-2xl border border-primary/20 bg-slate-950/45 shadow-sm text-left">
                <div className="space-y-1">
                  <h4 className="text-xs font-bold text-primary flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" /> Coverage Audit
                  </h4>
                  <p className="text-[10px] text-muted-foreground/85 leading-relaxed font-light">
                    We assess your existing policies for gaps, overlaps, and premium optimization opportunities.
                  </p>
                </div>
                <div className="space-y-1 border-t sm:border-t-0 sm:border-l border-border/10 pt-3 sm:pt-0 sm:pl-4">
                  <h4 className="text-xs font-bold text-primary flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" /> Best Fit Match
                  </h4>
                  <p className="text-[10px] text-muted-foreground/85 leading-relaxed font-light">
                    We compare 20+ insurance partners to find the most suitable plan for your budget and needs.
                  </p>
                </div>
                <div className="space-y-1 border-t sm:border-t-0 sm:border-l border-border/10 pt-3 sm:pt-0 sm:pl-4">
                  <h4 className="text-xs font-bold text-primary flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" /> Claims Support
                  </h4>
                  <p className="text-[10px] text-muted-foreground/85 leading-relaxed font-light">
                    Our team stays with you through the full claims process for a smooth, hassle-free settlement.
                  </p>
                </div>
              </div>

              {/* Contact Form Card with gold border */}
              <div className="glass-card rounded-2xl p-8 border border-primary/20 bg-[#030712]/30 shadow-sm group relative overflow-hidden transition-all duration-300 hover:border-primary/35">
                {/* Animated gold bottom line */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2.5px] bg-primary group-hover:w-full transition-all duration-500 z-10" />

                <h3 className="text-lg font-display font-bold mb-6">Request Insurance Consultation</h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground/70">Full Name *</label>
                      <Input
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your full name"
                        className="bg-[#030712]/50 border-border/30 focus-visible:ring-primary/30 rounded-lg h-11"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground/70">Email Address *</label>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="your@email.com"
                        className="bg-[#030712]/50 border-border/30 focus-visible:ring-primary/30 rounded-lg h-11"
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground/70">Phone Number *</label>
                      <Input
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 XXXXX XXXXX"
                        className="bg-[#030712]/50 border-border/30 focus-visible:ring-primary/30 rounded-lg h-11"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground/70">Insurance Type</label>
                      <select
                        value={formData.insuranceType}
                        onChange={(e) => setFormData({ ...formData, insuranceType: e.target.value })}
                        className="w-full bg-[#030712]/50 border border-border/30 rounded-lg h-11 px-3 text-sm text-foreground focus:ring-primary/30 focus:border-primary/30 focus:outline-none"
                      >
                        <option value="">Select insurance type</option>
                        <option>Health Insurance</option>
                        <option>Life Insurance</option>
                        <option>Term Insurance</option>
                        <option>Vehicle Insurance</option>
                        <option>Travel Insurance</option>
                        <option>Home &amp; Shop Insurance</option>
                        <option>Commercial Vehicle Insurance</option>
                        <option>Industrial Insurance</option>
                        <option>Pension / Retirement</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground/70">Message</label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your insurance needs, existing policies, or any specific questions..."
                      rows={4}
                      className="w-full bg-[#030712]/50 border border-border/30 rounded-lg px-3 py-3 text-sm text-foreground focus:ring-primary/30 focus:border-primary/30 focus:outline-none resize-none"
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full gold-gradient text-primary-foreground hover:opacity-95 font-bold text-xs uppercase tracking-wider h-12 rounded-lg shadow-lg shadow-primary/5 hover:shadow-primary/20 transition-all duration-300 hover:scale-[1.01] active:scale-[0.99]"
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Send Consultation Request
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 bg-gradient-to-b from-background via-slate-950/20 to-slate-950/40 border-t border-border/10">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-8">
            <div className="text-center md:text-left space-y-2">
              <span className="text-primary font-semibold text-xs tracking-wider uppercase">Directions</span>
              <h3 className="text-2xl md:text-3xl font-display font-bold">Office Map &amp; Location</h3>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl overflow-hidden h-[400px] border border-border/30 shadow-md group relative hover:border-primary/30 transition-colors duration-300"
            >
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2.5px] bg-primary group-hover:w-full transition-all duration-500 z-10" />
              <iframe
                src="https://maps.google.com/maps?q=Shop%20no%202,%20First%20Floor,%20Mahalungeker%20Complex,%20(opposite%20R%20K%20Wine%20shop),%20Mahalunge%20Ingale%20Kaman,%20Chakan-Talegaon%20Highway,%20Chakan,%20Pune%20410501&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Insurance Mall - Office Location in Chakan, Pune"
                className="grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 ease-in-out"
              />
            </motion.div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 bg-slate-900/10 border border-border/20 rounded-2xl p-6 group relative overflow-hidden transition-all duration-300 hover:border-primary/30">
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2.5px] bg-primary group-hover:w-full transition-all duration-500 z-10" />
              <div className="text-center sm:text-left space-y-1">
                <p className="text-foreground text-sm font-semibold">Insurance Mall — A Unit of Alpha Investment Management</p>
                <p className="text-muted-foreground/80 text-xs font-light">
                  Shop no 2, First Floor, Mahalungeker Complex, (opposite R K Wine shop), Mahalunge Ingale Kaman, Chakan-Talegaon Highway, Chakan, Pune 410501
                </p>
                <p className="text-[10px] text-primary/75 uppercase tracking-wide">Landmark: Opposite R K Wine Shop</p>
              </div>
              <a
                href="https://maps.google.com/?q=Chakan+Talegaon+Highway,+Chakan,+Pune"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl border border-primary/35 hover:bg-primary/5 text-primary text-xs font-semibold tracking-wide transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shrink-0"
              >
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </section>

      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
