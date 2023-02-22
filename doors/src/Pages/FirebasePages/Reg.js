import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from "./Registration/Profile/Profile";
import Register from "./Registration/Register";
import VerifyEmail from "./Registration/VerifyEmail/VerifyEmail";
import Login from "./Registration/Login/Login";
import { useState, useEffect } from "react";
import { AuthProvider } from "./Firebase/AuthContext";
import { auth } from "./Firebase/Firebase";
import { onAuthStateChanged } from "firebase/auth";
import PrivateRoute from "./Registration/PrivateRoute/PrivateRoute";
import { Navigate } from "react-router-dom";

export default function Reg() {
  const [currentUser, setCurrentUser] = useState(null);
  const [timeActive, setTimeActive] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
  }, []);
  return (
    <div>
      <Router>
        <AuthProvider value={{ currentUser, timeActive, setTimeActive }}>
          <Routes>
            <Route
              exact
              path="/"
              element={
                <PrivateRoute>
                  <Profile />
                </PrivateRoute>
              }
            />
            <Route
              path="/login"
              element={
                !currentUser?.emailVerified ? (
                  <Login />
                ) : (
                  <Navigate to="/" replace />
                )
              }
            />
            <Route
              path="/register"
              element={
                !currentUser?.emailVerified ? (
                  <Register />
                ) : (
                  <Navigate to="/" replace />
                )
              }
            />
            <Route path="/verify-email" element={<VerifyEmail />} />
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}
