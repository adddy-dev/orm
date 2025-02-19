'use client'

import React from 'react';
import { Button } from '@/components/ui/button';

interface SuggestedPromptProps {
  text: string;
  onClick: () => void;
  disabled?: boolean;
}

export const SuggestedPrompt = ({ text, onClick, disabled=false }: SuggestedPromptProps) => (
  <Button
    variant="secondary"
    className="text-sm py-1 px-3 bg-muted text-muted-foreground hover:bg-muted-foreground hover:text-background h-auto"
    onClick={onClick}
    disabled={disabled}
  >
    {text}
  </Button>
);