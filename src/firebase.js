import React from 'react';
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

irebase.initializeApp(config);

var database = firebase.database();

var starCountRef = database.ref('all users/' + postId + '/starCount');
starCountRef.on('value', (snapshot) => {
    const data = snapshot.val();
    updateStarCount(postElement, data);
});

function writeUserData(userId, name, email, imageUrl) {
    database.ref('users/' + userId).set({
        username: name,
        email: email,
        profile_picture: imageUrl
    });
}