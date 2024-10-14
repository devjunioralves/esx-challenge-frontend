import { useState } from "react";

export const useSnackbar = () => {
  const [message, setMessage] = useState<string | null>(null);
  const [severity, setSeverity] = useState<
    "success" | "error" | "info" | "warning"
  >("info");

  const showMessage = (
    msg: string,
    type: "success" | "error" | "info" | "warning" = "info"
  ) => {
    setMessage(msg);
    setSeverity(type);
  };

  const clearMessage = () => {
    setMessage(null);
  };

  return { message, severity, showMessage, clearMessage };
};
