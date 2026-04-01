import { motion } from "framer-motion";

const pillars = [
  {
    num: "01",
    title: "Senior Expertise. Every Engagement.",
    desc: "Senior practitioners don't just oversee our engagements — they run them. Direct access from kickoff to close. No bait-and-switch.",
  },
  {
    num: "02",
    title: "Seven Industries. One Integrated Team.",
    desc: "No siloed practices. No competing priorities. One team drawing from seven domains to solve your whole problem.",
  },
  {
    num: "03",
    title: "AI-Enabled. Always Human-Led.",
    desc: "AI deployed as a precision instrument — tied to specific outcomes, calibrated to your industry, always transparent.",
  },
  {
    num: "04",
    title: "Innovation That Ships.",
    desc: "We measure success in deployed systems and measurable results — not delivered documents. We stay until it works.",
  },
];

const PillarsSection = () => {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="eyebrow-badge mx-auto mb-4">
            <span>How We Deliver</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-foreground">Four Pillars of Delivery</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Everything AA Innovation does connects back to four core delivery pillars. They define who we are,
            how we work, and why organizations choose us over firms ten times our size.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {pillars.map((p, i) => (
            <motion.div
              key={p.num}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              viewport={{ once: true }}
              className="bg-white p-8 border border-border rounded-[22px] border-l-[5px] border-l-gold hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <span className="text-gold-deep text-3xl font-heading font-bold">{p.num}</span>
              <h3 className="text-lg font-heading font-semibold text-foreground mt-4 mb-3">{p.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PillarsSection;
