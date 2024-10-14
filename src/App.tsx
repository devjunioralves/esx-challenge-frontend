import { Container } from "@mui/material";
import React from "react";
import { UrlProvider } from "./context/UrlContext";
import Home from "./pages/Home";

const App: React.FC = () => {
  return (
    <UrlProvider>
      <Container>
        <Home />
      </Container>
    </UrlProvider>
  );
};

export default App;
