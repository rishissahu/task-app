import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useParams,
} from "react-router-dom";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Profile from "./components/Profile/Profile";
import { onAuthStateChanged } from "firebase/auth";
import { auth, firestore } from "./firebaseConfig";
import { collection, doc, getDoc } from "firebase/firestore";
import { useDispatch, useSelector } from "react-redux";
import { checkUser } from "./actions/userActions";
import Protected from "./components/Protected/Protected";

const App = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      dispatch(checkUser(user?.uid));
    });
    return () => unsubscribe();
  }, []);

  return (
    <Router>
      <div>
        <nav>
          <ul>
            {!user?.uid && (
              <li>
                <Link to="/login">Login</Link>
              </li>
            )}
            {!user?.uid && (
              <li>
                <Link to="/signup">Sign Up</Link>
              </li>
            )}
            {user?.uid && (
              <li>
                <Link to="/profile">Profile</Link>
              </li>
            )}
          </ul>
        </nav>

        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/profile"
            element={
              <Protected user={user}>
                <Profile />
              </Protected>
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
