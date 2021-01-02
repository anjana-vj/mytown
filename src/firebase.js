import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyBt5jz2RXHoaadnVaC0mUXpgqkYIE-n2rI",
    authDomain: "mytown-avj.firebaseapp.com",
    databaseURL: "https://mytown-avj-default-rtdb.firebaseio.com",
    projectId: "mytown-avj",
    storageBucket: "mytown-avj.appspot.com",
    messagingSenderId: "517761257843",
    appId: "1:517761257843:web:7623e73696e756d1727506"
};

try {
    firebase.initializeApp(firebaseConfig);
}
catch (e) {
    console.log(e);
}