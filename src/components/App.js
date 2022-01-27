import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Home';
import Blog from './Blog';
import TimeSheetPost from "./Posts/TimeSheetPost";
import "./Style.css"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/Blog' element={<Blog />} />
        <Route path='/TimeSheetPost' element={<TimeSheetPost />} />
      </Routes>
    </Router>
    
  );
}

export default App;
