import React from "react";
import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import Step3 from './components/step3';
import Step1 from './components/Step1';
import Pricing from './components/Pricing';
import Privacy_Policy from './components/privacy_policy';
import Terms_of_Use from './components/terms_of_use';
import Contact from './components/contact_us';
import FAQ from './components/faq';
import Main from './components/main_landing';

import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/faq" element={<FAQ />}/>
          <Route path="/terms" element={<Terms_of_Use />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/privacy" element={<Privacy_Policy />}/>
          <Route path="/Ruta-Health" element={<Main />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;