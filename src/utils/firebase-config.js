import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyAlOgaPGvP_ZNMOzJO3cq2zK_xfNYq1hJ0",
  authDomain: "react-login-155ab.firebaseapp.com",
  projectId: "react-login-155ab",
  storageBucket: "react-login-155ab.appspot.com",
  messagingSenderId: "608543717346",
  appId: "1:608543717346:web:2dd273eaa41861422dabbb",
  measurementId: "G-HH73YMQYYD"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);