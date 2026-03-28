import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const ContactBanner = () => {
  return (
    <section className="py-16">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl font-extrabold text-foreground mb-4">
            Ready to innovate? Let's build what's next — together.
          </h2>
          <p className="text-muted-foreground mb-8">
            info@aainnovation.com · www.aainnovation.com
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-3.5 text-sm font-medium rounded-full hover:bg-accent/90 transition-colors"
          >
            Contact Us <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactBanner;
