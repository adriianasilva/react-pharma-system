import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from '../page/home/home';
import Produto from '../page/produto/produto';
import { Stores } from '../page/stores';

const RoutesViews: React.FC = () => {
  return(
    <Router>
      <Routes>
        <Route path='/' element={<Produto/>}/>
        <Route path='/produto' element={<Produto/>}/>
        <Route path='/stores' element={<Stores/>}/>
      </Routes>
    </Router>
  );
}

export default RoutesViews;