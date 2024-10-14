import React, { createContext, ReactNode, useEffect, useState } from "react";
import { deleteUrl, getUrls, saveUrl } from "../services/urlService";

interface UrlContextType {
  urls: { id: string; url: string }[];
  addUrl: (url: string) => Promise<void>;
  removeUrl: (id: string) => Promise<void>;
}

interface UrlProviderProps {
  children: ReactNode;
}

export const UrlContext = createContext<UrlContextType | undefined>(undefined);

export const UrlProvider: React.FC<UrlProviderProps> = ({ children }) => {
  const [urls, setUrls] = useState<{ id: string; url: string }[]>([]);

  useEffect(() => {
    const fetchUrls = async () => {
      const data = await getUrls();
      setUrls(data);
    };

    fetchUrls();
  }, []);

  const addUrl = async (url: string) => {
    const newUrl = await saveUrl(url);
    setUrls([...urls, newUrl]);
  };

  const removeUrl = async (id: string) => {
    await deleteUrl(id);
    setUrls(urls.filter((u) => u.id !== id));
  };

  return (
    <UrlContext.Provider value={{ urls, addUrl, removeUrl }}>
      {children}
    </UrlContext.Provider>
  );
};
