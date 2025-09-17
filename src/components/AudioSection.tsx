import { useState, useRef } from 'react';
import { Play, Pause, Volume2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';

const AudioSection = () => {
  const [currentTrack, setCurrentTrack] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Pour la démo, j'utilise des URLs d'exemple. En production, remplacez par les vrais fichiers audio
  const tracks = [
    {
      title: "Récitation du Coran - Sourate Al-Fatiha",
      description: "Récitation mélodieuse par Cheikh Hamad Tidjane Diabaté",
      duration: "3:42",
      src: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav" // Remplacer par le vrai fichier
    },
    {
      title: "Dhikr et Invocations",
      description: "Session de dhikr guidée pour la méditation spirituelle",
      duration: "8:15",
      src: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav" // Remplacer par le vrai fichier
    }
  ];

  const playTrack = (index: number) => {
    if (currentTrack === index && isPlaying) {
      setIsPlaying(false);
      audioRef.current?.pause();
    } else {
      setCurrentTrack(index);
      setIsPlaying(true);
      if (audioRef.current) {
        audioRef.current.src = tracks[index].src;
        audioRef.current.play();
      }
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
      setDuration(audioRef.current.duration || 0);
    }
  };

  const handleSeek = (value: number[]) => {
    if (audioRef.current) {
      audioRef.current.currentTime = value[0];
      setCurrentTime(value[0]);
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <section id="audio" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-spiritual text-3xl md:text-4xl text-foreground mb-4">
            Enseignements Audio
          </h2>
          <div className="w-16 h-1 bg-gradient-emerald mx-auto mb-6" />
          <p className="font-elegant text-muted-foreground max-w-2xl mx-auto">
            Écoutez les récitations et enseignements spirituels de Cheikh Hamad Tidjane Diabaté
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {tracks.map((track, index) => (
            <div
              key={index}
              className={`bg-card border border-border rounded-lg p-6 mb-6 shadow-soft hover:shadow-emerald transition-all duration-300 ${
                currentTrack === index ? 'ring-2 ring-secondary/30 bg-gradient-to-r from-secondary/5 to-transparent' : ''
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex-1">
                  <h3 className="font-spiritual text-xl text-foreground mb-2">
                    {track.title}
                  </h3>
                  <p className="font-elegant text-muted-foreground text-sm">
                    {track.description}
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-elegant text-muted-foreground text-sm">
                    {track.duration}
                  </p>
                </div>
              </div>

              {/* Player Controls */}
              <div className="flex items-center space-x-4">
                <Button
                  variant={currentTrack === index && isPlaying ? "default" : "outline"}
                  size="icon"
                  onClick={() => playTrack(index)}
                  className="rounded-full"
                >
                  {currentTrack === index && isPlaying ? (
                    <Pause size={20} />
                  ) : (
                    <Play size={20} />
                  )}
                </Button>

                {currentTrack === index && (
                  <>
                    <span className="font-elegant text-sm text-muted-foreground min-w-[40px]">
                      {formatTime(currentTime)}
                    </span>
                    <div className="flex-1">
                      <Slider
                        value={[currentTime]}
                        max={duration || 100}
                        step={1}
                        onValueChange={handleSeek}
                        className="w-full"
                      />
                    </div>
                    <span className="font-elegant text-sm text-muted-foreground min-w-[40px]">
                      {formatTime(duration)}
                    </span>
                    <Volume2 size={20} className="text-muted-foreground" />
                  </>
                )}
              </div>
            </div>
          ))}

          {/* Hidden Audio Element */}
          <audio
            ref={audioRef}
            onTimeUpdate={handleTimeUpdate}
            onEnded={() => {
              setIsPlaying(false);
              setCurrentTime(0);
            }}
            onLoadedMetadata={handleTimeUpdate}
          />

          {/* Note for replacing with real audio files */}
          <div className="mt-8 p-4 bg-accent/50 rounded-lg border border-border">
            <p className="font-elegant text-sm text-muted-foreground text-center">
              <strong>Note :</strong> Remplacez les fichiers audio de démonstration par les vrais enregistrements 
              du Cheikh dans le code source (composant AudioSection.tsx, propriété 'src' des tracks).
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AudioSection;