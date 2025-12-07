const experiences = [
  {
    period: "2022 — Presente",
    role: "Senior UI/UX Designer",
    company: "TechFlow Studio",
    description: "Liderando projetos de design para startups de tecnologia, criando sistemas de design escaláveis e interfaces inovadoras."
  },
  {
    period: "2020 — 2022",
    role: "UI/UX Designer",
    company: "Digital Agency Co.",
    description: "Design de produtos digitais para clientes corporativos, incluindo apps mobile e plataformas web."
  },
  {
    period: "2019 — 2020",
    role: "Junior Designer",
    company: "Creative Labs",
    description: "Início da carreira focado em design visual e aprendizado de metodologias UX."
  }
];

const education = [
  {
    period: "2015 — 2019",
    degree: "Bacharelado em Design",
    institution: "Universidade de São Paulo"
  },
  {
    period: "2021",
    degree: "UX Design Professional Certificate",
    institution: "Google"
  }
];

const Experience = () => {
  return (
    <section id="experiencia" className="py-24 px-6 bg-card">
      <div className="max-w-4xl mx-auto">
        <p className="text-muted-foreground uppercase tracking-[0.3em] text-sm mb-4">
          Trajetória
        </p>
        
        <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-16">
          Experiência &<br />
          <span className="text-muted-foreground">formação</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h3 className="text-lg font-medium tracking-wide mb-8 flex items-center gap-3">
              <span className="w-8 h-px bg-foreground" />
              Experiência Profissional
            </h3>
            
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="relative pl-6 border-l border-border">
                  <div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-foreground" />
                  <p className="text-sm text-muted-foreground mb-1">{exp.period}</p>
                  <h4 className="font-medium mb-1">{exp.role}</h4>
                  <p className="text-muted-foreground text-sm mb-2">{exp.company}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium tracking-wide mb-8 flex items-center gap-3">
              <span className="w-8 h-px bg-foreground" />
              Formação
            </h3>
            
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div key={index} className="relative pl-6 border-l border-border">
                  <div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-muted-foreground" />
                  <p className="text-sm text-muted-foreground mb-1">{edu.period}</p>
                  <h4 className="font-medium mb-1">{edu.degree}</h4>
                  <p className="text-muted-foreground text-sm">{edu.institution}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
