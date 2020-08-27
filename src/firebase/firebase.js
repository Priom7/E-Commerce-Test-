import firebase from "firebase/app";

import "firebase/firestore";
import "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCGRbEs1dkqMeA2dbaQAA1g58_lN646-LY",
  authDomain: "my-brand-22359.firebaseapp.com",
  databaseURL: "https://my-brand-22359.firebaseio.com",
  projectId: "my-brand-22359",
  storageBucket: "my-brand-22359.appspot.com",
  messagingSenderId: "412926820834",
  appId: "1:412926820834:web:186dc0a1e0ecf67075b9bb",
  measurementId: "G-MZNW6XL5FY",
};

export const createUserProfileDocument = async (
  userAuth,
  others
) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...others,
      });
    } catch (error) {
      console.log(`Error Creating User`, error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () =>
  auth.signInWithPopup(provider);

export default firebase;
