import React, {useState}from 'react';
import {Routes, Route} from 'react-router-dom';
import MainPage from "./pages/MainPage/index.js";
import DirectInboxPage from "./pages/DirectInboxPage/index.js";
import ProfilePage from "./pages/ProfilePage/index.js";
import EmailSignupPage from './pages/AccountPage/EmailSignup.js';
import LoginPage from './pages/AccountPage/Login.js';

export default function App() {
  return (
      <div className="App">
          <Routes>
            <Route path="/" element={<MainPage/>}/>
            <Route path="accounts/emailsignup" element={<EmailSignupPage/>}/>
            <Route path="accounts/login" element={<LoginPage/>}/>
            <Route path="profile" element={<ProfilePage/>}/>
            <Route path="directinbox" element={<DirectInboxPage/>}/>
          </Routes>
      </div>
  );
}