import { Heart, Book, Users } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="font-spiritual text-2xl text-primary mb-4">
              Cheikh Hamad Tidjane Diabaté
            </h3>
            <p className="font-elegant text-background/80 leading-relaxed">
              Guide spirituel dédié à l'enseignement des valeurs islamiques 
              et à l'accompagnement des fidèles dans leur cheminement spirituel.
            </p>
          </div>

          {/* Values */}
          <div className="text-center">
            <h4 className="font-spiritual text-lg text-primary mb-4">
              Nos Valeurs
            </h4>
            <div className="space-y-3">
              <div className="flex items-center justify-center space-x-2">
                <Book size={16} className="text-secondary" />
                <span className="font-elegant text-background/80">Éducation spirituelle</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Users size={16} className="text-secondary" />
                <span className="font-elegant text-background/80">Communauté unie</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Heart size={16} className="text-secondary" />
                <span className="font-elegant text-background/80">Paix et sagesse</span>
              </div>
            </div>
          </div>

          {/* Quote */}
          <div className="text-center md:text-right">
            <blockquote className="font-spiritual text-lg text-primary mb-4 italic">
              "La vraie richesse est la richesse de l'âme"
            </blockquote>
            <p className="font-elegant text-background/80">
              - Proverbe islamique
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-8" />

        {/* Bottom */}
        <div className="text-center">
          <p className="font-elegant text-background/60 text-sm">
            © {currentYear} Portfolio de Cheikh Hamad Tidjane Diabaté. 
            <span className="block md:inline md:ml-2 mt-2 md:mt-0">
              Créé avec respect et dévotion.
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;