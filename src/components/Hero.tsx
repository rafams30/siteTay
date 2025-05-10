import { Instagram, MessageCircle } from 'lucide-react';

export default function Hero() {
  return (
    <section className="pt-24 md:pt-32 pb-16 md:pb-24 bg-custom-background text-custom-secondary min-h-screen flex items-center">
      <div className="container px-4 mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1 animate-fade-in">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-custom-secondary leading-tight">
              Transforme sua vida através do autoconhecimento
            </h1>
            <p className="text-lg mb-8 max-w-lg">
              Um espaço dedicado ao seu crescimento pessoal e bem-estar emocional.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#agendamento" 
                className="inline-flex items-center gap-2 px-6 py-3 bg-custom-secondary text-white rounded-md hover:bg-custom-dark transition-colors"
              >
                <MessageCircle size={20} />
                Agendar consulta
              </a>
              
              <a 
                href="https://www.instagram.com/taynaram.psi?igsh=NXUxdnI0aGJhaWJ3" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-2 px-6 py-3 border border-custom-secondary text-custom-secondary rounded-md hover:bg-custom-secondary hover:text-white transition-colors"
              >
                <Instagram size={20} />
                Instagram
              </a>
            </div>
          </div>
          
          <div className="order-1 md:order-2 flex justify-center md:justify-end">
            <div className="relative w-full max-w-md aspect-[3/4] rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="/images/1bea7f7d-38c4-46f7-993a-37e55f40b9ff.jpg" 
                alt="Profissional de psicologia" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
