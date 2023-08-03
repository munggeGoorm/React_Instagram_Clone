import React from 'react';
import {Routes, Route} from 'react-router-dom';
import MainPage from "./pages/MainPage/index.js";
import DirectInboxPage from "./pages/DirectInboxPage/index.js";
import ProfilePage from "./pages/ProfilePage/index.js";

export default function App() {
  return (
      <div className="App">
          <Routes>
              <Route path="/" element={<MainPage/>}/>
              {/*<Route path="/account" element={}>*/}
              {/*    <Route path="/emailsignup" element={}/>*/}
              {/*    <Route path="/login" element={}/>*/}
              {/*</Route>*/}
              <Route path="/profile" element={<ProfilePage/>}/>
              <Route path="/directinbox" element={<DirectInboxPage/>}/>
          </Routes>
      </div>
  );
}