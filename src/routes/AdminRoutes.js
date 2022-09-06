import { Routes, Route, Navigate } from 'react-router-dom'

import Dashboard from '../components/admin/Dashboard'
import Profile from '../components/admin/Profile'
import MasterLayout from '../layouts/admin/MasterLayout'


export default function AdminRoutes() {
    return (
      <>
        <Routes>
            <Route element={<MasterLayout />} >
              <Route path="dashboard" element={ <Dashboard /> } />
              <Route path="profile" element={ <Profile /> } />
              <Route path="" element={<Navigate to="/admin/dashboard" /> } /> 
            </Route>
        </Routes>
      </>  
    )
}
