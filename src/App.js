import React from "react";
import { NewsContextProvider } from "./NewsContext";
import "../node_modules/react-bootstrap/dist/react-bootstrap.min";
import UserData from "./components/UserData";
import "./app.css";

function App() {
  return (
    <NewsContextProvider>
      <UserData />
    </NewsContextProvider>
  );
}

export default App;
