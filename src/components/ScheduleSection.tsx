import { useState } from 'react';
import { Instagram, MessageCircle } from 'lucide-react';

export default function ScheduleSection() {
  const [copied, setCopied] = useState(false);
  const phoneNumber = "+5518996680014"; // Número de exemplo
  const whatsappLink = `https://wa.me/${phoneNumber}?text=Olá,%20gostaria%20de%20agendar%20uma%20consulta`;
  const instagramLink = "https://www.instagram.com/taynaram.psi?igsh=NXUxdnI0aGJhaWJ3"; // Link de exemplo

  const copyWhatsApp = () => {
    navigator.clipboard.writeText(phoneNumber.replace("+", ""));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="agendamento" className="py-16 md:py-24 bg-custom-secondary text-white">
      <div className="container px-4 mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="mb-8">
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
                ENTRE EM CONTATO
              </h2>
              <p className="text-2xl md:text-3xl font-serif">
                Agende sua consulta
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex flex-col gap-4">
                <a 
                  href={whatsappLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-3 px-6 py-4 bg-green-600 hover:bg-green-700 text-white rounded-md transition-colors max-w-xs"
                >
                  <MessageCircle size={24} />
                  <span>Agendar consulta</span>
                </a>
                
                <a 
                  href={instagramLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white rounded-md transition-colors max-w-xs"
                >
                  <Instagram size={24} />
                  <span>Instagram</span>
                </a>
                
                <button 
                  onClick={copyWhatsApp} 
                  className="inline-flex items-center gap-3 px-6 py-4 bg-white/10 hover:bg-white/20 text-white rounded-md transition-colors max-w-xs"
                >
                  <span>
                    {copied ? "Copiado!" : "Copiar número do WhatsApp"}
                  </span>
                </button>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center gap-4">
            <div className="relative rounded-2xl shadow-lg overflow-hidden" style={{height: "300px", width: "25%"}}>
              <img 
                src="/images/parede1.jpg" 
                alt="Entre em contato" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="relative rounded-2xl shadow-lg overflow-hidden" style={{height: "400px", width: "40%"}}>
              <img 
                src="/images/contato.jpg" 
                alt="Entre em contato" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="relative rounded-2xl shadow-lg overflow-hidden" style={{height: "300px", width: "25%"}}>
              <img 
                src="/images/parede2.jpg" 
                alt="Entre em contato" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
