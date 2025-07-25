"use client";
import React, { useState } from "react";

type ChatAssistantProps = {
  title: string;
  subtitle: string;
  chatEndpoint: string;
  backgroundImage: string;
  ctaText: string;
};

const ChatAssistant: React.FC<ChatAssistantProps> = ({
  title,
  subtitle,
  chatEndpoint,
  backgroundImage,
  ctaText
}) => {
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    if (!query.trim()) return;
    setIsLoading(true);
    try {
      const res = await fetch(chatEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: query }),
      });
      const data = await res.json();
      setResponse(data.answer || "No answer from assistant.");
    } catch (error) {
      setResponse("An error occurred.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />

      {/* Overlay for contrast */}
      <div className="absolute inset-0 bg-black z-0" style={{ opacity: 0.80 }}/>

      {/* Foreground assistant */}
      <div className="relative z-10 bg-white/90 backdrop-blur-lg p-8 rounded-md max-w-2xl w-full shadow-xl">
        <h1 className="text-3xl font-bold mb-2 text-center text-gray-900">
          {title}
        </h1>
        <p className="text-center mb-6 text-gray-600">{subtitle}</p>

      {response && (
        <div className="bg-gray-100 p-4 rounded mb-4 text-sm text-gray-900">
          {response}
        </div>
      )}

      <textarea
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyPress}
        placeholder="Ställ en fråga..."
        className="w-full border border-gray-300 rounded p-2 mb-4 min-h-[80px] text-gray-900"
        disabled={isLoading}
      />


        <button
          onClick={handleSubmit}
          className="bg-black text-white py-2 px-4 w-full rounded hover:bg-gray-800"
          disabled={isLoading}
        >
          {isLoading ? "Bearbetar..." : ctaText}
        </button>
      </div>
    </div>
  );
};

export default ChatAssistant;
