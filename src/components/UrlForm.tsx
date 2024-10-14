import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { useUrl } from "../hooks/useUrl";

const UrlForm: React.FC = () => {
  const [input, setInput] = useState("");
  const { addUrl } = useUrl();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input) {
      addUrl(input);
      setInput("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Enter URL"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        fullWidth
        margin="normal"
      />
      <Button type="submit" variant="contained" color="primary">
        Add URL
      </Button>
    </form>
  );
};

export default UrlForm;
