import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { auth, firestore } from '../../firebaseConfig';
import { signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { setUser } from '../../actions/userActions';
import { useNavigate } from 'react-router-dom';
import { collection, doc, getDoc } from 'firebase/firestore';


const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      const userDocRef = doc(collection(firestore, 'users'), user.uid);
      const userDocSnapshot = await getDoc(userDocRef);
      if (userDocSnapshot.exists()) {
        const userData = userDocSnapshot.data();

        dispatch(
          setUser({
            name: userData.name,
            email: userData.email,
            age: userData.age,
            profilePhoto: userData.profilePhoto,
          })
        );
        navigate('/profile');
      } else {
        console.error('User data not found in Firestore.');
      }
    } catch (error) {
      console.error('Error signing in:', error.message);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
