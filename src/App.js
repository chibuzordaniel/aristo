import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Aristonav from './components/Aristonav';
import Home from './pages/Home';
import Share from './pages/Share'






function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' exact={true} element={<Aristonav />} />
        <Route path='/Aristonav' exact={true} element={<Aristonav />} />
        <Route path='/art' exact={true} element={<Home />}/>
        <Route path='/share' exact={true} element={<Share />}/>
      </Routes>
    </Router>
    
  );
}

export default App;

