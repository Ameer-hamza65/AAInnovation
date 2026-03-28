import { motion } from "framer-motion";

const rows = [
  { us: "Senior practitioners on every engagement", them: "Junior delivery teams after contract signature" },
  { us: "Seven integrated industries, zero silos", them: "Siloed practices with competing priorities" },
  { us: "AI deployed to deliver outcomes, not demos", them: "AI roadmaps that rarely survive implementation" },
  { us: "End-to-end: strategy through go-live", them: "Recommendations handed off to another team" },
  { us: "Mobilize in days, not procurement cycles", them: "Months of scoping before work begins" },
  { us: "One team, one relationship, one outcome", them: "Multiple handoffs, multiple points of failure" },
];

const WhyUsSection = () => {
  return (
    <section className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-primary text-xs tracking-[0.3em] uppercase mb-4 font-medium">The Difference</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">Why AA Innovations</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Organizations choose us because we deliver more than technology — we deliver outcomes.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="overflow-hidden border border-border rounded-lg"
        >
          <div className="grid grid-cols-2 bg-secondary">
            <div className="p-4 font-semibold text-sm text-foreground">The AA Innovations Way</div>
            <div className="p-4 font-semibold text-sm text-foreground border-l border-border">The Alternative</div>
          </div>
          {rows.map((row, i) => (
            <div
              key={i}
              className={`grid grid-cols-2 ${i % 2 === 0 ? "bg-card" : "bg-background"}`}
            >
              <div className="p-4 text-sm text-sterling font-medium">{row.us}</div>
              <div className="p-4 text-sm text-muted-foreground border-l border-border">{row.them}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyUsSection;
