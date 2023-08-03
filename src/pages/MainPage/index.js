import logo from '../../logo.svg';

import React, {useEffect, useState} from 'react'
import '../../App.css';
import axios from "axios";
import UnLoginedPage from '../AccountPage/index';

export default function Index() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    // useEffect(()=>{
    //     axios.get('/api/v1/authentication')
    //         .then(response => setIsAuthenticated(response))
    //         .catch(error => console.log(error));
    // }, []);

    return (
         <div className="h-full w-full">
             {isAuthenticated!==true ?
                 <UnLoginedPage setIsAuthenticated={setIsAuthenticated}/>
                 :
                 <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <div>
                         로그인됨
                    </div>
                     <button onClick={()=>setIsAuthenticated(false)}>로그아웃</button>
                 </header>}
         </div>
    )
}