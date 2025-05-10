export default function ApproachSection() {
  return (
    <section id="abordagem" className="py-16 md:py-24 bg-custom-secondary text-white">
      <div className="container px-4 mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="mx-auto relative order-1 md:order-1">
            <div className="rounded-3xl overflow-hidden shadow-lg max-w-md" style={{minHeight: "50px", width: "70%"}}>
              <img 
                src="/images/minha1.jpg" 
                alt="Abordagem Terapêutica" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="space-y-6 text-white/90 order-2 md:order-2">
            <div className="mb-4">
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-2">
                Minha Abordagem
              </h2>
              <p className="uppercase tracking-wider text-sm font-medium">
                MÉTODO TERAPÊUTICO
              </p>
            </div>
            
            <p>
              Minha abordagem é a psicanalise, o que significa que meu trabalho é ajudar você a entender melhor seus pensamentos, sentimentos e comportamentos, especialmente aqueles que parecem acontecer sem explicação. A psicanálise investiga o que está no nosso inconsciente, ou seja, aquelas experiências, memórias e emoções que influenciam nossa vida sem que a gente perceba.
            </p>
            
            <p>
              No meu trabalho, não dou respostas prontas, mas ajudo você a encontrar as suas próprias, explorando sua história, suas relações e os padrões que se repetem na sua vida. O processo pode ser profundo, mas também libertador, porque permite que você se conheça melhor e lide com seus desafios de forma mais saudável.
            </p>
          </div>
        </div>

        <div className="mt-16 md:mt-24">
          <div className="max-w-full mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 text-white/90">
                <div className="mb-4">
                  <h3 className="font-serif text-2xl md:text-3xl font-bold mb-2">
                    Psicologia e Cultura Geek
                  </h3>
                </div>
                <p>
                  Como psicóloga e fã do mundo geek, gosto de unir esses dois universos para mostrar como personagens e histórias podem refletir nossos desafios e emoções. Muitos heróis, vilões e tramas carregam questões psicológicas profundas, tornando mais fácil nos identificarmos e compreendermos nossas próprias vivências.
                </p>
                
                <p>
                  Sempre há algo a aprender sobre nós mesmos.
                </p>
              </div>
              
              <div className="mx-auto relative">
                <div className="rounded-3xl overflow-hidden shadow-lg max-w-md" style={{minHeight: "50px", width: "100%"}}>
                  <img 
                    src="/images/minha2.jpg" 
                    alt="Psicologia e Cultura Geek" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
