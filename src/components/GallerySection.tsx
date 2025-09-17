import { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';
import { Button } from '@/components/ui/button';
import cheikh1 from '@/assets/cheikh1.jpg';
import cheikh2 from '@/assets/cheikh2.jpg';

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    {
      src: cheikh1,
      alt: "Cheikh Hamad Tidjane Diabaté lors d'une conférence",
      title: "Conférence spirituelle"
    },
    {
      src: cheikh2,
      alt: "Cheikh Hamad Tidjane Diabaté en enseignement",
      title: "Séance d'enseignement"
    },
    {
      src: cheikh1,
      alt: "Portrait du Cheikh Hamad Tidjane Diabaté",
      title: "Portrait officiel"
    },
    {
      src: cheikh2,
      alt: "Cheikh Hamad Tidjane Diabaté avec la communauté",
      title: "Rencontre communautaire"
    },
    {
      src: cheikh1,
      alt: "Cheikh Hamad Tidjane Diabaté en prière",
      title: "Moment de recueillement"
    },
    {
      src: cheikh2,
      alt: "Cheikh Hamad Tidjane Diabaté enseignant",
      title: "Étude des textes sacrés"
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