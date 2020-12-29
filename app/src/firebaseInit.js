import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyA2IcQ_-YGqMviWSY6zh7fxzz_sahG7NqI",
    authDomain: "fizz-b9d45.firebaseapp.com",
    databaseURL: "https://fizz-b9d45.firebaseio.com",
    projectId: "fizz-b9d45",
    storageBucket: "fizz-b9d45.appspot.com",
    messagingSenderId: "1003130580088",
    appId: "1:1003130580088:web:7afa7b80f45d0eec8d918d",
    measurementId: "G-V866T37JBW"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

firebase.analytics();