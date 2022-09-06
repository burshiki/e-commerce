import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Page404 from './components/admin/Page404'

import AdminRoutes from './routes/AdminRoutes'

 


function App() {
  return (
    
    <Routes>
      <Route path="/admin/*" element={ <AdminRoutes />} />
      <Route path="*" element={ <Page404 /> } />
    </Routes>
     
  );
}

export default App;
