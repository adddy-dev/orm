'use client'

import { createContext, useContext, useState } from "react";


const policyGenContext = createContext({
  policy: '',
  setPolicy: (policy: string) => {},
});


export const PolicyGenContextProvider = ({ children }: any) => {
  const [policy, setPolicy] = useState('');
  return (
    <policyGenContext.Provider value={{ policy, setPolicy }}>
      {children}
    </policyGenContext.Provider>
  );
};

export const usePolicyGenContext = () => {
  const context = useContext(policyGenContext);
  if (context === undefined) {
    throw new Error('usePolicyGenContext must be used within a PolicyGenContextProvider');
  }
  return context;
};