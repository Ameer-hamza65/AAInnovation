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
          <p className="text-primary text-xs tracking-[0.3em] uppercase mb-4 font-medium">How We Deliver</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">Four Pillars of Delivery</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Everything AA Innovations does connects back to four core delivery pillars. They define who we are,
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
              className="bg-secondary p-8 border border-border border-t-2 border-t-primary"
            >
              <span className="text-primary text-3xl font-bold">{p.num}</span>
              <h3 className="text-lg font-semibold text-foreground mt-4 mb-3">{p.title}</h3>
              <p className="text-sterling text-sm leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PillarsSection;
