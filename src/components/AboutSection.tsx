export default function AboutSection() {
  return (
    <section id="sobre-mim" className="py-16 md:py-24 bg-custom-light">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-8">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-2 text-custom-secondary">
            Sobre Mim
          </h2>
          <p className="uppercase tracking-wider text-sm font-medium text-custom-secondary">
            PROFISSIONAL
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4 text-custom-secondary/80">
            <p>
              Sou formada em Psicologia pela UNIP (2022), com especial interesse pela Psicanálise. 
              Após a graduação, atuei na área infantil em escolas, oferecendo apoio psicológico 
              a crianças e educadores.
            </p>
            
            <p>
              Quando me tornei mãe, fiz uma pausa na minha carreira para me dedicar integralmente 
              à maternidade. E com estudos durante este período me proporcionou uma nova perspectiva 
              sobre a minha carreira.
            </p>
            
            <p>
              Agora, retorno ao trabalho com foco no atendimento a adultos e adolescentes, 
              de forma 100% online, buscando equilibrar minha vida profissional com a maternidade. 
              Acredito na importância de um espaço acolhedor e na escuta psicanalítica para 
              promover o autoconhecimento e o bem-estar emocional.
            </p>
          </div>

          <div className="relative max-w-md rounded-2xl shadow-lg overflow-hidden" style={{minHeight: "400px", width: "100%"}}>
            <img 
              src="/images/mim 1.jpg" 
              alt="Imagem do Profissional" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
