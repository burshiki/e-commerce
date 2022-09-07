import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Page404 from './components/admin/Page404'
import Login from './components/frontend/auth/Login';
import Register from './components/frontend/auth/Register';
import Home from './components/frontend/Home';

import AdminRoutes from './routes/AdminRoutes'

 


function App() {
  return (
    
    <Routes>
      <Route path="/login" element={ <Login /> } />
      <Route path="/register" element={ <Register /> } />
      <Route path="/" element={ <Home /> } />
      <Route path="/admin/*" element={ <AdminRoutes />} />
      <Route path="*" element={ <Page404 /> } />
    </Routes>
     
  );
}

export default App;
