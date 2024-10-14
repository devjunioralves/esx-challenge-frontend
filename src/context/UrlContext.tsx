import { Alert, Snackbar } from "@mui/material";
import React, { createContext, ReactNode, useEffect, useState } from "react";
import { deleteUrl, getUrls, saveUrl, updateUrl } from "../services/urlService";

interface UrlContextType {
  urls: { id: string; url: string }[];
  addUrl: (url: string) => Promise<void>;
  removeUrl: (id: string) => Promise<void>;
  editUrl: (id: string, url: string) => Promise<void>;
}

interface UrlProviderProps {
  children: ReactNode;
}

export const UrlContext = createContext<UrlContextType | undefined>(undefined);

export const UrlProvider: React.FC<UrlProviderProps> = ({ children }) => {
  const [urls, setUrls] = useState<{ id: string; url: string }[]>([]);
  const [message, setMessage] = useState<string | null>(null);
  const [severity, setSeverity] = useState<
    "success" | "error" | "info" | "warning"
  >("info");

  useEffect(() => {
    const fetchUrls = async () => {
      try {
        const data = await getUrls();
        setUrls(data);
        setMessage("URLs loaded successfully");
        setSeverity("success");
      } catch (error) {
        setMessage("Error loading URLs");
        setSeverity("error");
      }
    };

    fetchUrls();
  }, []);

  const addUrl = async (url: string) => {
    try {
      const newUrl = await saveUrl(url);
      setUrls([...urls, newUrl]);
      setMessage("URL added successfully");
      setSeverity("success");
    } catch (error) {
      setMessage("Error adding URL");
      setSeverity("error");
    }
  };

  const removeUrl = async (id: string) => {
    try {
      await deleteUrl(id);
      setUrls(urls.filter((u) => u.id !== id));
      setMessage("URL deleted successfully");
      setSeverity("success");
    } catch (error) {
      setMessage("Error deleting URL");
      setSeverity("error");
    }
  };

  const editUrl = async (id: string, url: string) => {
    try {
      const updatedUrl = await updateUrl(id, url);
      setUrls(urls.map((u) => (u.id === id ? updatedUrl : u)));
      setMessage("URL updated successfully");
      setSeverity("success");
    } catch (error) {
      setMessage("Error updating URL");
      setSeverity("error");
    }
  };

  const clearMessage = () => {
    setMessage(null);
  };

  return (
    <UrlContext.Provider value={{ urls, addUrl, removeUrl, editUrl }}>
      {children}
      <Snackbar open={!!message} autoHideDuration={6000} onClose={clearMessage}>
        <Alert
          onClose={clearMessage}
          severity={severity}
          sx={{ width: "100%" }}
        >
          {message}
        </Alert>
      </Snackbar>
    </UrlContext.Provider>
  );
};
