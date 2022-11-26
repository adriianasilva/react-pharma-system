import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from '../page/home/home';

const RoutesViews: React.FC = () => {
  return(
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/results' element={<Home/>}/>
        <Route path='/detail' element={<Home/>}/>
      </Routes>
    </Router>
  );
}

export default RoutesViews;