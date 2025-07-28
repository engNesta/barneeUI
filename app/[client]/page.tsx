"use client";

import { useParams } from "next/navigation";
import ChatAssistant from "@/components/ChatAssistant";

const clientConfig = {
  aprobo: {
    title: "Välkommen till Aprobo Assistent",
    subtitle: "Ställ dina frågor",
    chatEndpoint: "https://my-first-rag-app.onrender.com/ask/aprobo",
    backgroundImage: "/images/aprobo-bg.png",
    ctaText: "Skicka",
  },
  stim: {
    title: "Välkommen till STIM Assistent",
    subtitle: "Ställ dina frågor",
    chatEndpoint: "https://my-first-rag-app.onrender.com/ask/stim",
    backgroundImage: "/images/stim-bg.png",
    ctaText: "Fråga",
  },
  youngstival: {
    title: "Välkommen till Youngstival Assistent",
    subtitle: "Ställ dina frågor",
    chatEndpoint: "https://my-first-rag-app.onrender.com/ask/youngstival",
    backgroundImage: "/images/youngstival-bg.png",
    ctaText: "Fråga",
  },

  gpa: {
    title: "Välkommen till Gpa Assistent",
    subtitle: "Ställ dina frågor",
    chatEndpoint: "https://my-first-rag-app.onrender.com/ask/uicreator", // Adjust endpoint as needed
    backgroundImage: "/images/gpa-bg.png",
    ctaText: "Fråga",
  },

  layher: {
    title: "Välkommen till Layher Assistent",
    subtitle: "Ställ dina frågor",
    chatEndpoint: "https://my-first-rag-app.onrender.com/ask/uicreator", // Adjust endpoint as needed
    backgroundImage: "/images/layher-bg.png",
    ctaText: "Fråga",
  },

  packoplock: {
    title: "Välkommen till Packoplock Assistent",
    subtitle: "Ställ dina frågor",                  
    chatEndpoint: "https://my-first-rag-app.onrender.com/ask/uicreator", // Adjust endpoint as needed
    backgroundImage: "/images/packoplock-bg.png",
    ctaText: "Fråga",
  },

  homeworx: {
    title: "Välkommen till Homeworx Assistent",
    subtitle: "Ställ dina frågor",          
    chatEndpoint: "https://my-first-rag-app.onrender.com/ask/uicreator", // Adjust endpoint as needed
    backgroundImage: "/images/homeworx-bg.png",
    ctaText: "Fråga",
  },
};

export default function ClientPage() {
  const params = useParams();
  const client = params.client as keyof typeof clientConfig;

  const config = clientConfig[client];

  if (!config) return <div>Client not found</div>;

  return <ChatAssistant {...config} />;
}
