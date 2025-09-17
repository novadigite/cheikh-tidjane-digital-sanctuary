import { useEffect, useState } from 'react';
import heroBackground from '@/assets/hero-background.jpg';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="accueil"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Parallax Effect */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `url(${heroBackground})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-divine opacity-80" />
      </div>

      {/* Content */}
      <div
        className={`relative z-10 text-center px-4 max-w-4xl mx-auto transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <h1 className="font-spiritual text-4xl md:text-6xl lg:text-7xl text-foreground mb-6 animate-fade-up">
          Cheikh Hamad Tidjane
          <span className="block text-primary mt-2">Diabaté</span>
        </h1>

        <div className="w-24 h-1 bg-gradient-spiritual mx-auto mb-8 animate-glow" />

        <div className="font-elegant text-lg md:text-xl text-muted-foreground leading-relaxed space-y-4 max-w-2xl mx-auto">
          <p className="animate-fade-up" style={{ animationDelay: '0.3s' }}>
            Guide spirituel et érudit, consacrant sa vie à l'enseignement des valeurs
            islamiques et à l'écriture d'ouvrages inspirants pour la communauté.
          </p>
          <p className="animate-fade-up" style={{ animationDelay: '0.6s' }}>
            À travers ses écrits et ses enseignements, il œuvre pour la paix, la sagesse
            et l'élévation spirituelle de chacun.
          </p>
        </div>

        {/* Floating Islamic Pattern */}
        <div className="absolute top-10 right-10 opacity-20 animate-float hidden lg:block">
          <div className="w-16 h-16 border-2 border-primary rounded-full flex items-center justify-center">
            <div className="w-8 h-8 bg-gradient-spiritual rounded-full" />
          </div>
        </div>

        <div className="absolute bottom-10 left-10 opacity-20 animate-float hidden lg:block" style={{ animationDelay: '2s' }}>
          <div className="w-12 h-12 border border-secondary rotate-45">
            <div className="w-full h-full bg-gradient-emerald rounded-sm" />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;