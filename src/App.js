import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import AuthRoute from './components/AuthRoute';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import PrivateRoute from './PrivateRoute';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* root → login */}
          <Route path="Integpit/" element={<Navigate to="Integpit/login" replace />} />

          <Route path="Integpit/login" element={<Login />} />
          <Route path="Integpit/register" element={<Register />} />

          <Route path="Integpit/dashboard" element={  <PrivateRoute>
              <Dashboard />
            </PrivateRoute>} />


          {/* any unknown URL → root */}
          <Route path="*" element={<Navigate to="Integpit/" replace />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
