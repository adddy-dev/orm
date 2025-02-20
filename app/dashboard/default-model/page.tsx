"use client";

import React, { useState } from "react";
import { ChatInput } from "@/components/ChatInput";
import { Message } from "@/components/Message";
import axios from "axios";

interface  Message {
  content: string;
  isBot: boolean;
}

const suggestedPrompts = [
  {
    text: "Let's write an Information Security Policy",
    onClick: () => {},
  },
  {
    text: "We have SOC 2, how to get ISO 27001",
    onClick: () => {},
  },
  {
    text: "Teach me something",
    onClick: () => {},
  },
];

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [language, setLanguage] = useState<"english" | "arabic">("english");

  const sendMessageToAPI = async (message: string) => {
    try {
      setIsLoading(true);
      const { data } = await axios.post(
        "/api/chat",
        {
          msg: message,
          user_id: "user1",
          language
        },
        {
          timeout: 120000,
        }
      );
      return data.reply;
    } catch (error) {
      console.error("Error sending message to API:", error);
      return "Sorry, I encountered an error while processing your request.";
    } finally {
      setIsLoading(false);
    }
  };

  const handleSend = async () => {
    if (!inputValue.trim()) return;

    const userMessage = {
      content: inputValue,
      isBot: false,
    };
    setMessages(prevMessages => [...prevMessages, userMessage]);
    setInputValue("");
    
    const botReply = await sendMessageToAPI(inputValue);
    
    const botMessage = {
      content: botReply,
      isBot: true,
    };
    setMessages(prevMessages => [...prevMessages, botMessage]);
  };

  const handleSuggestedPrompt = async (promptText: string) => {
    const userMessage = {
      content: promptText,
      isBot: false,
    };
    setMessages(prevMessages => [...prevMessages, userMessage]);
    
    const botReply = await sendMessageToAPI(promptText);

    const botMessage = {
      content: botReply,
      isBot: true,
    };
    setMessages(prevMessages => [...prevMessages, botMessage]);
  };

  const updatedSuggestedPrompts = suggestedPrompts.map(prompt => ({
    ...prompt,
    onClick: () => handleSuggestedPrompt(prompt.text)
  }));

  return (
    <div className="flex flex-col h-[calc(100vh-64px)]">
      <main className="flex-1 overflow-y-auto p-4 h-full">
        <div className="space-y-2.5">
          {messages.map((message, index) => (
            <Message
              key={index}
              content={message.content}
              isBot={message.isBot}
            />
          ))}
          {isLoading && (
            <Message
              content="Thinking..."
              isBot={true}
            />
          )}
        </div>
      </main>

      <ChatInput
        suggestedPrompts={updatedSuggestedPrompts}
        value={inputValue}
        onChange={setInputValue}
        onSend={handleSend}
        isLoading={isLoading}
        language={language}
        setLanguage={setLanguage}
      />
    </div>
  );
}