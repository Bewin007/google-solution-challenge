import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home';
import Library from './pages/library';
import Login from './pages/login';

import Profile from './pages/profile';
import Mycollection from './pages/mycollections';
import Registation from './pages/registation';
// import NotFound from './components/NotFound';


function App() {
  return (
    <BrowserRouter>
      <Routes>
            <Route index element={<Login />} /> 
            <Route path="/library" element={<Library />} />
            <Route path="/home" element={<Home />}  />
            <Route path="/collection" element={<Mycollection />}  />
            {/* <Route path="/profile" element={<Profile />}  /> */}
            <Route path="/register" element={<Registation />}  />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
