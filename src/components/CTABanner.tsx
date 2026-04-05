import { ArrowRight } from "lucide-react";

const CTABanner = () => {
  const scrollTo = (hash: string) => {
    if (window.location.pathname !== "/") {
      window.location.href = "/" + hash;
      return;
    }
    const el = document.querySelector(hash);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="py-12 px-6">
      <div
        className="max-w-7xl mx-auto p-8 md:p-10 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6"
        style={{ background: "linear-gradient(135deg, hsl(228 65% 22%), hsl(228 65% 38%), hsl(228 65% 30%))" }}
      >
        <div>
          <h3 className="text-white font-heading font-bold text-xl md:text-2xl mb-2">Ready to innovate?</h3>
          <p className="text-white/60 text-sm max-w-md">
            Let's discuss how we can transform your business with cutting-edge technology solutions.
          </p>
        </div>
        <button
          onClick={() => scrollTo("#contact")}
          className="inline-flex items-center gap-2 px-7 py-3 text-sm font-bold rounded-xl text-white border-2 border-white/20 hover:border-white/40 hover:bg-white/10 transition-all duration-300 whitespace-nowrap"
        >
          Get in Touch
          <ArrowRight size={16} />
        </button>
      </div>
    </section>
  );
};

export default CTABanner;
