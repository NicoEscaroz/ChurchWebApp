import React from "react";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import "./App.css";
import { Login } from "./components/auth/Login"; // Login page
import { Register } from "./components/auth/Register"; // Register page
import { useAuth } from "./hooks/useAuth"; // Custom hook to check authentication
import Layout from "./layout/Layout";
import Configuration from "./pages/Configuration/Configuration";
import Donaciones from "./pages/Donations/Donations";
import Eventos from "./pages/Events/Events";
import Grupos from "./pages/Groups/Groups";
import Home from "./pages/inicio/inicio";
import Medios from "./pages/Media/Medios";
import Oraciones from "./pages/Prayers/Prayers";

// Protect routes that require authentication
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return <p>Loading...</p>; // Optional: Add a loading spinner
  }

  return isAuthenticated ? children : <Navigate to="/login" />;
};

function App() {
  return (
    <Router>
      <Routes>
        {/* Public routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protected routes */}
        <Route
          path="/*"
          element={
            <ProtectedRoute>
              <Layout>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/eventos" element={<Eventos />} />
                  <Route path="/grupos" element={<Grupos />} />
                  <Route path="/oraciones" element={<Oraciones />} />
                  <Route path="/medios" element={<Medios />} />
                  <Route path="/donaciones" element={<Donaciones />} />
                  <Route path="/configuracion" element={<Configuration />} />
                </Routes>
              </Layout>
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
