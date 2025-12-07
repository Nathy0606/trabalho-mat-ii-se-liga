import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin, Instagram, Dribbble, Github } from "lucide-react";

const socialLinks = [
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
  { icon: Instagram, label: "Instagram", href: "https://instagram.com" },
  { icon: Dribbble, label: "Dribbble", href: "https://dribbble.com" },
  { icon: Github, label: "GitHub", href: "https://github.com" },
];

const Contact = () => {
  return (
    <section id="contato" className="py-24 px-6 bg-card">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-muted-foreground uppercase tracking-[0.3em] text-sm mb-4">
          Contato
        </p>
        
        <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-6">
          Vamos trabalhar<br />
          <span className="text-muted-foreground">juntos?</span>
        </h2>
        
        <p className="text-muted-foreground max-w-lg mx-auto mb-12 leading-relaxed">
          Estou sempre aberta a novos projetos e colaborações interessantes. 
          Entre em contato e vamos criar algo incrível.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button asChild size="lg" className="rounded-full px-8 gap-2">
            <a href="mailto:marina@exemplo.com">
              <Mail className="w-4 h-4" />
              marina@exemplo.com
            </a>
          </Button>
          <Button asChild variant="outline" size="lg" className="rounded-full px-8 gap-2">
            <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">
              <Phone className="w-4 h-4" />
              WhatsApp
            </a>
          </Button>
        </div>
        
        <div className="flex justify-center gap-4">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:bg-foreground hover:text-background hover:border-foreground transition-all duration-300"
              aria-label={social.label}
            >
              <social.icon className="w-5 h-5" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
