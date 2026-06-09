import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const TermsOfService = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <main>
    <section className="py-28 md:py-36 hero-gradient relative overflow-hidden border-b border-border/10">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mx-auto text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-display font-bold">Terms of <span className="gold-text">Service</span></h1>
          <p className="text-muted-foreground/80 text-lg font-light">Insurance Mall — A Unit of Alpha Investment Management</p>
          <p className="text-muted-foreground/60 text-sm">Last Updated: June 2026</p>
        </motion.div>
      </div>
    </section>
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto prose prose-invert prose-sm">
          {[
            { title: "Acceptance of Terms", content: "By accessing and using the Insurance Mall website (insurancemall.alphaaim.in), you agree to be bound by these Terms of Service. If you do not agree, please do not use our website or services." },
            { title: "Services Provided", content: "Insurance Mall provides insurance advisory services as a unit of Alpha Investment Management. We assist clients in understanding, comparing, and selecting insurance products from various insurance providers. We act as advisors and do not underwrite insurance policies." },
            { title: "Insurance Products", content: "All insurance products recommended through Insurance Mall are underwritten by the respective insurance companies. Insurance Mall acts as an advisory intermediary and is not responsible for the terms, conditions, or performance of any insurance policy issued by third-party insurers." },
            { title: "Accuracy of Information", content: "While we strive to provide accurate and up-to-date information about insurance products and services, we do not guarantee the completeness or accuracy of all information presented. Insurance terms and premiums are subject to change by the respective insurance companies." },
            { title: "User Responsibilities", content: "Users are responsible for providing accurate personal and financial information when seeking insurance advice. Misrepresentation of information may affect policy coverage and claims." },
            { title: "Limitation of Liability", content: "Insurance Mall and Alpha Investment Management shall not be liable for any direct, indirect, incidental, or consequential damages arising from the use of our advisory services or reliance on information provided on this website." },
            { title: "Governing Law", content: "These terms shall be governed by and construed in accordance with the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in Pune, Maharashtra." },
          ].map((section, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="mb-10">
              <h2 className="text-xl font-display font-bold text-foreground mb-3">{section.title}</h2>
              <p className="text-muted-foreground/80 text-sm leading-relaxed font-light">{section.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    </main>
    <Footer />
  </div>
);

export default TermsOfService;
