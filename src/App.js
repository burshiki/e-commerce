import axios from 'axios';
import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Page404 from './components/admin/Page404'
import Login from './components/frontend/auth/Login';
import Register from './components/frontend/auth/Register';
import Collections from './components/frontend/Collections';
import Home from './components/frontend/Home';

import AdminRoutes from './routes/AdminRoutes'


axios.defaults.baseURL = "http://localhost:8000/";
axios.defaults.headers.post['Accept'] = 'application/json';
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.withCredentials = true;


function App() {
  return (
    
    <Routes>
      <Route path="/signin" element={ <Login /> } />
      <Route path="/register" element={ <Register /> } />
      <Route path="/" element={ <Home /> } />
      <Route path="/collections" element={ <Collections /> } />
      <Route path="/admin/*" element={ <AdminRoutes />} />
      <Route path="*" element={ <Page404 /> } />
    </Routes>
     
  );
}

export default App;
