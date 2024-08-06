import { signInWithPopup } from 'firebase/auth';
import React from 'react';
import { auth, provider } from './Firebase';
import { useNavigate } from 'react-router-dom';

function Signin(props) {
    const navigate = useNavigate();

    const loginPage = () => {
        signInWithPopup(auth, provider)
            .then(() => {
                props.info(true);
                const userName = auth.currentUser.displayName;
                const email = auth.currentUser.email;
                navigate('/home');
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div className="container" style={{ marginTop: '30px' }}>
            <div className="text-center">
                <h1 style={{ color: '#4CAF50', fontFamily: 'Arial, sans-serif' }}>
                    Welcome to Eshop Cart 🛒
                </h1>
                <p className="lead" style={{ fontFamily: 'Arial, sans-serif', color: '#555' }}>
                    Sign in to start your shopping experience.
                </p>
                <div className="d-flex justify-content-center">
                    <button 
                        type="button" 
                        className="btn btn-primary btn-lg" 
                        onClick={loginPage} 
                        style={{ marginTop: '30px' }}
                    >
                        Sign In with Google
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Signin;
