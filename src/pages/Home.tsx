import React from "react";
import UrlForm from "../components/UrlForm";
import UrlList from "../components/UrlList";

const Home: React.FC = () => {
  return (
    <div>
      <h1>URL Manager</h1>
      <UrlForm />
      <UrlList />
    </div>
  );
};

export default Home;
