import React from 'react';
import { auth, googleProvider } from './firebase';
import { signInWithPopup } from "firebase/auth";
import { useDispatch } from "react-redux";
import { loginActions } from "../store/LoginSlice";
import { profileActions } from "../store/profileSlice";
import { useNavigate } from "react-router-dom";

const GoogleLoginButton = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate()

  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;

      // Extract user details
      const userDetails = {
        name: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
        uid: user.uid,
        phoneNumber: user.phoneNumber
      };

      await fetch('/api/saveUserProfile', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userDetails)
      });

      console.log(userDetails.photoURL)
  
      dispatch(loginActions.login());
      dispatch(profileActions.addProfile(userDetails));
      
      navigate("/content");
    } catch (error) {
      console.error("Error signing in with Google:", error);
    }
  };

  return (
    <button onClick={signInWithGoogle} className="google-login-button">
      Sign In with Google
    </button>
  );
};

export default GoogleLoginButton;
