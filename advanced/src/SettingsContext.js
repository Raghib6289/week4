import React, { createContext, useState, useContext } from 'react';

// Create the context
const SettingsContext = createContext();

// Create a provider component
export function SettingsProvider({ children }) {
  const [settings, setSettings] = useState({ theme: 'dark', notifications: true });

  const updateSettings = (newSettings) => {
    setSettings(prevSettings => ({ ...prevSettings, ...newSettings }));
  };
  

  return (
    <SettingsContext.Provider value={{ settings, updateSettings }}>
      {children}
    </SettingsContext.Provider>
  );
}


// Custom hook to consume the context
export function useSettings() {
  const context = useContext(SettingsContext);
  if (context === undefined) {
    throw new Error('useSettings must be used within a SettingsProvider');
  }
  return context;
}
