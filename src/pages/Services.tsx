import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CTA } from "@/components/CTA";
import { Shield, Car, Truck, Heart, TrendingUp, Home, Landmark, Plane, Building2, ChevronDown, Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const offerings = [
  { icon: Car, title: "Two & Four Wheeler Insurance", overview: "Financial protection against accidents, theft, natural calamities, fire, third-party liabilities, and vehicle damage.", keyBenefits: ["Third-party liability coverage", "Own damage protection", "Cashless garage facilities", "Theft protection", "Add-on riders"], suitableFor: "Individual vehicle owners and fleet operators." },
  { icon: Truck, title: "Commercial Vehicle Insurance", overview: "Protection for trucks, buses, taxis, logistics vehicles, and commercial fleets.", keyBenefits: ["Vehicle damage protection", "Third-party liability", "Driver protection", "Business continuity", "Fleet management support"], suitableFor: "Transport operators and commercial vehicle owners." },
  { icon: Heart, title: "Health Insurance", overview: "Coverage for hospitalization expenses, surgeries, treatments, diagnostics, and medical emergencies.", keyBenefits: ["Cashless hospitalization", "Pre & post hospitalization cover", "Family floater options", "Tax benefits", "Critical illness add-ons"], suitableFor: "Individuals, families, senior citizens, and corporate employees." },
  { icon: TrendingUp, title: "Term Insurance", overview: "Pure life protection providing financial support to dependents in case of the policyholder's demise.", keyBenefits: ["High coverage at affordable premiums", "Income replacement", "Family financial security", "Loan protection", "Long-term protection"], suitableFor: "Working professionals, business owners, and primary earners." },
  { icon: Shield, title: "Life Insurance", overview: "Combines protection and long-term financial planning for wealth creation.", keyBenefits: ["Wealth creation", "Family security", "Savings discipline", "Goal-based planning", "Tax efficiency"], suitableFor: "Individuals seeking both protection and long-term financial planning." },
  { icon: Landmark, title: "Pension Schemes", overview: "Insurance-linked retirement solutions designed to generate post-retirement income.", keyBenefits: ["Retirement corpus creation", "Guaranteed income options", "Long-term security", "Tax advantages", "Financial independence"], suitableFor: "Professionals, business owners, and retirees." },
  { icon: Plane, title: "Travel Insurance", overview: "Protection against travel-related emergencies and uncertainties.", keyBenefits: ["Medical emergency coverage", "Trip cancellation protection", "Lost baggage assistance", "Passport loss coverage", "International support"], suitableFor: "Domestic and international travelers." },
  { icon: Home, title: "Home & Shop Insurance", overview: "Protection for residential and commercial properties against damage and losses.", keyBenefits: ["Fire protection", "Theft coverage", "Natural disaster coverage", "Asset protection", "Business interruption support"], suitableFor: "Homeowners, shop owners, and property investors." },
  { icon: Building2, title: "Industrial Insurance", overview: "Comprehensive risk management solutions for factories, warehouses, plants, and industrial operations.", keyBenefits: ["Property protection", "Machinery breakdown cover", "Liability protection", "Business interruption coverage", "Employee-related risk coverage"], suitableFor: "Manufacturing units, industrial facilities, and enterprises." },
];

const retirementOfferings = [
  { title: "SWP (Systematic Withdrawal Plan)", description: "A structured withdrawal strategy for regular income while maintaining investment growth.", benefits: ["Monthly income", "Tax-efficient withdrawals", "Capital appreciation", "Flexible options"] },
  { title: "Senior Citizen Instruments", description: "Investment products designed for retired individuals seeking stability and income.", benefits: ["Regular income", "Capital safety", "Government-backed options", "Lower risk"] },
  { title: "Pension Plans", description: "Long-term retirement solutions for wealth accumulation and income generation.", benefits: ["Corpus building", "Lifetime income", "Financial independence", "Tax benefits"] },
  { title: "Government Schemes", description: "NPS, Senior Citizen Savings Scheme, PM Vaya Vandana Yojana, Atal Pension Yojana.", benefits: ["Government-backed security", "Stable returns", "Income support", "Wealth preservation"] },
];

const ServicesPage = () => {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
      {/* Hero */}
      <section className="py-28 md:py-36 hero-gradient relative overflow-hidden border-b border-border/10">
        <div className="absolute inset-0 overflow-hidden"><div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl pointer-events-none" /></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl mx-auto text-center space-y-6">
            <span className="text-primary text-xs uppercase tracking-widest font-semibold bg-primary/10 px-4 py-1.5 rounded-full border border-primary/20">Insurance Products</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight">Complete Insurance <span className="gold-text">Product Suite</span></h1>
            <p className="text-lg md:text-xl text-muted-foreground/90 max-w-2xl mx-auto font-light leading-relaxed">Explore our comprehensive range of insurance products designed to cover every aspect of your life, health, assets, and business.</p>
            <Button asChild size="lg" className="gold-gradient text-primary-foreground hover:opacity-90 font-semibold text-xs uppercase tracking-wider px-8 h-12 rounded-sm shadow-md">
              <Link to="/contact" className="inline-flex items-center gap-2">Get Insurance Quote <ArrowRight className="h-4 w-4" /></Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Offerings */}
      <section className="py-24 border-b border-border/10">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-12">
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <span className="text-primary font-semibold text-xs tracking-wider uppercase block mb-3">Protection Portfolio</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold">Comprehensive <span className="gold-text">Insurance Offerings</span></h2>
              <div className="h-[2px] w-20 bg-primary/50 rounded mt-5" />
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {offerings.map((o, i) => {
                const Icon = o.icon;
                const isOpen = expanded === i;
                return (
                  <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                    className="glass-card rounded-2xl border border-transparent overflow-hidden hover-glow hover:border-primary/30 transition-all duration-300 group shadow-md relative">
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2.5px] bg-primary group-hover:w-full transition-all duration-500 z-10" />
                    <button onClick={() => setExpanded(isOpen ? null : i)} className="w-full p-6 text-left hover:bg-card/50 transition-colors" aria-expanded={isOpen}>
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <div className="w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center flex-shrink-0"><Icon className="h-5 w-5 text-primary" /></div>
                        <ChevronDown className={`h-4 w-4 text-muted-foreground/50 transition-transform duration-300 flex-shrink-0 ${isOpen ? "rotate-180" : ""}`} />
                      </div>
                      <h3 className="text-sm font-semibold text-foreground mb-2">{o.title}</h3>
                      <p className="text-xs text-muted-foreground/80 leading-relaxed font-light">{o.overview.substring(0, 80)}...</p>
                    </button>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }}
                          className="border-t border-border/30 overflow-hidden bg-card/30">
                          <div className="p-6 space-y-4">
                            <div><h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary mb-2">Overview</h4><p className="text-xs text-muted-foreground/80 leading-relaxed font-light">{o.overview}</p></div>
                            <div><h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary mb-2">Key Benefits</h4>
                              <ul className="space-y-1.5">{o.keyBenefits.map((b, j) => (<li key={j} className="flex items-start gap-2"><Check className="h-3 w-3 text-primary shrink-0 mt-0.5" /><span className="text-xs text-muted-foreground/80 font-light">{b}</span></li>))}</ul>
                            </div>
                            <div><h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary mb-1">Suitable For</h4><p className="text-xs text-muted-foreground/80 font-light">{o.suitableFor}</p></div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Retirement Planning */}
      <section className="py-24 border-b border-border/10">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-12">
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <span className="text-primary font-semibold text-xs tracking-wider uppercase block mb-3">Retirement Security</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold">Retirement Planning &<span className="gold-text"> Income Protection</span></h2>
              <div className="h-[2px] w-20 bg-primary/50 rounded mt-5" />
              <p className="text-muted-foreground/90 text-base md:text-lg leading-relaxed font-light mt-6">Secure your retirement years through strategic planning, income generation, and wealth transfer solutions.</p>
            </motion.div>
            <div className="grid md:grid-cols-2 gap-6">
              {retirementOfferings.map((o, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                  className="glass-card rounded-2xl p-6 space-y-4 border border-transparent hover-glow hover:border-primary/40 transition-all duration-300 group shadow-md relative overflow-hidden">
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2.5px] bg-primary group-hover:w-full transition-all duration-500 z-10" />
                  <h4 className="text-sm font-semibold text-foreground">{o.title}</h4>
                  <p className="text-xs md:text-sm text-muted-foreground/80 leading-relaxed font-light">{o.description}</p>
                  <div className="space-y-2 pt-2">{o.benefits.map((b, j) => (<div key={j} className="flex items-start gap-2"><Check className="h-3 w-3 text-primary shrink-0 mt-0.5" /><span className="text-xs text-muted-foreground/80 font-light">{b}</span></div>))}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;
