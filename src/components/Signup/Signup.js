// SignUp.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { auth, firestore, storage } from '../../firebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { addDoc, collection, doc, setDoc } from 'firebase/firestore';
import { setUser } from '../../actions/userActions';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { useNavigate } from 'react-router-dom';


const SignUp = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [file, setFile] = useState("");
    function handleChange(event) {
        setFile(event.target.files[0]);
    }
    const navigate = useNavigate();

    const handleSignUp = async () => {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            if (file) {
                const storageRef = ref(storage, `profile_photos/${user.uid}/${file.name}`);
                await uploadBytesResumable(storageRef, file);
            }
            const downloadURL = await getDownloadURL(ref(storage, `profile_photos/${user.uid}/${file.name}`))

            const userCollectionRef = collection(firestore, "users");
            const docRef = await setDoc(doc(userCollectionRef, user.uid), {
                name: name,
                email: user.email,
                age: age,
                profilePhoto: null,
                profilePhoto: downloadURL,
            });
            navigate('/login');

            
        } catch (error) {
            console.error('Error signing up:', error.message);
        }
    };

    return (
        <div>
            <h2>Sign Up</h2>
            <form>
                <label>Name:</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />

                <label>Email:</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

                <label>Password:</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

                <label>Age:</label>
                <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />

                <label>Profile Photo:</label>
                <input type="file" accept="image/*" onChange={handleChange} />

                <button type="button" onClick={handleSignUp}>
                    Sign Up
                </button>
            </form>
        </div>
    );
};

export default SignUp;
