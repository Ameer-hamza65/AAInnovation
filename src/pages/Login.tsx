import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowRight, Mail, Lock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/contexts/AuthContext";
import Navbar from "@/components/Navbar";
import Logo from "@/components/Logo";
import goldWaveBg from "@/assets/gold-wave-background.png";

const Login = () => {
  const { toast } = useToast();
  const { login } = useAuth();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      login(email, password);
      toast({ title: "Welcome back!", description: "You have been signed in successfully." });
      setIsSubmitting(false);
      navigate("/");
    }, 800);
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-secondary">
      <div className="fixed inset-0 bg-cover bg-center bg-no-repeat opacity-[0.15] pointer-events-none gold-wave-bg" style={{ backgroundImage: `url(${goldWaveBg})` }} />
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </div>
      <div className="relative z-10 w-[94vw] max-w-[420px] mt-[72px]">
        <div className="border border-border bg-white shadow-lg p-8 rounded-[22px]">
          <div className="text-center mb-6">
            <div className="flex justify-center mb-4">
              <Logo size="md" showText={false} />
            </div>
            <h1 className="text-xl font-heading font-bold text-foreground mb-1">Welcome Back</h1>
            <p className="text-xs text-muted-foreground">Sign in to your AA Innovation account</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-foreground mb-1">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground/60" />
                <input type="email" required placeholder="jane.doe@company.com" value={email} onChange={e => setEmail(e.target.value)} className="form-input-style pl-9" />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="text-xs font-bold text-foreground">Password</label>
                <button type="button" className="text-[10px] text-primary hover:underline">Forgot password?</button>
              </div>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground/60" />
                <input type="password" required placeholder="••••••••" value={password} onChange={e => setPassword(e.target.value)} className="form-input-style pl-9" />
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-2.5 text-xs font-bold rounded-xl hover:bg-primary/85 transition-all disabled:opacity-50 shadow-[0_10px_18px_rgba(28,57,187,0.18)]"
            >
              {isSubmitting ? "Signing in..." : "Sign In"} <ArrowRight size={14} />
            </button>
          </form>

          <p className="text-center text-xs text-muted-foreground mt-5">
            Don't have an account?{" "}
            <Link to="/register" className="text-primary hover:underline font-bold">Create one</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
