import React from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import Dashboard from './components/admin/Dashboard';
import Profile from './components/admin/Profile';
import MasterLayout from './layouts/admin/MasterLayout'
import { AdminRoutes } from './routes/AdminRoutes';


function App() {
  return (
    <div className="App">

      <Router>
        <Routes>
            <Route path="/admin" element={<MasterLayout />} >
              <Route path="/admin/dashboard" element={ <Dashboard /> } />
              <Route path="/admin/profile" element={ <Profile /> } />
              <Route path="/admin" element={<Navigate to="/admin/dashboard" /> } />
            </Route>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
