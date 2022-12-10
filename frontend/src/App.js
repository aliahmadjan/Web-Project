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
import EditHobby from './components/edit-hobby';
import ViewProfile from './components/view-profile';
import SignInCommunity from './components/create-community';
import CreateEventForm from './components/addevent-form';
import MainScreen from './components/main-screen';
import CommunityLogin from './components/community-login';
import TitlebarBelowImageList from './components/view-posts';
import ViewVeteran from './components/view-veteran';


function App() {
  
 
  return (
    <Router>
    <Routes>
    <Route index element={[<NavBar/>, <SDrawer/>]} />
    <Route path="home/viewprofile" element={[<NavBar/> , <SDrawer/>,<ViewProfile/>]} />
    <Route path="home/addpost" element= {[<NavBar/>, <SDrawer/>,<FormPost/>]} />
    <Route path="home/viewposts" element ={[<NavBar/> ,<SDrawer/>,<TitlebarBelowImageList/>]} />
    <Route path="home/addhobby" element={[<NavBar/>, <SDrawer/>,<FormHobby/>]} />
    <Route path="home/viewhobby" element={[<NavBar/>, <SDrawer/>,<ViewHobby/>]} />
    <Route path="home/edithobby" element={[<NavBar/>,<SDrawer/>,<EditHobby/>]} />
    <Route path="home/viewveteran" element={[<NavBar/>,<SDrawer/>,<ViewVeteran/>]}/>

    </Routes>
  </Router>
  );
}

export default App;
