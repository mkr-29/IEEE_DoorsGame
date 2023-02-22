import './profile.css'
import {useAuthValue} from '../../Firebase/AuthContext'
import { signOut } from 'firebase/auth' 
import { auth } from '../../Firebase/Firebase'


function Profile() {
  const {currentUser} = useAuthValue()

  return (
      <div className='center'>
        <div className='profile'>
          <h1>Profile</h1>
          <p><strong>Email: </strong>{currentUser?.email}</p>
          <p>
            <strong>Email verified: </strong>
            {`${currentUser?.emailVerified}`}
          </p>
          <span onClick={() => signOut(auth)}>Sign Out</span>
        </div>
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdlDVzfLR65PJ-JycK7bU2egijTvxDzsNXWKxckOap6LwczNw/viewform?embedded=true" width="640" height="541" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
      </div>
  )
}

export default Profile
