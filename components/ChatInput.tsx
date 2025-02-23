import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Languages, Loader2, Paperclip, Send } from 'lucide-react';
import { Textarea } from './ui/textarea';
import { SuggestedPrompt } from './SuggestedPrompts';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from './ui/select';

interface ChatInputProps {
  suggestedPrompts: Array<{ text: string; onClick: () => void }>;
  value: string;
  onChange: (value: string) => void;
  onSend: () => void;
  isLoading?: boolean;
  language: 'english' | 'arabic';
  setLanguage: (language: 'english' | 'arabic') => void;
}

export const ChatInput = ({ 
  value, 
  onChange, 
  onSend, 
  suggestedPrompts, 
  isLoading = false,
  language,
  setLanguage
}: ChatInputProps) => {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      const scrollHeight = textareaRef.current.scrollHeight;
      const maxHeight = 24 * 5;
      textareaRef.current.style.height = `${(Math.min(scrollHeight, maxHeight)/16)}rem`;
    }
  }, [value]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey && !isLoading) {
      e.preventDefault();
      onSend();
    }
  };

  return (
    <div className='pt-2'>
      <div className="flex flex-wrap gap-2 mx-4 my-2">
        {suggestedPrompts.map((prompt, index) => (
          <SuggestedPrompt
            key={index}
            text={prompt.text}
            onClick={prompt.onClick}
            disabled={isLoading}
          />
        ))}
      </div>
      <div className="relative border-t pt-2 px-4">
        <Label htmlFor="file-upload" className={`p-2 cursor-pointer absolute left-5 top-1/2 -translate-y-1/2 ${isLoading ? 'opacity-50 pointer-events-none' : ''}`}>
          <Paperclip className="!size-5" />
        </Label>
        <Input 
          type='file' 
          className="hidden" 
          id="file-upload" 
          disabled={isLoading}
          max-size="524288000"
        />
        <Textarea
          ref={textareaRef}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={isLoading ? "Waiting for response..." : "Message..."}
          rows={1}
          className="px-12 pr-24 resize-none overflow-auto text-base"
          style={{
            scrollbarWidth: 'none'
          }}
          disabled={isLoading}
        />
        <Select onValueChange={(value: 'english' | 'arabic') => {
          setLanguage(value)
        }} defaultValue={language}>
          <SelectTrigger className="absolute w-10 right-16 p-0 outline-none border-none top-1/2 -translate-y-1/2">
            <SelectValue placeholder={<Languages className="!size-5" />} />
          </SelectTrigger>
          <SelectContent className='outline-none border-none'>
            <SelectGroup className='outline-none border-none'>
              <SelectItem value="english">en</SelectItem>
              <SelectItem value="arabic">ar</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Button
          size="icon"
          variant="ghost"
          className="absolute right-5 top-1/2 -translate-y-1/2"
          onClick={onSend}
          disabled={isLoading || !value.trim()}
        >
          {isLoading ? (
            <Loader2 className="!size-5 animate-spin" />
          ) : (
            <Send className="!size-5" />
          )}
        </Button>
      </div>
      <p className="text-xs text-gray-500 mt-2 px-4 pb-5">
        I can make mistakes. Please review answers, and give feedback.
        Acceptable use policy and Licensing Agreement apply.
        Don&apos;t share confidential information. See Trust Center.
        Report knowledge gap. v1.0.
      </p>
    </div>
  );
};