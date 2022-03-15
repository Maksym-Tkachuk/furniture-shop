import React from "react";

import "./App.scss";
import Footer from "./UI/components/Footer/Footer";
import Header from "./UI/components/Header/Header";
import MainContent from "./UI/components/MainContent/MainContent";


function App() {


  return (
    <div className="wrapper">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
