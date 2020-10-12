import React from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import Featured from "./components/Featured";
import LatestProduct from "./components/LatestProduct";
import Blog from "./components/Blog";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Categories />
      <Featured />
      <LatestProduct />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
