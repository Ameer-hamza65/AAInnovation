import { motion } from "framer-motion";
import { ArrowRight, Briefcase, MapPin, FileText } from "lucide-react";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import goldWaveBottom from "@/assets/gold-wave-bottom.png";

const topics = ["Industries", "Solutions", "Careers", "Partnerships", "Press / Media", "Website Feedback", "Other"];
const locations = [
  "United States",
  "Canada",
  "United Kingdom",
  "Europe",
  "Asia Pacific",
  "Middle East",
  "Latin America",
  "Other",
];

const quickLinks = [
  {
    icon: Briefcase,
    title: "Careers",
       description: "Explore career opportunities at AA Innovations and join our team of innovators.",
    linkText: "View Open Positions",
  },
  {
    icon: MapPin,
    title: "Our Locations",
       description: "Find AA Innovations offices and learn about our presence across the globe.",
    linkText: "See Locations",
  },
  {
    icon: FileText,
    title: "Request a Proposal",
    description: "Submit an RFP and let us design a solution tailored to your organization.",
    linkText: "Submit RFP",
  },
];

const Contact = () => {
  const { toast } = useToast();
  const [consent, setConsent] = useState("");
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const formData = new FormData(e.currentTarget);
      formData.append("access_key", "792614a7-30bf-4834-bd63-f8113a8b3017");
      formData.append("subject", "New Contact Form Submission — AA Innovations");
      formData.append("from_name", "AA Innovations Website");
      formData.append("consent", consent);

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();

      if (data.success) {
        toast({ title: "Message sent", description: "Thank you for contacting AA Innovations. We'll be in touch shortly." });
        (e.target as HTMLFormElement).reset();
        setConsent("");
        setPrivacyAccepted(false);
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
    <div className="relative min-h-screen bg-white">
      <div
        className="fixed bottom-0 left-0 right-0 h-[260px] md:h-[340px] pointer-events-none opacity-70 z-0"
        style={{ backgroundImage: `url(${goldWaveBottom})`, backgroundSize: '100% 100%', backgroundPosition: 'bottom center', backgroundRepeat: 'no-repeat' }}
      />
      <div className="relative z-10">
      <Navbar />

      {/* Header */}
      <section className="bg-secondary pt-28 pb-12 border-b border-border">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <p className="text-primary text-xs tracking-[0.3em] uppercase mb-3 font-medium">AA Innovations LLC</p>
            <h1 className="text-4xl md:text-5xl font-black text-foreground">Contact us</h1>
          </motion.div>
        </div>
      </section>

      {/* Main Content — two columns */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-12">
          {/* Left — Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <h2 className="text-2xl font-extrabold text-foreground mb-2">How can we help?</h2>
            <p className="text-muted-foreground text-sm mb-8">
              Required fields are marked with an asterisk (<span className="text-primary font-semibold">*</span>)
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Topic */}
              <FormSelect label="Topic" name="topic" required options={topics} placeholder="Please select" />

              {/* Name row */}
              <div className="grid sm:grid-cols-2 gap-5">
                <FormInput label="First Name" name="first_name" required placeholder="Jane" />
                <FormInput label="Last Name" name="last_name" required placeholder="Doe" />
              </div>

              {/* Email & Company */}
              <div className="grid sm:grid-cols-2 gap-5">
                <FormInput label="Email Address" name="email" required type="email" placeholder="jane.doe@company.com" />
                <FormInput label="Company" name="company" required placeholder="Your Company" />
              </div>

              {/* Job Title & Phone */}
              <div className="grid sm:grid-cols-2 gap-5">
                <FormInput label="Job Title" name="job_title" required placeholder="Your Title" />
                <FormInput label="Phone Number" name="phone" type="tel" placeholder="+1 (555) 000-0000" />
              </div>

              {/* Zip & Location */}
              <div className="grid sm:grid-cols-2 gap-5">
                <FormInput label="Zip / Postal Code" name="zip_code" required placeholder="00000" />
                <FormSelect label="Location" name="location" required options={locations} placeholder="Select your location" />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  How can we help? <span className="text-primary">*</span>
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-border bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary resize-none placeholder:text-muted-foreground"
                  placeholder="Tell us about your project, challenge, or question..."
                />
              </div>

              {/* Consent Radio */}
              <div>
                <p className="text-sm font-medium text-foreground mb-3">
                  May we contact you about AA Innovations services and events? <span className="text-primary">*</span>
                </p>
                <RadioGroup value={consent} onValueChange={setConsent} className="flex gap-6">
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="yes" id="consent-yes" />
                    <label htmlFor="consent-yes" className="text-sm text-foreground cursor-pointer">
                      Yes
                    </label>
                  </div>
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="no" id="consent-no" />
                    <label htmlFor="consent-no" className="text-sm text-foreground cursor-pointer">
                      No
                    </label>
                  </div>
                </RadioGroup>
              </div>

              {/* Privacy checkbox */}
              <div className="flex items-start gap-3">
                <Checkbox
                  id="privacy"
                  checked={privacyAccepted}
                  onCheckedChange={(v) => setPrivacyAccepted(v === true)}
                  className="mt-0.5"
                />
                <label htmlFor="privacy" className="text-sm text-muted-foreground leading-relaxed cursor-pointer">
                  I have read and accept the <span className="text-primary underline">Privacy Statement</span> and{" "}
                  <span className="text-primary underline">Terms of Use</span>.
                </label>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-3.5 text-sm font-medium rounded-full hover:bg-primary/80 transition-colors disabled:opacity-50"
              >
                {isSubmitting ? "Sending..." : "Submit"} <ArrowRight size={16} />
              </button>
            </form>
          </motion.div>

          {/* Right — Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            viewport={{ once: true }}
            className="lg:w-[340px] space-y-5 lg:pt-12"
          >
            {quickLinks.map((item) => (
              <div
                key={item.title}
                className="bg-card border border-border p-6 hover:border-primary/40 transition-colors group cursor-pointer"
              >
                <div className="flex items-center gap-3 mb-3">
                  <item.icon size={20} className="text-primary" />
                  <h3 className="text-primary font-bold text-base">{item.title}</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{item.description}</p>
                <span className="inline-flex items-center gap-1.5 text-primary text-sm font-medium group-hover:gap-2.5 transition-all">
                  {item.linkText} <ArrowRight size={14} />
                </span>
              </div>
            ))}

            {/* Contact info card */}
            <div className="bg-secondary border border-border p-6">
              <h3 className="text-foreground font-bold text-base mb-3">Get in touch directly</h3>
              <div className="space-y-2 text-sm">
                <p className="text-muted-foreground">
                  <span className="text-foreground font-medium">Email:</span> info@aainnovation.com
                </p>
                <p className="text-muted-foreground">
                  <span className="text-foreground font-medium">Phone:</span> +1 (321) 477-9875
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      </div>
    </div>
  );
};

/* ── Reusable sub-components ── */

const FormInput = ({
  label,
  name,
  required,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  required?: boolean;
  type?: string;
  placeholder?: string;
}) => (
  <div>
    <label className="block text-sm font-medium text-foreground mb-2">
      {label} {required && <span className="text-primary">*</span>}
    </label>
    <input
      name={name}
      type={type}
      required={required}
      placeholder={placeholder}
      className="w-full px-4 py-3 border border-border bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary placeholder:text-muted-foreground"
    />
  </div>
);

const FormSelect = ({
  label,
  name,
  required,
  options,
  placeholder,
}: {
  label: string;
  name: string;
  required?: boolean;
  options: string[];
  placeholder: string;
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
          <SelectItem key={opt} value={opt}>
            {opt}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  </div>
);

export default Contact;
