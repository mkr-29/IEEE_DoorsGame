import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Profile from "./Pages/Components/Registration/Profile/Profile"
import Register from './Pages/Components/Registration/Register'
import VerifyEmail from './Pages/Components/Registration/VerifyEmail/VerifyEmail';
import Login from './Pages/Components/Registration/Login/Login'
import {useState, useEffect} from 'react'
import {AuthProvider} from './Pages/Components/Firebase/AuthContext'
import {auth} from './Pages/Components/Firebase/Firebase'
import {onAuthStateChanged} from 'firebase/auth'
import PrivateRoute from './Pages/Components/Registration/PrivateRoute/PrivateRoute'
import {Navigate} from 'react-router-dom'

function App() {

  const [currentUser, setCurrentUser] = useState(null)
  const [timeActive, setTimeActive] = useState(false)

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user)
    })
  }, [])

  return (
    <Router>
      <AuthProvider value={{currentUser, timeActive, setTimeActive}}>
        <Routes>
          <Route exact path='/' element={
            <PrivateRoute>
              <Profile/>
            </PrivateRoute>
          }/>
          <Route path="/login" element={
            !currentUser?.emailVerified 
            ? <Login/>
            : <Navigate to='/' replace/>
          } />
          <Route path="/register" element={
            !currentUser?.emailVerified 
            ? <Register/>
            : <Navigate to='/' replace/>
          } />
          <Route path='/verify-email' element={<VerifyEmail/>} /> 
        </Routes>  
      </AuthProvider>
  </Router>
  );
}

export default App;
