import { Heart } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard = ({ icon, title, description }: ServiceCardProps) => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-custom-secondary/10">
      <div className="text-custom-secondary mb-6">{icon}</div>
      <h3 className="font-medium text-2xl mb-4 text-custom-secondary">{title}</h3>
      <p className="text-custom-secondary/80 text-base">{description}</p>
    </div>
  );
};

export default function ServicesSection() {
  const services = [
    {
      icon: (
        <div className="flex justify-center">
          <img 
            src="/images/flower-brain-icon.png" 
            alt="Flor e cérebro" 
            className="w-24 h-24 object-contain" 
            style={{ 
              filter: 'brightness(0) saturate(100%) invert(52%) sepia(11%) saturate(388%) hue-rotate(348deg) brightness(91%) contrast(86%)' 
            }}
          />
        </div>
      ),
      title: "A Importância de Fazer Terapia",
      description: "A terapia é um espaço fundamental para o autoconhecimento e o cuidado emocional. Muitas vezes, lidamos com sentimentos e situações que nos sobrecarregam, e a terapia oferece uma escuta acolhedora e especializada. Ao buscar ajuda, podemos entender melhor nossas emoções, comportamentos e, assim, tomar decisões mais conscientes para o nosso bem-estar. É um processo de cura que permite a reflexão, o crescimento pessoal e a superação de desafios de forma mais leve e saudável."
    },
    {
      icon: (
        <div className="flex justify-center">
          <img 
            src="/images/thought-bubble-icon.png" 
            alt="Nuvem de pensamento" 
            className="w-24 h-24 object-contain" 
            style={{ 
              filter: 'brightness(0) saturate(100%) invert(52%) sepia(11%) saturate(388%) hue-rotate(348deg) brightness(91%) contrast(86%)' 
            }}
          />
        </div>
      ),
      title: "Para quem é indicado terapia?",
      description: "A terapia não é só para quem está passando por dificuldades. Mesmo quando tudo parece bem, ela pode ajudar a viver de forma mais plena e equilibrada."
    }
  ];

  return (
    <section id="informacoes" className="py-16 md:py-24 bg-custom-light">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-custom-secondary">
            Cuidando do seu jardim
          </h2>
          <p className="text-custom-secondary/80 max-w-2xl mx-auto">
            Informações dedicadas ao seu bem-estar e desenvolvimento pessoal.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
