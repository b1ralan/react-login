import React from "react";
import './App.css';

import Navbar from "./components/Navbar";
import AppRouter from "./components/AppRouter";
import Loader from "./components/Loader";

import { BrowserRouter } from "react-router-dom";
import { auth } from "./utils/firebase-config";
import { useAuthState } from "react-firebase-hooks/auth";


function App() {
  const [ user, loading, error ] = useAuthState(auth);

  if (loading) {
    return <Loader/>;
  }
  return (
    <BrowserRouter>
      <Navbar/>
      <AppRouter/>
    </BrowserRouter>
  );
}

export default App;
