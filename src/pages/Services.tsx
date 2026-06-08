import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CTA } from "@/components/CTA";
import { Shield, Car, Truck, Heart, TrendingUp, Home, Landmark, Plane, Building2, ChevronDown, Check, ArrowRight, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const insuranceCategories = [
  {
    icon: Car,
    title: "Two & Four Wheeler Insurance",
    description: "Financial protection against accidents, theft, natural calamities, fire, third-party liabilities, and vehicle damage for personal vehicles.",
    keyBenefits: [
      "Third-party liability coverage as per Motor Vehicles Act",
      "Own damage protection for accidental damages",
      "Cashless repair facility at network garages",
      "Coverage for theft, fire, and natural calamities",
      "Personal accident cover for owner-driver",
      "No Claim Bonus (NCB) for claim-free years",
    ],
    process: [
      "Vehicle Assessment - Evaluating your vehicle type and usage pattern",
      "Coverage Selection - Choosing between third-party and comprehensive plans",
      "Premium Comparison - Comparing quotes from multiple insurers",
      "Policy Issuance - Securing optimal coverage with best premium",
      "Claims Support - End-to-end assistance during claim settlement",
    ],
    offerings: [
      "Two Wheeler Insurance",
      "Four Wheeler Insurance",
      "New Vehicle Insurance",
      "Used Vehicle Insurance",
      "Electric Vehicle Insurance",
      "Third-Party Only Plans",
      "Comprehensive Plans",
      "Add-on Covers (Zero Dep, RSA, Engine Protect)",
    ],
    suitableFor: "Individual vehicle owners, families with multiple vehicles, and first-time buyers.",
  },
  {
    icon: Truck,
    title: "Commercial Vehicle Insurance",
    description: "Comprehensive protection for trucks, buses, taxis, logistics vehicles, and commercial fleets against road risks and liabilities.",
    keyBenefits: [
      "Mandatory third-party liability protection",
      "Vehicle damage coverage for commercial use",
      "Driver and cleaner personal accident cover",
      "Goods-in-transit protection options",
      "Fleet discount for multiple vehicles",
      "Business continuity assurance",
    ],
    process: [
      "Fleet Analysis - Assessing your commercial vehicle portfolio",
      "Risk Evaluation - Understanding operational risks and exposure",
      "Product Matching - Selecting appropriate commercial policies",
      "Documentation - Handling registration and policy paperwork",
      "Claims Management - Dedicated fleet claims support",
    ],
    offerings: [
      "Goods Carrying Vehicle Insurance",
      "Passenger Carrying Vehicle Insurance",
      "Taxi & Cab Insurance",
      "Fleet Insurance",
      "Construction Vehicle Insurance",
      "Agricultural Vehicle Insurance",
    ],
    suitableFor: "Transport operators, logistics companies, fleet owners, and commercial vehicle operators.",
  },
  {
    icon: Heart,
    title: "Health Insurance",
    description: "Complete coverage for hospitalization expenses, surgeries, treatments, diagnostics, and medical emergencies for individuals and families.",
    keyBenefits: [
      "Cashless hospitalization at 10,000+ network hospitals",
      "Pre and post hospitalization expense coverage",
      "Family floater plans for entire family",
      "Critical illness coverage add-ons",
      "No claim bonus for claim-free years",
      "Tax benefits under Section 80D",
      "Day care procedure coverage",
      "Ambulance charges covered",
    ],
    process: [
      "Health Assessment - Understanding medical history and family needs",
      "Coverage Planning - Determining adequate sum insured",
      "Plan Comparison - Comparing policies across insurers",
      "Policy Selection - Choosing the most suitable plan",
      "Claims Guidance - Cashless and reimbursement support",
    ],
    offerings: [
      "Individual Health Insurance",
      "Family Floater Plans",
      "Senior Citizen Health Insurance",
      "Critical Illness Insurance",
      "Group Health Insurance",
      "Maternity Health Insurance",
      "Top-up & Super Top-up Plans",
      "Personal Accident Cover",
    ],
    suitableFor: "Individuals, families, senior citizens, corporate employees, and self-employed professionals.",
  },
  {
    icon: TrendingUp,
    title: "Term Insurance",
    description: "Pure life protection providing substantial financial support to dependents in case of the policyholder's untimely demise — the most cost-effective form of life cover.",
    keyBenefits: [
      "High sum assured at affordable premiums",
      "Income replacement for dependent family members",
      "Loan and liability protection",
      "Tax-free death benefit under Section 10(10D)",
      "Premium waiver on critical illness (optional)",
      "Flexible policy terms (10-40 years)",
      "Return of premium options available",
    ],
    process: [
      "Need Assessment - Calculating human life value and coverage needs",
      "Term Selection - Choosing appropriate policy duration",
      "Product Comparison - Evaluating plans from top insurers",
      "Medical Underwriting - Completing health checks if required",
      "Policy Activation - Securing coverage for your family",
    ],
    offerings: [
      "Level Term Insurance",
      "Increasing Term Insurance",
      "Decreasing Term Insurance",
      "Return of Premium Term Plans",
      "Term Plans with Critical Illness Rider",
      "Joint Life Term Insurance",
      "Group Term Insurance",
    ],
    suitableFor: "Working professionals, sole earners, business owners, loan holders, and young families.",
  },
  {
    icon: Shield,
    title: "Life Insurance",
    description: "Combines life protection with long-term wealth creation — providing both financial security for your family and a disciplined savings instrument for future goals.",
    keyBenefits: [
      "Dual benefit of protection and savings",
      "Wealth creation through long-term compounding",
      "Tax benefits under Section 80C and 10(10D)",
      "Loan facility against policy value",
      "Maturity benefits for goal-based planning",
      "Guaranteed and non-guaranteed bonus options",
    ],
    process: [
      "Goal Mapping - Understanding protection and savings objectives",
      "Product Selection - Matching with suitable life insurance plans",
      "Premium Structuring - Optimizing premium payment schedule",
      "Policy Management - Ongoing servicing and reviews",
      "Maturity Planning - Utilizing maturity proceeds effectively",
    ],
    offerings: [
      "Endowment Plans",
      "Money Back Policies",
      "Whole Life Insurance",
      "Unit-Linked Insurance Plans (ULIPs)",
      "Child Education Plans",
      "Marriage Planning Policies",
      "Guaranteed Return Plans",
    ],
    suitableFor: "Individuals seeking combined protection and savings, parents planning for children's future, and long-term wealth builders.",
  },
  {
    icon: Landmark,
    title: "Pension & Retirement Schemes",
    description: "Insurance-linked retirement solutions designed to generate sustainable post-retirement income and ensure financial independence in your golden years.",
    keyBenefits: [
      "Retirement corpus creation through systematic savings",
      "Guaranteed annuity income options",
      "Long-term financial independence",
      "Tax advantages under applicable sections",
      "Inflation-adjusted pension options",
      "Spouse continuation benefit",
    ],
    process: [
      "Retirement Lifestyle Analysis - Understanding expected retirement needs",
      "Corpus Calculation - Estimating the amount required",
      "Product Selection - Choosing appropriate pension instruments",
      "Income Planning - Creating sustainable post-retirement cash flows",
      "Estate Planning - Structuring wealth transfer to next generation",
    ],
    offerings: [
      "Immediate Annuity Plans",
      "Deferred Annuity Plans",
      "National Pension System (NPS)",
      "Atal Pension Yojana (APY)",
      "PM Vaya Vandana Yojana",
      "Senior Citizen Savings Scheme (SCSS)",
      "Systematic Withdrawal Plans (SWP)",
      "Pension Plan Riders",
    ],
    suitableFor: "Working professionals approaching retirement, self-employed individuals, and anyone planning for financial independence.",
  },
  {
    icon: Plane,
    title: "Travel Insurance",
    description: "Complete protection against travel-related emergencies, medical situations, trip disruptions, and baggage losses for both domestic and international travelers.",
    keyBenefits: [
      "Overseas medical emergency coverage",
      "Trip cancellation and interruption protection",
      "Lost, stolen, or delayed baggage compensation",
      "Emergency medical evacuation",
      "Passport loss assistance",
      "24/7 global assistance helpline",
      "Visa requirement compliance",
    ],
    process: [
      "Trip Assessment - Understanding destination, duration, and activities",
      "Coverage Selection - Choosing appropriate protection level",
      "Policy Comparison - Evaluating plans for best value",
      "Documentation - Quick online policy issuance",
      "Emergency Support - 24/7 assistance during travel",
    ],
    offerings: [
      "International Travel Insurance",
      "Domestic Travel Insurance",
      "Student Travel Insurance",
      "Senior Citizen Travel Insurance",
      "Business Travel Insurance",
      "Multi-trip Annual Plans",
      "Schengen Visa Travel Insurance",
      "Adventure Sports Coverage",
    ],
    suitableFor: "International and domestic travelers, students studying abroad, business travelers, and families on vacation.",
  },
  {
    icon: Home,
    title: "Home & Shop Insurance",
    description: "Comprehensive protection for residential homes, rental properties, and commercial shops against fire, theft, natural disasters, and structural damage.",
    keyBenefits: [
      "Structure and building protection",
      "Contents and belongings coverage",
      "Fire, explosion, and lightning damage",
      "Natural disaster coverage (flood, earthquake, storm)",
      "Theft and burglary protection",
      "Rent loss coverage for landlords",
      "Liability protection for injuries on premises",
    ],
    process: [
      "Property Assessment - Evaluating property type and value",
      "Risk Analysis - Identifying location-specific risks",
      "Coverage Structuring - Building adequate protection",
      "Premium Optimization - Getting competitive rates",
      "Claims Processing - Quick settlement for property losses",
    ],
    offerings: [
      "Home Structure Insurance",
      "Home Contents Insurance",
      "Householder's Policy",
      "Shop/Office Insurance",
      "Fire Insurance",
      "Burglary Insurance",
      "Landlord Insurance",
      "Tenant Insurance",
    ],
    suitableFor: "Homeowners, tenants, landlords, shop owners, and small business owners with commercial premises.",
  },
  {
    icon: Building2,
    title: "Industrial & Business Insurance",
    description: "Enterprise-grade risk management solutions for factories, warehouses, manufacturing plants, and business operations — protecting assets, employees, and business continuity.",
    keyBenefits: [
      "Property and asset protection for industrial units",
      "Machinery breakdown and boiler insurance",
      "Business interruption coverage",
      "Public and product liability protection",
      "Employee compensation insurance",
      "Marine cargo and transit insurance",
      "Professional indemnity coverage",
    ],
    process: [
      "Risk Survey - On-site assessment of industrial risks",
      "Exposure Analysis - Quantifying asset values and liabilities",
      "Coverage Design - Creating tailored industrial protection",
      "Policy Placement - Securing coverage with specialized insurers",
      "Loss Prevention - Ongoing risk management advisory",
    ],
    offerings: [
      "Standard Fire & Special Perils Policy",
      "Industrial All Risk Policy",
      "Machinery Breakdown Insurance",
      "Business Interruption Insurance",
      "Marine Cargo Insurance",
      "Public Liability Insurance",
      "Product Liability Insurance",
      "Workmen Compensation Policy",
      "Directors & Officers Liability",
      "Cyber Insurance",
    ],
    suitableFor: "Manufacturing units, warehouses, IT companies, factories, startups, SMEs, and large enterprises.",
  },
];

const insurancePartners = {
  life: ["LIC", "HDFC Life", "ICICI Prudential Life", "SBI Life", "Max Life", "Tata AIA", "Bajaj Allianz Life", "PNB MetLife", "Kotak Life"],
  general: ["ICICI Lombard", "HDFC ERGO", "Bajaj Allianz General", "Tata AIG", "Reliance General", "SBI General", "New India Assurance", "United India", "Oriental Insurance"],
  health: ["Star Health", "Care Health Insurance", "Niva Bupa", "Aditya Birla Health", "ManipalCigna", "HDFC ERGO Health"],
};

const ServicesPage = () => {
  const [expandedService, setExpandedService] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="py-28 md:py-36 hero-gradient relative overflow-hidden border-b border-border/10">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl mx-auto text-center space-y-6">
            <span className="text-primary text-xs uppercase tracking-widest font-semibold bg-primary/10 px-4 py-1.5 rounded-full border border-primary/20">Complete Insurance Products</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight">
              All Insurance <span className="gold-text">Products & Services</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground/90 max-w-2xl mx-auto font-light leading-relaxed">
              Explore our complete portfolio of 9 insurance categories with detailed coverage, benefits, and offerings from 20+ leading insurance partners.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 pt-4 justify-center">
              <Button asChild size="lg" className="gold-gradient text-primary-foreground hover:opacity-90 font-semibold text-xs uppercase tracking-wider px-8 h-12 rounded-sm shadow-md">
                <Link to="/contact" className="inline-flex items-center gap-2">Get Insurance Quote <ArrowRight className="h-4 w-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary/20 hover:border-primary/50 hover:bg-primary/5 text-xs uppercase tracking-wider px-8 h-12 rounded-sm text-foreground font-semibold">
                <a href="tel:+919607509586">Call: +91 9607509586</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Insurance Categories — Full Accordion */}
      <section className="py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-6">
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
              <span className="text-primary font-semibold text-xs tracking-wider uppercase block mb-3">Protection Portfolio</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold">Detailed <span className="gold-text">Insurance Categories</span></h2>
              <p className="text-muted-foreground/80 text-base md:text-lg leading-relaxed font-light mt-4 max-w-3xl">Click on any insurance category below to see complete details including key benefits, our advisory process, available products, and who it's suitable for.</p>
              <div className="h-[2px] w-20 bg-primary/50 rounded mt-5" />
            </motion.div>

            {insuranceCategories.map((service, index) => {
              const isExpanded = expandedService === index;
              return (
                <motion.div
                  key={service.title}
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
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2.5px] bg-primary group-hover:w-full transition-all duration-500 z-10" />

                  {/* Header */}
                  <button
                    onClick={() => setExpandedService(isExpanded ? null : index)}
                    className="w-full p-6 md:p-8 flex items-center gap-5 md:gap-6 text-left transition-colors relative group"
                  >
                    {isExpanded && <div className="absolute inset-0 bg-gradient-to-r from-primary/[0.03] to-transparent pointer-events-none" />}
                    <div className="w-14 h-14 rounded-2xl border border-primary/20 bg-primary/5 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1 space-y-1">
                      <h3 className="text-lg md:text-xl font-bold font-display text-foreground group-hover:text-primary transition-colors duration-300">{service.title}</h3>
                      <p className="text-muted-foreground/85 text-xs md:text-sm font-light leading-relaxed max-w-2xl">{service.description}</p>
                    </div>
                    <div className="w-9 h-9 rounded-full border border-border/50 flex items-center justify-center shrink-0 group-hover:border-primary/45 transition-colors">
                      <ChevronDown className={`h-4 w-4 text-muted-foreground group-hover:text-primary transition-transform duration-300 ${isExpanded ? "rotate-180 text-primary" : ""}`} />
                    </div>
                  </button>

                  {/* Expanded Details */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.35 }} className="overflow-hidden">
                        <div className="px-6 pb-8 md:px-10 md:pb-10 grid md:grid-cols-3 gap-10 border-t border-border/10 pt-8 bg-[#02050c]/20">
                          {/* Col 1: Key Benefits */}
                          <div className="space-y-5">
                            <h4 className="text-xs font-bold uppercase tracking-[0.18em] text-primary flex items-center gap-2 border-b border-border/10 pb-3">Key Benefits</h4>
                            <ul className="space-y-3.5">
                              {service.keyBenefits.map((benefit, i) => (
                                <motion.li key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.04 }} className="flex items-start gap-3">
                                  <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                                  <span className="text-muted-foreground/90 text-xs md:text-sm font-light leading-relaxed">{benefit}</span>
                                </motion.li>
                              ))}
                            </ul>
                          </div>
                          {/* Col 2: Process */}
                          <div className="space-y-5">
                            <h4 className="text-xs font-bold uppercase tracking-[0.18em] text-primary border-b border-border/10 pb-3">Our Process</h4>
                            <ol className="relative border-l border-primary/20 pl-3 ml-3 space-y-5">
                              {service.process.map((step, i) => {
                                const parts = step.split(" - ");
                                return (
                                  <motion.li key={i} initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.04 }} className="relative pl-6">
                                    <span className="absolute -left-[22.5px] top-0 w-[18px] h-[18px] rounded-full bg-slate-950 border border-primary/45 flex items-center justify-center text-[9px] text-primary font-bold">{i + 1}</span>
                                    <h5 className="text-xs md:text-sm font-semibold text-foreground">{parts[0]}</h5>
                                    {parts[1] && <p className="text-[11px] leading-relaxed text-muted-foreground/80 mt-1 font-light">{parts[1]}</p>}
                                  </motion.li>
                                );
                              })}
                            </ol>
                          </div>
                          {/* Col 3: Products + Suitable For */}
                          <div className="space-y-5">
                            <h4 className="text-xs font-bold uppercase tracking-[0.18em] text-primary border-b border-border/10 pb-3">Available Products</h4>
                            <div className="flex flex-wrap gap-2 pt-1">
                              {service.offerings.map((offering, i) => (
                                <motion.div key={i} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.03 }}
                                  className="px-3.5 py-1.5 rounded-xl bg-[#030712]/50 border border-border/40 hover:border-primary/30 hover:bg-primary/[0.02] hover:text-primary transition-all duration-300 text-xs text-muted-foreground/85 cursor-default font-light tracking-wide shadow-sm">
                                  {offering}
                                </motion.div>
                              ))}
                            </div>
                            <div className="pt-4 border-t border-border/10">
                              <h4 className="text-xs font-bold uppercase tracking-[0.18em] text-primary mb-2">Suitable For</h4>
                              <p className="text-xs text-muted-foreground/80 font-light leading-relaxed">{service.suitableFor}</p>
                            </div>
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
      </section>

      {/* Insurance Partners */}
      <section className="py-24 bg-secondary/10 relative border-t border-border/10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto space-y-12">
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center">
              <span className="text-primary font-semibold text-xs tracking-wider uppercase block mb-3">Trusted Network</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Our <span className="gold-text">Insurance Partners</span></h2>
              <div className="h-[2px] w-20 bg-primary/50 rounded mx-auto mb-6" />
              <p className="text-muted-foreground/90 text-base md:text-lg leading-relaxed font-light max-w-2xl mx-auto">We work with India's leading insurance providers to deliver the best protection solutions across all categories.</p>
            </motion.div>

            {Object.entries(insurancePartners).map(([category, partners], ci) => (
              <div key={category} className="space-y-4">
                <h3 className="text-sm font-semibold text-foreground capitalize">{category} Insurance Partners</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3">
                  {partners.map((partner, i) => (
                    <motion.div key={i} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.03 }}
                      className="glass-card rounded-2xl p-4 text-center border border-transparent hover-glow hover:border-primary/40 transition-all duration-300 group shadow-md relative overflow-hidden">
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2.5px] bg-primary group-hover:w-full transition-all duration-500 z-10" />
                      <p className="text-xs font-semibold text-foreground">{partner}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </div>
  );
};

export default ServicesPage;
