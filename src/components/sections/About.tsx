const About = () => {
  return (
    <section id="sobre" className="py-24 px-6 bg-card">
      <div className="max-w-4xl mx-auto">
        <p className="text-muted-foreground uppercase tracking-[0.3em] text-sm mb-4">
          Sobre Mim
        </p>
        
        <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-12">
          Transformando ideias em<br />
          <span className="text-muted-foreground">experiências visuais</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              Sou Marina Costa, designer UI/UX com mais de 5 anos de experiência 
              criando interfaces digitais que conectam marcas e usuários de forma 
              significativa.
            </p>
            <p>
              Minha abordagem combina pesquisa profunda de usuário, design visual 
              refinado e prototipagem iterativa. Acredito que o melhor design é 
              aquele que resolve problemas complexos de forma simples e elegante.
            </p>
            <p>
              Atualmente baseada em São Paulo, trabalho com startups e empresas 
              estabelecidas, ajudando-as a criar produtos digitais que as pessoas 
              amam usar.
            </p>
          </div>
          
          <div className="relative">
            <div className="aspect-[4/5] bg-muted rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=750&fit=crop"
                alt="Marina trabalhando"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-24 h-24 border-2 border-border rounded-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
