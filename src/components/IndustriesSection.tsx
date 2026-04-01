import { motion } from "framer-motion";
import { Zap, Heart, Factory, DollarSign, Users, Building, Truck } from "lucide-react";

const industries = [
  { icon: Zap, title: "Energy", tagline: "Powering the Infrastructure of Tomorrow." },
  { icon: Heart, title: "Healthcare", tagline: "Better Technology. Better Care. No Compromises." },
  { icon: Factory, title: "Manufacturing", tagline: "The Factory of the Future Is Here." },
  { icon: DollarSign, title: "Finance", tagline: "Where Risk Meets Resilience." },
  { icon: Users, title: "Consulting", tagline: "Strategic Clarity. Actionable Outcomes." },
  { icon: Building, title: "Federal", tagline: "Mission-Ready. Compliance-Built. Outcome-Accountable." },
  { icon: Truck, title: "Logistics", tagline: "Every Link in the Chain, Optimized." },
];

const IndustriesSection = () => {
  return (
    <section id="industries" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="eyebrow-badge mx-auto mb-4">
            <span>Where We Operate</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-foreground">Industries We Serve</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Specialized capabilities across seven core industries, each led by sector veterans.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              viewport={{ once: true }}
              className="bg-white p-6 border border-border rounded-[22px] hover:border-primary/30 hover:shadow-lg transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="w-10 h-10 rounded-[14px] bg-secondary flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                <ind.icon size={20} className="text-primary" />
              </div>
              <h3 className="text-foreground font-heading font-semibold mb-2">{ind.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">{ind.tagline}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
