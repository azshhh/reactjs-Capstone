import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAN06ZizY-9gA5JjwvQ4BA_8bspvn8TSzQ",
  authDomain: "capstone-practice-db.firebaseapp.com",
  projectId: "capstone-practice-db",
  storageBucket: "capstone-practice-db.appspot.com",
  messagingSenderId: "634451463736",
  appId: "1:634451463736:web:d699beb912f6c87de660cd",
};

const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth(app);
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
