import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "FinanceApp",
    category: "UI/UX Design • Mobile App",
    description: "Aplicativo de gestão financeira pessoal com dashboard intuitivo e visualizações de dados elegantes.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    link: "#"
  },
  {
    id: 2,
    title: "E-commerce Redesign",
    category: "UX Research • Web Design",
    description: "Redesign completo de plataforma de e-commerce, aumentando conversões em 45% através de UX otimizado.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    link: "#"
  },
  {
    id: 3,
    title: "HealthTrack",
    category: "UI Design • Design System",
    description: "Sistema de design e interfaces para aplicativo de saúde e bem-estar com foco em acessibilidade.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
    link: "#"
  },
  {
    id: 4,
    title: "TaskFlow Dashboard",
    category: "UX/UI Design • SaaS",
    description: "Dashboard para plataforma de gestão de projetos com visualizações complexas simplificadas.",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&h=600&fit=crop",
    link: "#"
  },
  {
    id: 5,
    title: "Travel Experience",
    category: "UI Design • Mobile App",
    description: "Aplicativo de viagens com experiência imersiva, booking integrado e recomendações personalizadas.",
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&h=600&fit=crop",
    link: "#"
  }
];

const Projects = () => {
  return (
    <section id="projetos" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-muted-foreground uppercase tracking-[0.3em] text-sm mb-4">
          Portfólio
        </p>
        
        <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-16">
          Projetos<br />
          <span className="text-muted-foreground">selecionados</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <a
              key={project.id}
              href={project.link}
              className={`group block ${index === 0 ? 'md:col-span-2' : ''}`}
            >
              <div className="relative overflow-hidden rounded-2xl bg-muted mb-4">
                <div className={`${index === 0 ? 'aspect-[2/1]' : 'aspect-[4/3]'}`}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-300" />
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>
              
              <p className="text-sm text-muted-foreground mb-2">{project.category}</p>
              <h3 className="text-xl font-medium mb-2 group-hover:text-muted-foreground transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {project.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
