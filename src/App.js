import React from "react";
import "./App.css";
import { StateProvider } from "./contexts/StateContext";
import Routes from "./Routes";
import { ContainerArea } from "./components/mainComponents";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
export default function App() {
  return (
    <StateProvider>
      <BrowserRouter>
        <ContainerArea>
          <Header />
          <Routes />
          <Footer />
        </ContainerArea>
      </BrowserRouter>
    </StateProvider>
  );
}
