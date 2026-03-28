import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const serviceOptions = [
  "AI & Automation",
  "Data & Analytics",
  "Cloud Solutions",
  "Cybersecurity",
  "Digital Transformation",
  "Technology Consulting",
  "Other",
];

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const formData = new FormData(e.currentTarget);
      formData.append("access_key", "792614a7-30bf-4834-bd63-f8113a8b3017");
      formData.append("subject", "New Contact Form Submission — AA Innovation");
      formData.append("from_name", "AA Innovation Website");

      const res = await fetch("https://api.web3forms.com/submit", { method: "POST", body: formData });
      const data = await res.json();

      if (data.success) {
        toast({ title: "Message sent", description: "Thank you for contacting AA Innovation. We'll be in touch shortly." });
        (e.target as HTMLFormElement).reset();
      } else {
        toast({ title: "Error", description: "Something went wrong. Please try again.", variant: "destructive" });
      }
    } catch {
      toast({ title: "Error", description: "Network error. Please try again later.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-primary text-xs tracking-[0.3em] uppercase mb-4 font-medium">Get In Touch</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">Contact Us</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Ready to innovate? Let's build what's next — together.
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-5 bg-card/50 backdrop-blur-sm border border-border rounded-lg p-8"
        >
          <p className="text-muted-foreground text-sm mb-2">
            Required fields are marked with an asterisk (<span className="text-primary font-semibold">*</span>)
          </p>

          {/* Full Name */}
          <FormInput label="Full Name" name="full_name" required placeholder="Jane Doe" />

          {/* Email */}
          <FormInput label="Email" name="email" required type="email" placeholder="jane.doe@company.com" />

          {/* Message */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Message <span className="text-primary">*</span>
            </label>
            <textarea
              name="message"
              required
              rows={5}
              maxLength={2000}
              className="w-full px-4 py-3 border border-border bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary resize-none placeholder:text-muted-foreground rounded-lg"
              placeholder="Tell us about your project, challenge, or question..."
            />
          </div>

          {/* Company & Phone */}
          <div className="grid sm:grid-cols-2 gap-5">
            <FormInput label="Company Name" name="company" placeholder="Your Company (optional)" />
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">
                Phone Number
              </label>
              <p className="text-muted-foreground text-xs mb-2">For a faster response</p>
              <input
                name="phone"
                type="tel"
                placeholder="+1 (555) 000-0000"
                className="w-full px-4 py-3 border border-border bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary placeholder:text-muted-foreground rounded-lg"
              />
            </div>
          </div>

          {/* Service Interest */}
          <FormSelect label="Service Interest" name="service_interest" options={serviceOptions} placeholder="Select a service (optional)" />

          {/* Submit */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-3.5 text-sm font-medium rounded-full hover:bg-primary/80 transition-colors disabled:opacity-50"
          >
            {isSubmitting ? "Sending..." : "Send Message"} <ArrowRight size={16} />
          </button>
        </motion.form>

        <div className="mt-8 text-center text-sm text-muted-foreground space-y-1">
          <p><span className="text-foreground font-medium">Email:</span> info@aainnovation.com</p>
          <p><span className="text-foreground font-medium">Phone:</span> +1 (321) 477-9875</p>
          <p><span className="text-foreground font-medium">Web:</span> www.aainnovation.com</p>
        </div>
      </div>
    </section>
  );
};

const FormInput = ({ label, name, required, type = "text", placeholder }: {
  label: string; name: string; required?: boolean; type?: string; placeholder?: string;
}) => (
  <div>
    <label className="block text-sm font-medium text-foreground mb-2">
      {label} {required && <span className="text-primary">*</span>}
    </label>
    <input
      name={name} type={type} required={required} placeholder={placeholder}
      className="w-full px-4 py-3 border border-border bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary placeholder:text-muted-foreground rounded-lg"
    />
  </div>
);

const FormSelect = ({ label, name, required, options, placeholder }: {
  label: string; name: string; required?: boolean; options: string[]; placeholder: string;
}) => (
  <div>
    <label className="block text-sm font-medium text-foreground mb-2">
      {label} {required && <span className="text-primary">*</span>}
    </label>
    <Select name={name} required={required}>
      <SelectTrigger className="w-full px-4 py-3 h-auto border border-border bg-card text-sm">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {options.map((opt) => (
          <SelectItem key={opt} value={opt}>{opt}</SelectItem>
        ))}
      </SelectContent>
    </Select>
  </div>
);

export default ContactSection;
