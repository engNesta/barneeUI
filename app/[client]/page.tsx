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

  leifarvidsson: {
    title: "Välkommen till Leif Arvidsson Assistent",
    subtitle: "Ställ dina frågor",
    chatEndpoint: "https://my-first-rag-app.onrender.com/ask/uicreator", // Adjust endpoint as needed
    backgroundImage: "/images/leifarvidsson-bg.png",
    ctaText: "Fråga", 
  },

  weland: {
    title: "Välkommen till Weland Assistent",
    subtitle: "Ställ dina frågor",
    chatEndpoint: "https://my-first-rag-app.onrender.com/ask/uicreator", // Adjust endpoint as needed
    backgroundImage: "/images/weland-bg.png",
    ctaText: "Fråga",
  },

  oemautomatic: {
    title: "Välkommen till OEM Automatic Assistent",
    subtitle: "Ställ dina frågor",
    chatEndpoint: "https://my-first-rag-app.onrender.com/ask/uicreator", // Adjust endpoint as needed
    backgroundImage: "/images/oem-bg.png",
    ctaText: "Fråga",
  },

  pipelife: {
    title: "Välkommen till Pipelife Assistent",
    subtitle: "Ställ dina frågor",
    chatEndpoint: "https://my-first-rag-app.onrender.com/ask/uicreator", // Adjust endpoint as needed
    backgroundImage: "/images/pipelife-bg.png",
    ctaText: "Fråga",
  },

  wfi: {
    title: "Välkommen till WFI Assistent",
    subtitle: "Ställ dina frågor",      
    chatEndpoint: "https://my-first-rag-app.onrender.com/ask/uicreator", // Adjust endpoint as needed
    backgroundImage: "/images/wfi-bg.png",
    ctaText: "Fråga",
  },

  blomstryckeri: {
    title: "Välkommen till Blomstryckeri Assistent",
    subtitle: "Ställ dina frågor",
    chatEndpoint: "https://my-first-rag-app.onrender.com/ask/uicreator", // Adjust endpoint as needed
    backgroundImage: "/images/bloms-bg.png",
    ctaText: "Fråga",
  },

  Jamstalldhetsmyndigheten: {
    title: "Välkommen till Jämställdhetsmyndigheten Assistent",
    subtitle: "Ställ dina frågor",
    chatEndpoint: "https://my-first-rag-app.onrender.com/ask/uicreator", // Adjust endpoint as needed
    backgroundImage: "/images/jäm-bg.png",
    ctaText: "Fråga", 
  },

  bellaresor: {
    title: "Välkommen till Bella Resor Assistent",
    subtitle: "Ställ dina frågor",
    chatEndpoint: "https://my-first-rag-app.onrender.com/ask/uicreator", // Adjust endpoint as needed
    backgroundImage: "/images/bella-bg.png",
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
