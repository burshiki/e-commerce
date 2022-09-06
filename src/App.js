import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'

import AdminRoutes from './routes/AdminRoutes'

 


function App() {
  return (
    
    <Routes>
      <Route path="/admin/*" element={ <AdminRoutes />} />
        {/* <Route path="/admin" element={ <MasterLayout /> } >
          <Route path="/admin/dashboard" element={ <Dashboard /> } />
          <Route path="/admin/profile" element={ <Profile /> } />
          <Route path="/admin" element={<Navigate to="/admin/dashboard" /> } />
        </Route> */}
    </Routes>
     
  );
}

export default App;
