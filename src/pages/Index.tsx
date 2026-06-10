import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Shield,
  Car,
  Truck,
  Heart,
  TrendingUp,
  Home,
  Landmark,
  Plane,
  Building2,
  Check,
  ArrowRight,
  ChevronDown,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";
import { CTA } from "@/components/CTA";

const insuranceOfferings = [
  {
    icon: Car,
    title: "Two & Four Wheeler Insurance",
    description: "Financial protection against accidents, theft, natural calamities, fire, third-party liabilities, and vehicle damage.",
    features: ["Third-party liability coverage", "Own damage protection", "Cashless garage facilities"],
  },
  {
    icon: Truck,
    title: "Commercial Vehicle Insurance",
    description: "Protection for trucks, buses, taxis, logistics vehicles, and commercial fleets.",
    features: ["Vehicle damage protection", "Third-party liability", "Driver protection"],
  },
  {
    icon: Heart,
    title: "Health Insurance",
    description: "Coverage for hospitalization expenses, surgeries, treatments, diagnostics, and medical emergencies.",
    features: ["Cashless hospitalization", "Family floater options", "Critical illness add-ons"],
  },
  {
    icon: TrendingUp,
    title: "Term Insurance",
    description: "Pure life protection providing financial support to dependents in case of the policyholder's demise.",
    features: ["High coverage at affordable premiums", "Income replacement", "Loan protection"],
  },
  {
    icon: Shield,
    title: "Life Insurance",
    description: "Combines protection and long-term financial planning for wealth creation and family security.",
    features: ["Wealth creation", "Family security", "Tax efficiency"],
  },
  {
    icon: Landmark,
    title: "Pension Schemes",
    description: "Insurance-linked retirement solutions designed to generate post-retirement income.",
    features: ["Retirement corpus creation", "Guaranteed income options", "Tax advantages"],
  },
  {
    icon: Plane,
    title: "Travel Insurance",
    description: "Protection against travel-related emergencies and uncertainties for domestic and international travelers.",
    features: ["Medical emergency coverage", "Trip cancellation protection", "Lost baggage assistance"],
  },
  {
    icon: Home,
    title: "Home & Shop Insurance",
    description: "Protection for residential and commercial properties against damage and losses.",
    features: ["Fire protection", "Theft coverage", "Natural disaster coverage"],
  },
  {
    icon: Building2,
    title: "Industrial Insurance",
    description: "Comprehensive risk management solutions for factories, warehouses, plants, and industrial operations.",
    features: ["Property protection", "Machinery breakdown cover", "Liability protection"],
  },
];

const keyBenefits = [
  {
    title: "Comprehensive Coverage Analysis",
    description: "Detailed assessment of existing insurance policies and protection requirements to ensure adequate coverage.",
  },
  {
    title: "Best-in-Class Insurance Products",
    description: "Access to carefully selected insurance solutions from 40+ leading insurance providers across life, health, and general segments.",
  },
  {
    title: "Claims Assistance Support",
    description: "Dedicated support during claim filing, documentation, follow-ups, and settlement processes.",
  },
  {
    title: "Regular Policy Reviews",
    description: "Periodic evaluations to ensure policies remain aligned with changing life goals and financial needs.",
  },
  {
    title: "Family Protection Planning",
    description: "Structured protection strategies covering health, income replacement, education goals, retirement needs.",
  },
  {
    title: "IRDA Licensed Advisory",
    description: "All insurance recommendations are made by IRDA-approved advisors, ensuring full regulatory compliance and client-first transparency.",
  },
];

const processSteps = [
  { number: 1, title: "Need Assessment", description: "Evaluating personal, family, business, and asset protection requirements." },
  { number: 2, title: "Gap Analysis", description: "Identifying underinsured areas, overlapping policies, and financial vulnerabilities." },
  { number: 3, title: "Product Selection", description: "Comparing available insurance options and recommending suitable solutions." },
  { number: 4, title: "Policy Procurement", description: "Assisting in documentation, onboarding, and securing optimal coverage." },
  { number: 5, title: "Claim Support", description: "Providing guidance throughout the claim settlement process." },
];

const partners = {
  life: [
    "LIC", "HDFC Life", "ICICI Prudential Life", "SBI Life", "Axis Max Life",
    "Tata AIA", "Bajaj Allianz Life", "Kotak Life", "PNB MetLife",
    "Canara HSBC Life", "Edelweiss Life", "Pramerica Life", "Future Generali Life",
    "Ageas Federal Life", "IndiaFirst Life",
  ],
  general: [
    "ICICI Lombard", "HDFC ERGO", "Bajaj Allianz General", "Tata AIG",
    "Reliance General", "SBI General", "New India Assurance", "United India Insurance",
    "National Insurance", "Oriental Insurance", "Cholamandalam MS", "Future Generali General",
    "Royal Sundaram", "Shriram General", "Acko General",
  ],
  health: [
    "Star Health", "Care Health Insurance", "Niva Bupa", "Aditya Birla Health",
    "ManipalCigna", "Reliance Health", "HDFC ERGO Health", "ICICI Lombard Health",
    "Bajaj Allianz Health", "SBI Health Insurance",
  ],
};

const faqItems = [
  { question: "Why do I need insurance planning?", answer: "Insurance planning helps protect wealth, income, assets, and family goals against unforeseen risks." },
  { question: "How much life insurance coverage should I have?", answer: "Coverage should generally be aligned with income replacement needs, liabilities, future goals, and family expenses." },
  { question: "Is health insurance necessary if my employer provides coverage?", answer: "Yes. Employer coverage may not be sufficient or portable during career transitions." },
  { question: "How often should insurance policies be reviewed?", answer: "At least once a year or after major life events such as marriage, childbirth, home purchase, or retirement." },
  { question: "Do you assist during claims?", answer: "Yes. We provide guidance and support throughout the claims process." },
];

const Index = () => {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [expandedPartner, setExpandedPartner] = useState<number | null>(null);

  const partnerCategories = [
    {
      title: "Life Insurance Partners",
      description: "Leading life insurance companies offering term, ULIP, and savings plans",
      icon: Shield,
      list: partners.life,
    },
    {
      title: "General Insurance Partners",
      description: "Trusted general insurers covering vehicle, travel, property, and commercial risks",
      icon: Building2,
      list: partners.general,
    },
    {
      title: "Health Insurance Partners",
      description: "Top health insurers providing individual, family floater, and critical illness plans",
      icon: Heart,
      list: partners.health,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
      <Hero />

      {/* Insurance Offerings Grid */}
      <section className="py-24 bg-background border-b border-border/10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-primary font-semibold text-xs tracking-wider uppercase">Protection Portfolio</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 mt-3">
              Comprehensive <span className="gold-text">Insurance Solutions</span>
            </h2>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed font-light">
              From life and health to vehicle and business — we cover every aspect of your protection needs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {insuranceOfferings.slice(0, 3).map((offering, index) => {
              const Icon = offering.icon;
              return (
                <motion.div
                  key={offering.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.06, duration: 0.5 }}
                  className="relative overflow-hidden group glass-card rounded-2xl p-8 hover-glow transition-all duration-350 hover:-translate-y-2 hover:border-primary/30 border border-white/5 bg-card/25 hover:shadow-[0_10px_30px_rgba(218,165,32,0.12)] flex flex-col justify-between"
                >
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2.5px] bg-primary group-hover:w-full transition-all duration-500" />
                  <div>
                    <div className="w-12 h-12 rounded-xl gold-gradient flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
                      <Icon className="h-5.5 w-5.5 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                      {offering.title}
                    </h3>
                    <p className="text-xs md:text-sm leading-relaxed text-muted-foreground mb-5">
                      {offering.description}
                    </p>
                    <ul className="space-y-2 mb-6">
                      {offering.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2.5 text-xs text-muted-foreground">
                          <Check className="h-3 w-3 text-primary shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="pt-2">
                    <Link
                      to="/services"
                      className="inline-flex items-center gap-1.5 text-primary text-xs font-semibold uppercase tracking-wider hover:gap-2.5 transition-all duration-300"
                    >
                      Learn More <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl gold-gradient text-primary-foreground text-sm font-semibold uppercase tracking-wider hover:opacity-95 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-md"
            >
              View All Insurance Products <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-28 bg-secondary/10 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20 space-y-4"
          >
            <span className="text-primary font-semibold text-xs tracking-wider uppercase">Our Advantages</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold">
              Key Benefits of <span className="gold-text">Insurance Mall</span>
            </h2>
            <p className="text-muted-foreground/80 text-base md:text-lg max-w-2xl mx-auto font-light">
              Premium protection strategies engineered to safeguard your wealth, health, assets, and family's financial future.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {keyBenefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="glass-card rounded-2xl p-6 border border-transparent flex flex-col justify-between hover-glow hover:border-primary/40 transition-all duration-300 group shadow-md relative overflow-hidden"
              >
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2.5px] bg-primary group-hover:w-full transition-all duration-500 z-10" />
                <div>
                  <div className="relative w-20 h-20 mx-auto mb-6">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/60 to-amber-500/20 p-[2px] transition-transform duration-500 group-hover:scale-105 group-hover:shadow-[0_0_15px_rgba(218,165,32,0.15)]">
                      <div className="w-full h-full rounded-full bg-[#030712] flex items-center justify-center overflow-hidden relative">
                        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent opacity-60" />
                        <Shield className="h-9 w-9 text-primary/95 group-hover:text-primary transition-colors duration-300" />
                      </div>
                    </div>
                  </div>
                  <h3 className="text-base font-bold text-center text-foreground group-hover:text-primary transition-colors duration-300">{benefit.title}</h3>
                  <p className="text-xs font-light text-center text-muted-foreground/85 mt-3 leading-relaxed">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 border-b border-border/10">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-primary font-semibold text-xs tracking-wider uppercase block mb-3">Structured Approach</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold">
                Our <span className="gold-text">Insurance Advisory Process</span>
              </h2>
              <div className="h-[2px] w-20 bg-primary/50 rounded mt-5" />
            </motion.div>

            <div className="grid md:grid-cols-5 gap-4">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="glass-card rounded-2xl p-6 border border-transparent flex flex-col justify-between hover-glow hover:border-primary/40 transition-all duration-300 group shadow-md relative overflow-hidden"
                >
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2.5px] bg-primary group-hover:w-full transition-all duration-500 z-10" />
                  <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-gradient-to-tr from-primary/60 to-amber-500/20 p-[2px]">
                    <div className="w-full h-full rounded-full bg-[#030712] flex items-center justify-center">
                      <span className="text-xs font-bold font-display tracking-widest text-primary/95">{step.number}</span>
                    </div>
                  </div>
                  <h3 className="text-sm font-semibold text-foreground pt-2">{step.title}</h3>
                  <p className="text-xs text-muted-foreground/80 leading-relaxed font-light flex-grow">{step.description}</p>
                  {index < processSteps.length - 1 && (
                    <div className="hidden md:block absolute -right-2 top-1/2 w-4 h-4 border-t border-r border-border/50 transform -translate-y-1/2 rotate-45" />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Insurance Partners */}
      <section className="py-24 border-b border-border/10">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <span className="text-primary font-semibold text-xs tracking-wider uppercase block mb-3">Trusted Partners</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Our <span className="gold-text">Insurance Partners</span>
              </h2>
              <div className="h-[2px] w-20 bg-primary/50 rounded mx-auto mb-6" />
              <p className="text-muted-foreground/90 text-base md:text-lg leading-relaxed font-light max-w-2xl mx-auto">
                We collaborate with 40+ leading insurance providers to deliver reliable protection solutions across life, health, motor, travel, property, and business insurance segments.
              </p>
            </motion.div>

            <div className="space-y-6">
              {partnerCategories.map((category, index) => {
                const isExpanded = expandedPartner === index;
                const Icon = category.icon;
                return (
                  <motion.div
                    key={category.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05, duration: 0.5 }}
                    className={`glass-card rounded-2xl overflow-hidden border transition-all duration-300 relative group ${
                      isExpanded
                        ? "border-primary/30 bg-gradient-to-b from-slate-900/40 via-slate-950/20 to-slate-950/10 shadow-lg shadow-primary/[0.02]"
                        : "border-border/30 hover:border-primary/20 hover:-translate-y-[2px] bg-slate-950/20 shadow-sm"
                    }`}
                  >
                    {/* Bottom border animation */}
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2.5px] bg-primary group-hover:w-full transition-all duration-500 z-10" />

                    {/* Accordion Header */}
                    <button
                      onClick={() => setExpandedPartner(isExpanded ? null : index)}
                      className="w-full p-4 md:p-8 flex items-center gap-4 md:gap-6 text-left transition-colors relative group"
                    >
                      {isExpanded && (
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/[0.03] to-transparent pointer-events-none" />
                      )}
                      <div className="w-14 h-14 rounded-2xl border border-primary/20 bg-primary/5 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300 shadow-[0_0_15px_rgba(218,165,32,0.03)]">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1 space-y-1">
                        <h3 className="text-lg md:text-xl font-bold font-display text-foreground group-hover:text-primary transition-colors duration-300">
                          {category.title}
                        </h3>
                        <p className="text-muted-foreground/85 text-xs md:text-sm font-light leading-relaxed">
                          {category.description}
                        </p>
                      </div>
                      <div className="w-9 h-9 rounded-full border border-border/50 flex items-center justify-center shrink-0 group-hover:border-primary/45 transition-colors">
                        <ChevronDown
                          className={`h-4 w-4 text-muted-foreground group-hover:text-primary transition-transform duration-300 ${
                            isExpanded ? "rotate-180 text-primary" : ""
                          }`}
                        />
                      </div>
                    </button>

                    {/* Expanded Partner Chips */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.35, ease: "easeInOut" }}
                          className="overflow-hidden border-t border-border/10 bg-[#02050c]/25"
                        >
                          <div className="p-6 md:p-8">
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                              {category.list.map((partner, i) => (
                                <motion.div
                                  key={partner}
                                  initial={{ opacity: 0, scale: 0.95 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  transition={{ delay: i * 0.02 }}
                                  className="w-full h-12 flex items-center justify-center px-4 rounded-xl bg-[#030712]/50 border border-border/40 hover:border-primary/30 hover:bg-primary/[0.02] hover:text-primary transition-all duration-300 text-center font-light tracking-wide text-xs text-muted-foreground/85 cursor-default shadow-sm"
                                >
                                  {partner}
                                </motion.div>
                              ))}
                            </div>
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

      {/* FAQ Section */}
      <section className="py-24 border-b border-border/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-primary font-semibold text-xs tracking-wider uppercase block mb-3">Common Questions</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold">
                Frequently Asked <span className="gold-text">Questions</span>
              </h2>
              <div className="h-[2px] w-20 bg-primary/50 rounded mt-5" />
            </motion.div>

            <div className="space-y-2 divide-y divide-border/25">
              {faqItems.map((item, index) => {
                const isExpanded = expandedFaq === index;
                return (
                  <div key={index}>
                    <button
                      onClick={() => setExpandedFaq(isExpanded ? null : index)}
                      className="w-full py-4 flex items-center justify-between gap-3 text-left group hover:text-primary transition-colors"
                      aria-expanded={isExpanded}
                    >
                      <h3 className={`text-sm md:text-base font-semibold transition-colors ${isExpanded ? "text-primary" : "group-hover:text-primary"}`}>
                        {item.question}
                      </h3>
                    </button>
                    {isExpanded && (
                      <div className="overflow-hidden pb-4">
                        <p className="text-muted-foreground/90 text-sm leading-relaxed font-light pt-2">
                          {item.answer}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
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

export default Index;
