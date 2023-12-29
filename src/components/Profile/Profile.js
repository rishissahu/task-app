import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from '../../firebaseConfig';
import { signOut } from 'firebase/auth';

const Profile = () => {
    const user = useSelector((state) => state.user);

    console.log(useSelector((state) => state))

    const dispatch = useDispatch();

    const handleLogout = async () => {
        try {
            await signOut(auth);
        } catch (error) {
            console.error('Error signing out:', error.message);
        }
    };
    return (
        <div>
            <h2>Profile</h2>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            <p>Age: {user.age}</p>
            <img src={user.profilePhoto} alt="Profile" />

            <button type="button" onClick={handleLogout}>
                Logout
            </button>

        </div>


    );
};

export default Profile;
