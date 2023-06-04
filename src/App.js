import React from "react";
import Allposts from "./components/Allposts";
import { Route,Routes } from "react-router-dom";
import Eachpost from "./components/Eachpost";
import './App.css';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/F4-Module-Test/" element={<Allposts />} />
        <Route path="/F4-Module-Test/item/:id" element={<Eachpost />} />
      </Routes>
    </div>
  );
 
}

export default App;
