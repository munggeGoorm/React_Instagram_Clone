import logo from '../../logo.svg';
import PostItem from '../../components/PostItem/index';
import React, {useEffect, useState} from 'react'
import PostsPage from '../PostsPage/index';
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
            {
                !isAuthenticated ?
                    <UnLoginedPage setIsAuthenticated={setIsAuthenticated}/>
                    :
                    <PostsPage/>
            }
        </div>
    )
}