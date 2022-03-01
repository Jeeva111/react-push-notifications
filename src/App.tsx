import React, { useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getMessaging, getToken, Messaging, onMessage } from "firebase/messaging";
import firebaseConfig from './const/FirebaseConfig';
import './App.css';
import logo from './logo.svg';

function App() {
  
    // initializeApp(firebaseConfig);
    // const messaging:Messaging = getMessaging();
    

    useEffect(() => {
        initializeApp(firebaseConfig);
        const messaging:Messaging = getMessaging();
        getToken(messaging, { vapidKey: 'BLzfHSIc51R5R6q-0LZle-CuByet8mjQz07eYmSJpt7Cg3xd_VV0JaVyu3ycWfbo-cNhIoAP-e5UocouIcyfhOI' }).then((currentToken) => {
            if (currentToken) {
                console.log(currentToken);
                onMessage(messaging, (payload) => {
                    console.log('Message received. ', payload);
                });
            } else {
                console.log('No registration token available. Request permission to generate one.');
            }
        }).catch((err) => {
            console.log('An error occurred while retrieving token. ', err);
        });
    },[]);

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
                >
                Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
