
import { Instagram, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-8 bg-custom-background border-t border-custom-secondary/20">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-6 md:mb-0">
            <span className="font-serif text-xl font-bold text-custom-secondary">Psicologia</span>
            <span className="text-xs text-custom-secondary/60 ml-2">CRP: 06/222118</span>
          </div>
          
          <div className="flex items-center gap-4">
            <a 
              href="https://wa.me/5518996680014" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="WhatsApp"
              className="text-custom-secondary hover:text-custom-dark transition-colors"
            >
              <MessageCircle size={20} />
            </a>
            <a 
              href="https://www.instagram.com/taynaram.psi?igsh=NXUxdnI0aGJhaWJ3" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Instagram"
              className="text-custom-secondary hover:text-custom-dark transition-colors"
            >
              <Instagram size={20} />
            </a>
          </div>
        </div>
        
        <div className="mt-6 text-center text-xs text-custom-secondary/60">
          {new Date().getFullYear()} © Todos os direitos reservados
        </div>
      </div>
    </footer>
  );
}
