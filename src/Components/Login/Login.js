import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { LoggedInContext } from '../../App';
import { useHistory, useLocation } from 'react-router';
const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(LoggedInContext)
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig)
    }
    else {
        firebase.app();
    }

    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                console.log(result.user)
                const {displayName, email, photoURL} = result.user;
                const signedInUser = {name: displayName, email, photoURL}
                setLoggedInUser(signedInUser)
                history.replace(from);
            }).catch((error) => {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorCode,errorMessage)
            });
    }
    return (
        <div className="text-center">
            <button className="btn btn-lg btn-light rounded shadow m-5" onClick={handleGoogleSignIn}><img className="mr-5" style={{width: "50px"}} src="https://img-authors.flaticon.com/google.jpg" alt=""/> <span className="ml-5 mr-5">Continue With Google</span> </button>
        </div>
    );
};

export default Login;