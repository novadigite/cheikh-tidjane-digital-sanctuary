import { useState } from 'react';
import { MessageCircle, Mail, Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulation d'envoi de formulaire
    setTimeout(() => {
      toast({
        title: "Message envoyé !",
        description: "Votre message a été transmis à Cheikh Hamad Tidjane Diabaté. Il vous répondra dans les plus brefs délais.",
      });
      
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 2000);
  };

  const whatsappNumber = "+221123456789"; // Remplacer par le vrai numéro
  const email = "contact@cheikhhamadtidjanediabate.com"; // Remplacer par la vraie adresse

  const openWhatsApp = () => {
    const message = "As-salamu alaykum, j'aimerais entrer en contact avec Cheikh Hamad Tidjane Diabaté.";
    const url = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-spiritual text-3xl md:text-4xl text-foreground mb-4">
            Contact
          </h2>
          <div className="w-16 h-1 bg-gradient-emerald mx-auto mb-6" />
          <p className="font-elegant text-muted-foreground max-w-2xl mx-auto">
            N'hésitez pas à prendre contact pour toute question spirituelle ou pour 
            en savoir plus sur les enseignements
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="font-spiritual text-2xl text-foreground mb-6">
                  Entrons en Contact
                </h3>
                <p className="font-elegant text-muted-foreground leading-relaxed mb-8">
                  Que ce soit pour des questions spirituelles, des conseils religieux, 
                  ou pour découvrir les enseignements islamiques, je suis à votre disposition 
                  pour vous accompagner dans votre cheminement spirituel.
                </p>
              </div>

              {/* WhatsApp */}
              <div className="flex items-start space-x-4 group">
                <div className="w-12 h-12 bg-gradient-emerald rounded-full flex items-center justify-center flex-shrink-0 group-hover:shadow-emerald transition-all duration-300">
                  <MessageCircle size={20} className="text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="font-spiritual text-lg text-foreground mb-2">WhatsApp</h4>
                  <p className="font-elegant text-muted-foreground mb-3">
                    Pour un contact direct et rapide
                  </p>
                  <Button
                    onClick={openWhatsApp}
                    className="bg-[#25D366] hover:bg-[#20BA5A] text-white"
                  >
                    <MessageCircle size={16} className="mr-2" />
                    Envoyer un message
                  </Button>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-4 group">
                <div className="w-12 h-12 bg-gradient-spiritual rounded-full flex items-center justify-center flex-shrink-0 group-hover:shadow-soft transition-all duration-300">
                  <Mail size={20} className="text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="font-spiritual text-lg text-foreground mb-2">Email</h4>
                  <p className="font-elegant text-muted-foreground mb-3">
                    Pour des échanges plus détaillés
                  </p>
                  <a
                    href={`mailto:${email}`}
                    className="font-elegant text-primary hover:text-primary-glow transition-colors duration-300 underline"
                  >
                    {email}
                  </a>
                </div>
              </div>

              {/* Calendly */}
              <div className="flex items-start space-x-4 group">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0 group-hover:shadow-primary transition-all duration-300">
                  <CheckCircle size={20} className="text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="font-spiritual text-lg text-foreground mb-2">Rendez-vous</h4>
                  <p className="font-elegant text-muted-foreground mb-3">
                    Réservez un entretien spirituel personnalisé
                  </p>
                  <Button
                    onClick={() => window.open('https://calendly.com/votre-compte', '_blank')}
                    className="bg-primary hover:bg-primary/90"
                  >
                    <CheckCircle size={16} className="mr-2" />
                    Réserver un créneau
                  </Button>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-card border border-border rounded-lg p-8 shadow-soft">
              <h3 className="font-spiritual text-2xl text-foreground mb-6">
                Envoyez un Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block font-elegant text-sm text-foreground mb-2">
                    Nom complet
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Votre nom"
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block font-elegant text-sm text-foreground mb-2">
                    Adresse email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="votre@email.com"
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block font-elegant text-sm text-foreground mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    placeholder="Votre message..."
                    rows={5}
                    className="w-full"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full"
                >
                  {isSubmitting ? (
                    <div className="flex items-center">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                      Envoi en cours...
                    </div>
                  ) : (
                    <div className="flex items-center">
                      <Send size={16} className="mr-2" />
                      Envoyer le message
                    </div>
                  )}
                </Button>
              </form>
            </div>
          </div>

          {/* Note */}
          <div className="mt-12 p-4 bg-accent/50 rounded-lg border border-border">
            <p className="font-elegant text-sm text-muted-foreground text-center">
              <strong>Note :</strong> Remplacez le numéro WhatsApp (+221123456789) et l'adresse email 
              (contact@cheikhhamadtidjanediabate.com) par les vrais contacts dans le code source.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;