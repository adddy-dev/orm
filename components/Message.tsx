import React from 'react';
import { cn } from '@/lib/utils';
import Markdown from 'react-markdown';

interface MessageProps {
  content: string;
  isBot?: boolean;
}

export const Message = ({ content, isBot = false }: MessageProps) => {
  return (
    <div className={cn('flex flex-row', isBot ? 'justify-start' : 'justify-end')}>
      <div className={cn(
        'max-w-2xl w-11/12 px-4 py-3 rounded-2xl',
        isBot ? 'bg-muted text-foreground rounded-bl-sm' : 'bg-primary-foreground text-white ml-auto rounded-br-sm'
      )}>
        <Markdown>{content}</Markdown>
      </div>
    </div>
  );
};