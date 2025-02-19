'use client';

import React from 'react';
import { ChevronRight, Info, Sparkles, Building2, WandSparkles } from 'lucide-react';
import { Switch } from '@/components/ui/switch';

interface ModelOption {
  id: string;
  name: string;
  description: string;
  icon: 'sparkles' | 'eu';
  hasSubmenu?: boolean;
}

const models: ModelOption[] = [
  {
    id: 'isms',
    name: 'ISMS Copilot X',
    description: 'Generalist, fast, for most tasks.',
    icon: 'sparkles'
  },
  {
    id: 'soc2',
    name: 'SOC 2 Copilot',
    description: 'More accurate on SOC 2',
    icon: 'sparkles'
  },
  {
    id: 'iso27001',
    name: 'ISO 27001 Copilot',
    description: 'More accurate on ISO 27001',
    icon: 'sparkles'
  },
  {
    id: 'iso42001',
    name: 'ISO 42001 Copilot',
    description: 'More accurate on ISO 42001',
    icon: 'sparkles'
  },
];

const ModelIcon = ({ type }: { type: 'sparkles' | 'eu' | 'wand-sparkles' }) => {
  if (type === 'sparkles') {
    return (
      <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
        <Sparkles className="w-5 h-5 text-gray-600" />
      </div>
    );
  }
  else if (type === 'wand-sparkles') {
    return (
      <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
        <WandSparkles className="w-5 h-5 text-gray-600" />
      </div>
    );
  }
  return (
    <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
      <Building2 className="w-5 h-5 text-gray-600" />
    </div>
  );
};

export const ModelSelector = ({ setModel, setOpen }: { setModel: (model: string) => void, setOpen: (open: boolean) => void }) => {
  return (
    <div className="bg-background rounded-lg shadow-lg p-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-medium">Models</h2>
        <Info className="w-5 h-5 text-muted-foreground" />
      </div>

      <div className="space-y-3">
        {models.map((model) => (
          <div
            key={model.id}
            className="flex items-center justify-between text-foreground p-2 hover:bg-muted rounded-lg cursor-pointer"
            onClick={() => {
              setModel(model.name);
              setOpen(false);
            }}
          >
            <div className="flex items-center gap-3">
              <ModelIcon type={model.icon} />
              <div>
                <p className="text-sm font-medium">{model.name}</p>
                {model.description && (
                  <p className="text-xs text-gray-500">{model.description}</p>
                )}
              </div>
            </div>
          </div>
        ))}
        
        <div
          className="flex items-center justify-between text-foreground p-2 hover:bg-muted rounded-lg cursor-pointer"
        >
          <div className="flex items-center gap-3">
            <ModelIcon type='eu' />
            <p className="text-sm font-medium">EU Assistants</p>
          </div>
          <ChevronRight className="w-4 h-4 text-muted-foreground" />
        </div>

        <div
          className="flex items-center justify-between text-foreground p-2 hover:bg-muted rounded-lg cursor-pointer"
        >
          <div className="flex items-center gap-3">
            <ModelIcon type='wand-sparkles' />
            <p className="text-sm font-medium">Experimental models</p>
          </div>
          <ChevronRight className="w-4 h-4 text-muted-foreground" />
        </div>
      </div>

      <div className="mt-6 pt-4 border-t">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium">Temporary chat</p>
            <p className="text-xs text-gray-500">Deleted after 30 days</p>
          </div>
          <Switch />
        </div>
      </div>
    </div>
  );
};