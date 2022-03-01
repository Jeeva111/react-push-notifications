importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing the generated config
var firebaseConfig = {
    apiKey: "AIzaSyBpDRrhF6C5DYrKvs7LM6iZNaQo52BRU7M",
    authDomain: "react-js-push-notifications.firebaseapp.com",
    projectId: "react-js-push-notifications",
    storageBucket: "react-js-push-notifications.appspot.com",
    messagingSenderId: "373001037859",
    appId: "1:373001037859:web:31505f44dca6eb5ff26996",
    measurementId: "G-8JS5XSM4YP"
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('Received background message ', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});