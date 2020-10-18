import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import DynamicScrollToTop from "./components/DynamicScrollToTop"
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollButton from "./components/ScrollButton";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import "./App.css"

const App = () => {
  useEffect(() => {
    window.onscroll = () => document.getElementById('scroll-btn').style.visibility = window.pageYOffset >= 500 ? "visible" : "hidden"
  })
  return (
    <Router>
      <div className="App">
        <DynamicScrollToTop />
        <Header />
        <Route path="/" exact component={Home} />
        <Route path="/contact" exact component={Contact} />
        <Footer />
        <ScrollButton />
      </div>
    </Router>
  )
}

export default App;