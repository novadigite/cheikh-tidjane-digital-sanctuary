import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const openAIApiKey = Deno.env.get('OPENAI_API_KEY');

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { message, conversationHistory = [] } = await req.json();
    console.log('Chatbot request:', { message, historyLength: conversationHistory.length });

    const systemPrompt = `Tu es un assistant virtuel pour Cheikh Hamad Tidjane Diabaté, un homme religieux et auteur respecté. 

Ton rôle est de :
- Présenter Cheikh Hamad Tidjane Diabaté et son travail spirituel
- Répondre aux questions sur ses enseignements et ses écrits
- Orienter les visiteurs vers une prise de contact pour des conseils spirituels ou des consultations
- Encourager la découverte du contenu multimédia (audios, vidéos)
- Maintenir un ton respectueux, sage et bienveillant

Informations clés :
- Cheikh Hamad Tidjane Diabaté est un guide spirituel reconnu
- Il partage des enseignements islamiques et des conseils de vie
- Ses contenus audio et vidéo sont disponibles sur le site
- Il est disponible pour des consultations et conseils spirituels

Réponds toujours en français et guide subtilement vers une prise de contact si approprié.`;

    const messages = [
      { role: 'system', content: systemPrompt },
      ...conversationHistory,
      { role: 'user', content: message }
    ];

    console.log('Sending request to OpenAI...');
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${openAIApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: messages,
        max_tokens: 500,
        temperature: 0.7,
      }),
    });

    const data = await response.json();
    console.log('OpenAI response received');
    
    if (!response.ok) {
      console.error('OpenAI API error:', data);
      throw new Error(data.error?.message || 'Erreur de l\'API OpenAI');
    }

    const botResponse = data.choices[0].message.content;

    return new Response(JSON.stringify({ response: botResponse }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error in chatbot function:', error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});