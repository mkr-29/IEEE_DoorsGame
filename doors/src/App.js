import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from "./Pages/FirebasePages/Registration/Profile/Profile";
import Register from "./Pages/FirebasePages/Registration/Register";
import VerifyEmail from "./Pages/FirebasePages/Registration/VerifyEmail/VerifyEmail";
import Login from "./Pages/FirebasePages/Registration/Login/Login";
import { useState, useEffect } from "react";
import { AuthProvider } from "./Pages/FirebasePages/Firebase/AuthContext";
import { auth } from "./Pages/FirebasePages/Firebase/Firebase";
import { onAuthStateChanged } from "firebase/auth";
import PrivateRoute from "./Pages/FirebasePages/Registration/PrivateRoute/PrivateRoute";
import { Navigate } from "react-router-dom";
import Landing from "./Pages/Landing/Landing";

function App() {
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
            {/* <Route
              index
              element={
                  <Landing />
              }
            /> */}
            <Route
              // exact
              path=""
              element={
                <PrivateRoute>
                  <Profile />
                </PrivateRoute>
              }
            />
            <Route
              path="login"
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

export default App;
