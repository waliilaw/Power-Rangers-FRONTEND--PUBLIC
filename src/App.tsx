import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import First from './pages/First';

import './App.css'
import React from 'react';

function App() {
  return (
    <>
      <Router>
        <div>
    <Routes>
            <Route path="/" element={<First />} />
    </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;