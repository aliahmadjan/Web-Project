import './App.css';
import React, { useState } from "react";

// eslint-disable-next-line
// eslint-disable-next-line
import SignUpForm from './components/signupform';
import NavBar from '../src/components/NavBar';
import LoginForm from './components/loginform';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import SDrawer from './components/SDrawer';
import FormHobby from './components/hobby-form';
import FormPost from './components/post-form';
import ViewHobby from './components/view-hobby';

function App() {

  return (
    <Router>
    <Routes>
    <Route index element = {<SignUpForm/>}/>
    <Route path="login" element={<LoginForm/>} />
    <Route path="signup" element ={<SignUpForm/>}/>
    <Route path="home" element={[<NavBar/>, <SDrawer/>]} />
    <Route path="home/addpost" element= {[<NavBar/>, <SDrawer/>,<FormPost/>]} />
    <Route path="home/addhobby" element={[<NavBar/>, <SDrawer/>,<FormHobby/>]} />
    <Route path="home/viewhobby" element={[<NavBar/>, <SDrawer/>,<ViewHobby/>]} />

    </Routes>
  </Router>
  );
}

export default App;
