export default function HowItWorksSection() {
  return (
    <section id="como-funciona" className="py-16 md:py-24 bg-custom-background">
      <div className="container px-4 mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="mb-8">
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-2 text-custom-secondary">
                COMO FUNCIONA 
              </h2>
              <p className="text-2xl md:text-3xl font-serif text-custom-secondary">
                Psicoterapia Online
              </p>
            </div>

            <div className="space-y-6 text-custom-secondary/80">
              <p>
                Nossos encontros serão realizados via <strong className="text-custom-secondary">Google Meet</strong>. 
                No dia da sessão, você receberá um link que poderá acessar através do seu celular, 
                notebook ou qualquer outro dispositivo que tenha acesso à internet.
              </p>

              <p>
                Os atendimentos possuem uma duração de <strong className="text-custom-secondary">50 minutos</strong> cada, 
                sendo <strong className="text-custom-secondary">um encontro por semana</strong>.
              </p>

              <p>
                Para o momento da sua sessão, sempre que possível procure estar em lugar 
                calmo e reservado, para que você possa se sentir confortável e que tenha 
                um bom acesso a internet.
              </p>
            </div>
          </div>

          <div className="order-1 md:order-2 flex justify-center items-center">
            <div className="relative overflow-hidden rounded-lg shadow-lg mx-auto" style={{maxWidth: "350px", width: "80%"}}>
              <img 
                src="/images/funciona.jpg" 
                alt="Sessão de psicoterapia online" 
                className="w-full h-auto rounded-lg"
              />
            </div>          
          </div>
        </div>

        <div className="mt-16 md:mt-24 flex justify-center">        
          <div className="max-w-3xl">
            <div className="mb-8 text-center">
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-2 text-custom-secondary">
                COMO FUNCIONA
              </h2>
              <p className="text-2xl md:text-3xl font-serif text-custom-secondary">
                Sigilo Terapêutico
              </p>
            </div>

            <div className="space-y-6 text-custom-secondary/80 text-center">
              <p>
                O sigilo terapêutico na psicologia, é garantido pelo nosso código de ética. 
                Isso significa que todas as informações compartilhadas durante as sessões 
                são estritamente confidenciais, para que a pessoa em tratamento psicológico 
                se sinta segura para se expressar sem receios dos seus relatos serem divulgados.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
