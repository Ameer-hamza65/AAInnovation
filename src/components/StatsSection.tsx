import { motion } from "framer-motion";

const stats = [
  { value: "730+", label: "Projects Completed" },
  { value: "52%", label: "Average Improvement" },
  { value: "90%", label: "Repeat Clients" },
  { value: "6.0%", label: "Avg Client Rating" },
];

const StatsSection = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="rounded-[26px] p-10 text-white" style={{ background: "linear-gradient(180deg, #0E1A4F, #12276c)", boxShadow: "0 24px 56px rgba(14,26,79,0.18)" }}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <p className="text-3xl md:text-4xl font-heading font-extrabold text-gold mb-2">{stat.value}</p>
                <p className="text-white/70 text-sm tracking-wide">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
