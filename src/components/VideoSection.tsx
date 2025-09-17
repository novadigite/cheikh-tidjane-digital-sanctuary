import { useState } from 'react';
import { Play, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const VideoSection = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  // Pour la démo, j'utilise des IDs YouTube d'exemple. Remplacez par les vraies vidéos du Cheikh
  const videos = [
    {
      id: "dQw4w9WgXcQ", // Remplacer par l'ID YouTube réel
      title: "Les Fondements de la Foi Islamique",
      description: "Conférence sur les piliers essentiels de l'Islam et leur application dans la vie quotidienne",
      thumbnail: `https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg`,
      duration: "25:43"
    },
    {
      id: "dQw4w9WgXcQ", // Remplacer par l'ID YouTube réel
      title: "L'Importance de la Prière dans l'Islam",
      description: "Enseignement détaillé sur la signification spirituelle et pratique de la prière",
      thumbnail: `https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg`,
      duration: "18:32"
    },
    {
      id: "dQw4w9WgXcQ", // Remplacer par l'ID YouTube réel
      title: "Ramadan : Mois de Purification Spirituelle",
      description: "Réflexions sur les bienfaits spirituels du jeûne et de la méditation",
      thumbnail: `https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg`,
      duration: "32:15"
    },
    {
      id: "dQw4w9WgXcQ", // Remplacer par l'ID YouTube réel
      title: "Les Valeurs Morales en Islam",
      description: "Discussion sur l'éthique islamique et son application dans la société moderne",
      thumbnail: `https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg`,
      duration: "22:08"
    }
  ];

  const openVideo = (videoId: string) => {
    setSelectedVideo(`https://www.youtube.com/embed/${videoId}?autoplay=1`);
  };

  const closeVideo = () => {
    setSelectedVideo(null);
  };

  return (
    <section id="videos" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-spiritual text-3xl md:text-4xl text-foreground mb-4">
            Enseignements Vidéo
          </h2>
          <div className="w-16 h-1 bg-gradient-spiritual mx-auto mb-6" />
          <p className="font-elegant text-muted-foreground max-w-2xl mx-auto">
            Visionnez les conférences et enseignements spirituels de Cheikh Hamad Tidjane Diabaté
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {videos.map((video, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-lg overflow-hidden shadow-soft hover:shadow-divine transition-all duration-500 hover-lift"
            >
              {/* Video Thumbnail */}
              <div className="relative group cursor-pointer" onClick={() => openVideo(video.id)}>
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                
                {/* Play Overlay */}
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center animate-pulse">
                    <Play size={24} className="text-white ml-1" />
                  </div>
                </div>

                {/* Duration Badge */}
                <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-sm font-elegant">
                  {video.duration}
                </div>
              </div>

              {/* Video Info */}
              <div className="p-6">
                <h3 className="font-spiritual text-xl text-foreground mb-3 line-clamp-2">
                  {video.title}
                </h3>
                <p className="font-elegant text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                  {video.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => openVideo(video.id)}
                    className="group"
                  >
                    <Play size={16} className="mr-2 group-hover:text-primary transition-colors" />
                    Regarder
                  </Button>
                  
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => window.open(`https://youtube.com/watch?v=${video.id}`, '_blank')}
                    className="group"
                  >
                    <ExternalLink size={16} className="mr-2 group-hover:text-primary transition-colors" />
                    YouTube
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Video Modal */}
        {selectedVideo && (
          <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
            <div className="relative w-full max-w-4xl">
              <div className="relative w-full h-0 pb-[56.25%]"> {/* 16:9 Aspect Ratio */}
                <iframe
                  src={selectedVideo}
                  title="Video Player"
                  className="absolute top-0 left-0 w-full h-full rounded-lg"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="absolute -top-12 right-0 text-white hover:bg-white/20"
                onClick={closeVideo}
              >
                ✕
              </Button>
            </div>
          </div>
        )}

        {/* Note for replacing with real videos */}
        <div className="mt-12 p-4 bg-accent/50 rounded-lg border border-border max-w-4xl mx-auto">
          <p className="font-elegant text-sm text-muted-foreground text-center">
            <strong>Note :</strong> Remplacez les IDs YouTube de démonstration par les vrais IDs 
            des vidéos du Cheikh dans le code source (composant VideoSection.tsx, propriété 'id' des vidéos).
          </p>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;