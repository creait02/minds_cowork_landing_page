import React, { createContext, useContext, useState, ReactNode } from 'react';
import { CMSData } from './types';

const defaultData: CMSData = {
  hero: {
    title: "MINDS COWORK",
    subtitle: "Espacios diseñados para inspirar, conectar y potenciar tu creatividad.",
    cta: "Reservar Espacio"
  },
  plans: [
    {
      id: '1',
      name: 'Hot Desk',
      price: '$150',
      features: ['Acceso 24/7', 'Internet 1Gbps', 'Café ilimitado'],
    },
    {
      id: '2',
      name: 'Dedicated Desk',
      price: '$280',
      features: ['Escritorio propio', 'Locker privado', 'Domicilio comercial'],
      recommended: true,
    },
    {
      id: '3',
      name: 'Private Office',
      price: '$850',
      features: ['Oficina privada', 'Personalización', 'Soporte IT'],
    },
  ],
  locations: [],
  testimonials: []
};

interface CMSContextType {
  data: CMSData;
  updateData: (newData: Partial<CMSData>) => void;
  isAdmin: boolean;
  toggleAdmin: () => void;
}

const CMSContext = createContext<CMSContextType | undefined>(undefined);

export function CMSProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<CMSData>(defaultData);
  const [isAdmin, setIsAdmin] = useState(false);

  const updateData = (newData: Partial<CMSData>) => {
    setData(prev => ({ ...prev, ...newData }));
  };

  const toggleAdmin = () => setIsAdmin(!isAdmin);

  return (
    <CMSContext.Provider value={{ data, updateData, isAdmin, toggleAdmin }}>
      {children}
    </CMSContext.Provider>
  );
}

export function useCMS() {
  const context = useContext(CMSContext);
  if (!context) throw new Error('useCMS must be used within a CMSProvider');
  return context;
}
