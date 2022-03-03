import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Home';
import Blog from './Blog';
import TimeSheetPost from "./Posts/TimeSheetPost";
import SurveyFormPost from "./Posts/SurveyFormPost";
import FirstReactProjectPost from "./Posts/FirstReactProjectPost";
import Portfolio from "./Portfolio";
import About from "./About";
import Contact from "./Contact";
import "./Style.css"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/Blog' element={<Blog />} />
        <Route path='/Portfolio' element={<Portfolio />} />
        <Route path='/About' element={<About />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/TimeSheetPost' element={<TimeSheetPost />} />
        <Route path='/SurveyFormPost' element={<SurveyFormPost />} />
        <Route path='/FirstReactProjectPost' element={<FirstReactProjectPost />} />
      </Routes>
    </Router>
    
  );
}

export default App;
