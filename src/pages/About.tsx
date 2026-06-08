import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CTA } from "@/components/CTA";
import { Shield, Users, Award, Building2, Target, Eye, Check, Handshake, FileCheck, Clock, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="py-28 md:py-36 hero-gradient relative overflow-hidden border-b border-border/10">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl mx-auto text-center space-y-6">
            <span className="text-primary text-xs uppercase tracking-widest font-semibold bg-primary/10 px-4 py-1.5 rounded-full border border-primary/20">About Us</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight">
              About <span className="gold-text">Insurance Mall</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground/90 max-w-2xl mx-auto font-light leading-relaxed">
              A Unit of Alpha Investment Management — Your trusted insurance advisory partner since 2014.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-24 border-b border-border/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-6">
              <span className="text-primary font-semibold text-xs tracking-wider uppercase block">Who We Are</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold">
                <span className="gold-text">Insurance Mall</span> — Your Trusted Protection Partner
              </h2>
              <div className="h-[2px] w-20 bg-primary/50 rounded" />
              <div className="space-y-6 text-muted-foreground/90 text-sm md:text-base font-light leading-relaxed">
                <p>Insurance Mall is the dedicated insurance advisory division of <strong className="text-foreground font-medium">Alpha Investment Management</strong>, established to provide comprehensive, unbiased insurance guidance to individuals, families, and businesses across India.</p>
                <p>With over a decade of experience in financial services, our team understands that insurance is not merely a financial product — it is a <strong className="text-foreground font-medium">protection strategy</strong>. We help clients identify risks, bridge coverage gaps, and select suitable insurance solutions from 20+ leading insurance providers.</p>
                <p>As a unit of Alpha Investment Management, a <strong className="text-foreground font-medium">SEBI Registered Investment Advisor (INA000017348)</strong>, we bring the same fiduciary commitment and institutional-grade expertise to insurance advisory that has earned the trust of over 3000 families across India.</p>
                <p>Our insurance advisory services cover <strong className="text-foreground font-medium">9 comprehensive categories</strong>: Health, Life, Term, Vehicle (Two & Four Wheeler), Commercial Vehicle, Travel, Home & Shop, Industrial, and Pension/Retirement — ensuring every aspect of your life, health, assets, and business is protected.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-secondary/10 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { val: "10+", label: "Years Experience", icon: Award },
              { val: "3000+", label: "Families Protected", icon: Users },
              { val: "20+", label: "Insurance Partners", icon: Handshake },
              { val: "9", label: "Insurance Categories", icon: Shield },
            ].map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  className="glass-card rounded-2xl p-6 text-center border border-transparent hover-glow hover:border-primary/40 transition-all duration-300 group shadow-md relative overflow-hidden">
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2.5px] bg-primary group-hover:w-full transition-all duration-500 z-10" />
                  <div className="w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center mx-auto mb-3">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="text-2xl font-bold font-display text-foreground group-hover:text-primary transition-colors">{stat.val}</div>
                  <div className="text-[10px] font-bold text-muted-foreground/60 tracking-wider uppercase mt-1">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 border-b border-border/10">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
            {[
              { icon: Target, title: "Our Mission", desc: "To provide objective, client-first insurance advisory services that help individuals, families, and businesses achieve comprehensive financial protection. We are committed to identifying coverage gaps, recommending suitable solutions from leading providers, and standing by our clients through every claim and policy lifecycle event." },
              { icon: Eye, title: "Our Vision", desc: "To be India's most trusted insurance advisory partner — known for unbiased guidance, comprehensive coverage analysis, dedicated claims support, proactive policy reviews, and long-term client relationships built on transparency and expertise." },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  className="glass-card rounded-2xl p-8 border border-transparent hover-glow hover:border-primary/40 transition-all duration-300 group shadow-md relative overflow-hidden">
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2.5px] bg-primary group-hover:w-full transition-all duration-500 z-10" />
                  <div className="w-12 h-12 rounded-xl gold-gradient flex items-center justify-center mb-6"><Icon className="h-6 w-6 text-primary-foreground" /></div>
                  <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">{item.title}</h3>
                  <p className="text-sm text-muted-foreground/80 leading-relaxed font-light">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="py-24 border-b border-border/10">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-12">
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <span className="text-primary font-semibold text-xs tracking-wider uppercase block mb-3">Our Advantages</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold">What Sets <span className="gold-text">Insurance Mall</span> Apart</h2>
              <div className="h-[2px] w-20 bg-primary/50 rounded mt-5" />
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: Shield, title: "SEBI-Backed Advisory", desc: "Backed by Alpha Investment Management, a SEBI Registered Investment Advisor (INA000017348) — ensuring fiduciary-grade advisory standards." },
                { icon: FileCheck, title: "Unbiased Recommendations", desc: "Product-agnostic guidance — we recommend insurance solutions based purely on your needs, not commissions or partnerships." },
                { icon: Users, title: "Dedicated Claims Support", desc: "End-to-end claims assistance including documentation, follow-ups, and settlement support — we stand by you when it matters most." },
                { icon: Clock, title: "Regular Policy Reviews", desc: "Proactive annual policy reviews to ensure your coverage stays aligned with changing life circumstances and financial goals." },
                { icon: Handshake, title: "20+ Insurance Partners", desc: "Access to leading insurance providers across life, health, general, and specialized categories for comprehensive comparison." },
                { icon: Award, title: "10+ Years of Trust", desc: "Over a decade of experience serving 3000+ families with personalized financial protection strategies." },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                    className="glass-card rounded-2xl p-6 border border-transparent hover-glow hover:border-primary/30 transition-all duration-300 group shadow-md relative overflow-hidden">
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2.5px] bg-primary group-hover:w-full transition-all duration-500 z-10" />
                    <div className="w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center mb-4">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="text-sm font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
                    <p className="text-xs text-muted-foreground/80 leading-relaxed font-light">{item.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Our Advisory Process */}
      <section className="py-24 border-b border-border/10">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-12">
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <span className="text-primary font-semibold text-xs tracking-wider uppercase block mb-3">Structured Approach</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold">Our Insurance <span className="gold-text">Advisory Process</span></h2>
              <div className="h-[2px] w-20 bg-primary/50 rounded mt-5" />
            </motion.div>
            <div className="grid md:grid-cols-5 gap-4">
              {[
                { step: "01", title: "Need Assessment", desc: "Evaluating personal, family, business, and asset protection requirements." },
                { step: "02", title: "Gap Analysis", desc: "Identifying underinsured areas, overlapping policies, and financial vulnerabilities." },
                { step: "03", title: "Product Selection", desc: "Comparing available insurance options and recommending suitable solutions." },
                { step: "04", title: "Policy Procurement", desc: "Assisting in documentation, onboarding, and securing optimal coverage." },
                { step: "05", title: "Claim Support", desc: "Providing end-to-end guidance throughout the claim settlement process." },
              ].map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                  className="glass-card rounded-2xl p-5 border border-transparent hover-glow hover:border-primary/40 transition-all duration-300 group shadow-md relative overflow-hidden text-center">
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2.5px] bg-primary group-hover:w-full transition-all duration-500 z-10" />
                  <span className="text-2xl font-bold font-display text-primary/30 group-hover:text-primary/60 transition-colors">{item.step}</span>
                  <h4 className="text-xs font-semibold text-foreground mt-2">{item.title}</h4>
                  <p className="text-[11px] text-muted-foreground/70 leading-relaxed font-light mt-2">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Parent Organization */}
      <section className="py-24 border-b border-border/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="glass-card rounded-2xl p-8 md:p-12 border border-primary/20 relative overflow-hidden">
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[3px] bg-primary/30" />
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-full overflow-hidden border border-primary/30 shadow-lg">
                  <img src="/logo-circular1.png" alt="Alpha Investment Management" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="text-lg font-display font-bold gold-text uppercase tracking-wider">Alpha Investment Management</h3>
                  <p className="text-xs text-muted-foreground/60 uppercase tracking-wider font-medium">Parent Organization • SEBI RIA: INA000017348</p>
                </div>
              </div>
              <div className="space-y-4 text-muted-foreground/80 text-sm leading-relaxed font-light">
                <p>Alpha Investment Management is a SEBI Registered Investment Advisor (Registration No: INA000017348) providing comprehensive wealth management, financial planning, and investment advisory services since 2014.</p>
                <p>Services include Investment Management, Financial Planning, Loan Services, Tax Mitigation Strategy, and Retirement Planning. Insurance Mall operates as its dedicated insurance advisory division, offering the same client-first approach and institutional-grade advisory standards.</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 mt-6">
                <a href="https://alphaaim.in" className="inline-flex items-center gap-2 text-primary text-xs font-semibold uppercase tracking-wider hover:gap-3 transition-all duration-300 gold-gradient text-primary-foreground px-5 py-2.5 rounded-sm">
                  Visit Alpha Investment Management →
                </a>
                <a href="tel:+919607509586" className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider border border-primary/30 hover:border-primary/60 text-foreground px-5 py-2.5 rounded-sm transition-colors">
                  <Phone className="h-3 w-3" /> Call: +91 9607509586
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </div>
  );
};

export default AboutPage;
