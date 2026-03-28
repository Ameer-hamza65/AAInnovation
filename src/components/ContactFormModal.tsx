import { useState } from "react";
import { ArrowLeft, Send, Sparkles, X } from "lucide-react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const services = [
  "AI & Machine Learning",
  "Cloud Solutions",
  "Cybersecurity",
  "Data Analytics",
  "Digital Transformation",
  "IT Consulting",
  "Software Development",
  "Other",
];

interface ContactFormModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ContactFormModal = ({ open, onOpenChange }: ContactFormModalProps) => {
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
        onOpenChange(false);
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
    <DialogPrimitive.Root open={open} onOpenChange={onOpenChange}>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-black/30 backdrop-blur-[2px] data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <DialogPrimitive.Content className="fixed right-0 top-0 z-50 h-full w-[380px] max-w-[95vw] bg-secondary/90 backdrop-blur-xl border-l border-white/10 shadow-[-10px_0_40px_-10px_hsl(var(--primary)/0.15)] duration-300 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right focus:outline-none flex flex-col">

          {/* Close button */}
          <DialogPrimitive.Close className="absolute right-3 top-3 z-10 flex h-7 w-7 items-center justify-center rounded-full border border-white/10 bg-white/5 text-muted-foreground hover:text-foreground hover:bg-white/10 transition-all">
            <X className="h-3.5 w-3.5" />
            <span className="sr-only">Close</span>
          </DialogPrimitive.Close>

          <div className="flex-1 flex flex-col px-7 py-8 overflow-hidden">
            {/* Header */}
            <div className="mb-6">
              <DialogPrimitive.Title className="flex items-center gap-2 text-lg font-bold text-foreground mb-1.5">
                <Sparkles className="h-5 w-5 text-primary" />
                Let's Build Together
              </DialogPrimitive.Title>
              <DialogPrimitive.Description className="text-xs text-muted-foreground leading-relaxed">
                Tell us about your vision. We'll respond within 24 hours.
              </DialogPrimitive.Description>
            </div>

            <form onSubmit={handleSubmit} className="flex-1 flex flex-col gap-4">
              {/* Full Name */}
              <div>
                <label className="block text-[10px] font-bold tracking-[0.12em] uppercase text-foreground mb-1.5">Full Name</label>
                <input name="full_name" type="text" required placeholder="Jane Doe" className="form-input-style py-2.5 px-3.5 text-sm" />
              </div>

              {/* Email */}
              <div>
                <label className="block text-[10px] font-bold tracking-[0.12em] uppercase text-foreground mb-1.5">Email</label>
                <input name="email" type="email" required placeholder="jane.doe@company.com" className="form-input-style py-2.5 px-3.5 text-sm" />
              </div>

              {/* Message */}
              <div>
                <label className="block text-[10px] font-bold tracking-[0.12em] uppercase text-foreground mb-1.5">Message</label>
                <textarea name="message" required rows={3} maxLength={2000} placeholder="Tell us about your project, challenge, or question..." className="form-input-style py-2.5 px-3.5 text-sm resize-none" />
              </div>

              {/* Company + Phone side by side */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[10px] font-bold tracking-[0.12em] uppercase text-foreground mb-1.5">Company</label>
                  <input name="company" type="text" placeholder="Your Company" className="form-input-style py-2.5 px-3.5 text-sm" />
                </div>
                <div>
                  <label className="block text-[10px] font-bold tracking-[0.12em] uppercase text-foreground mb-1.5">Phone</label>
                  <input name="phone" type="tel" placeholder="+1 (555) 000-0000" className="form-input-style py-2.5 px-3.5 text-sm" />
                </div>
              </div>

              {/* Service Interest */}
              <div>
                <label className="block text-[10px] font-bold tracking-[0.12em] uppercase text-foreground mb-1.5">Service Interest</label>
                <Select name="service_interest">
                  <SelectTrigger className="w-full px-3.5 py-2.5 h-auto border border-white/10 bg-white/[0.07] backdrop-blur-sm text-sm text-muted-foreground focus:border-primary/40">
                    <SelectValue placeholder="Select a service (optional)" />
                  </SelectTrigger>
                  <SelectContent>
                    {services.map((s) => (
                      <SelectItem key={s} value={s}>{s}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-4 mt-auto pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-2.5 text-sm font-semibold rounded-full hover:bg-primary/85 transition-colors disabled:opacity-50 shadow-[0_0_15px_-3px_hsl(var(--primary)/0.4)]"
                >
                  {isSubmitting ? "Sending..." : "Send Message"} <Send size={14} />
                </button>
                <button
                  type="button"
                  onClick={() => onOpenChange(false)}
                  className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <ArrowLeft size={14} /> Go Back
                </button>
              </div>
            </form>
          </div>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
};

export default ContactFormModal;
