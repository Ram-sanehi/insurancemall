import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const PrivacyPolicy = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <main>
    <section className="py-28 md:py-36 hero-gradient relative overflow-hidden border-b border-border/10">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mx-auto text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-display font-bold">Privacy <span className="gold-text">Policy</span></h1>
          <p className="text-muted-foreground/80 text-lg font-light">Insurance Mall — A Unit of Alpha Investment Management</p>
          <p className="text-muted-foreground/60 text-sm">Last Updated: June 2026</p>
        </motion.div>
      </div>
    </section>
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto prose prose-invert prose-sm">
          {[
            { title: "Information We Collect", content: "We collect personal information such as name, email address, phone number, and insurance-related details when you fill out forms on our website, request a consultation, or subscribe to our newsletter. We may also collect browsing data through cookies and analytics tools." },
            { title: "How We Use Your Information", content: "Your information is used to: provide insurance advisory services, respond to your inquiries, send relevant insurance updates and newsletters, improve our website and services, and comply with legal obligations. We do not sell your personal data to third parties." },
            { title: "Data Protection", content: "We implement industry-standard security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. All data transmission is encrypted using SSL technology." },
            { title: "Cookies", content: "Our website uses cookies to enhance your browsing experience, analyze site traffic, and personalize content. You can control cookie preferences through your browser settings." },
            { title: "Third-Party Services", content: "We may use third-party services for analytics, email communication, and insurance partner integrations. These services have their own privacy policies governing the use of your information." },
            { title: "Your Rights", content: "You have the right to access, correct, or delete your personal information. You may also opt out of marketing communications at any time by contacting us or using the unsubscribe link in our emails." },
            { title: "Contact Us", content: "For privacy-related inquiries, contact us at alphainvestmentmnt@gmail.com or call +91 9607509586. Insurance Mall, Shop no 2, First Floor, Mahalungeker Complex, Chakan, Pune 410501." },
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

export default PrivacyPolicy;
