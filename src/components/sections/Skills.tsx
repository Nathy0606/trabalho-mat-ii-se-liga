const skills = [
  {
    category: "Design",
    items: ["UI Design", "UX Design", "Design Systems", "Visual Identity", "Responsive Design"]
  },
  {
    category: "Research",
    items: ["User Research", "Usability Testing", "User Personas", "Journey Mapping", "A/B Testing"]
  },
  {
    category: "Ferramentas",
    items: ["Figma", "Adobe XD", "Sketch", "Photoshop", "Illustrator"]
  },
  {
    category: "Prototipagem",
    items: ["Protótipos Interativos", "Wireframing", "Design Handoff", "Animações", "Micro-interações"]
  }
];

const Skills = () => {
  return (
    <section id="habilidades" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <p className="text-muted-foreground uppercase tracking-[0.3em] text-sm mb-4">
          Habilidades
        </p>
        
        <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-16">
          Competências &<br />
          <span className="text-muted-foreground">especialidades</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          {skills.map((skillGroup, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-lg font-medium tracking-wide">
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-4 py-2 bg-card border border-border rounded-full text-sm text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
