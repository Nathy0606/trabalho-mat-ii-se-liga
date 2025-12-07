import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8 animate-fade-in">
          <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-muted border-2 border-border overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop&crop=face"
              alt="Foto de perfil"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        <p className="text-muted-foreground uppercase tracking-[0.3em] text-sm mb-4 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          Designer UI/UX
        </p>
        
        <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          Marina Costa
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in" style={{ animationDelay: "0.3s" }}>
          Criando experiências digitais memoráveis através de design intuitivo, 
          pesquisa centrada no usuário e atenção meticulosa aos detalhes.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <Button asChild size="lg" className="rounded-full px-8">
            <a href="#projetos">Ver Projetos</a>
          </Button>
          <Button asChild variant="outline" size="lg" className="rounded-full px-8">
            <a href="#contato">Entrar em Contato</a>
          </Button>
        </div>
        
        <a 
          href="#sobre" 
          className="inline-block mt-20 animate-bounce text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowDown className="w-6 h-6" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
