import { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';
import { Button } from '@/components/ui/button';

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Pour la démo, j'utilise des images placeholder. En production, remplacez par les vraies photos
  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop",
      alt: "Cheikh Hamad Tidjane Diabaté enseignant",
      title: "Séance d'enseignement"
    },
    {
      src: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=600&fit=crop",
      alt: "Portrait du Cheikh",
      title: "Portrait officiel"
    },
    {
      src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=600&fit=crop",
      alt: "Cheikh en méditation",
      title: "Moment de recueillement"
    },
    {
      src: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=600&h=400&fit=crop",
      alt: "Séance de lecture",
      title: "Étude des textes sacrés"
    },
    {
      src: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&h=400&fit=crop",
      alt: "Conférence spirituelle",
      title: "Conférence publique"
    },
    {
      src: "https://images.unsplash.com/photo-1506863530036-1efeddceb993?w=400&h=600&fit=crop",
      alt: "Avec la communauté",
      title: "Rencontre communautaire"
    }
  ];

  return (
    <section id="galerie" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-spiritual text-3xl md:text-4xl text-foreground mb-4">
            Galerie
          </h2>
          <div className="w-16 h-1 bg-gradient-spiritual mx-auto mb-6" />
          <p className="font-elegant text-muted-foreground max-w-2xl mx-auto">
            Découvrez quelques moments capturés de la vie spirituelle et des enseignements 
            de Cheikh Hamad Tidjane Diabaté
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-soft hover:shadow-divine transition-all duration-500 hover-lift cursor-pointer"
              onClick={() => setSelectedImage(image.src)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="font-spiritual text-white text-lg mb-2">
                    {image.title}
                  </h3>
                </div>
                
                {/* Zoom Icon */}
                <div className="absolute top-4 right-4">
                  <div className="w-10 h-10 bg-primary/80 rounded-full flex items-center justify-center">
                    <ZoomIn size={20} className="text-white" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage && (
          <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-full">
              <img
                src={selectedImage}
                alt="Image agrandie"
                className="max-w-full max-h-full object-contain rounded-lg"
              />
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 text-white hover:bg-white/20"
                onClick={() => setSelectedImage(null)}
              >
                <X size={24} />
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default GallerySection;