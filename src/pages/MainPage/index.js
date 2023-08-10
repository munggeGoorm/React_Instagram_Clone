import React,  {useState} from 'react'
import PostsPage from '../PostsPage/index';
import '../../App.css';
import UnLoginedPage from '../AccountPage/index';

export default function Index() {
    let currentStatus =
        (localStorage.getItem('isAuthenticated') === null) ? false : localStorage.getItem('isAuthenticated');
    const [isAuthenticated, setIsAuthenticated] = useState(currentStatus);

    return (
        <div className="h-full w-full">
            {
                isAuthenticated ?
                    <PostsPage setIsAuthenticated={setIsAuthenticated}/> :
                    <UnLoginedPage setIsAuthenticated={setIsAuthenticated}/>
            }
        </div>
    )
}