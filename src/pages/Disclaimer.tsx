import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const Disclaimer = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <main>
    <section className="py-28 md:py-36 hero-gradient relative overflow-hidden border-b border-border/10">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mx-auto text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-display font-bold"><span className="gold-text">Disclaimer</span></h1>
          <p className="text-muted-foreground/80 text-lg font-light">Insurance Mall — A Unit of Alpha Investment Management</p>
          <p className="text-muted-foreground/60 text-sm">Last Updated: June 2026</p>
        </motion.div>
      </div>
    </section>
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto prose prose-invert prose-sm">
          {[
            { title: "General Disclaimer", content: "Insurance is a subject matter of solicitation. Insurance Mall is a unit of Alpha Investment Management and provides insurance advisory services. We do not underwrite insurance policies. All insurance products are provided by the respective insurance companies." },
            { title: "Advisory Nature", content: "The information and recommendations provided by Insurance Mall are advisory in nature. We help clients understand their insurance needs, compare available products, and make informed decisions. The final decision to purchase any insurance product rests solely with the client." },
            { title: "No Guarantee", content: "Insurance Mall does not guarantee any specific outcomes from insurance products. Coverage, benefits, premiums, and claim settlements are determined by the respective insurance companies based on their terms and conditions." },
            { title: "Product Information", content: "While we strive to present accurate product information, insurance terms, conditions, and premiums are subject to change by insurance companies without prior notice. Clients are advised to read policy documents carefully before making purchase decisions." },
            { title: "Claims", content: "Insurance Mall provides guidance and support during the claims process. However, claim approvals, settlements, and disbursements are solely at the discretion of the respective insurance companies." },
            { title: "Parent Organization", content: "Insurance Mall operates as a division of Alpha Investment Management, a SEBI Registered Investment Advisor (Registration No: INA000017348). SEBI registration pertains to investment advisory services and does not constitute an endorsement of insurance advisory activities." },
            { title: "Regulatory Compliance", content: "Insurance is regulated by the Insurance Regulatory and Development Authority of India (IRDAI). All insurance products mentioned on this website are subject to IRDAI regulations and guidelines." },
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

export default Disclaimer;
