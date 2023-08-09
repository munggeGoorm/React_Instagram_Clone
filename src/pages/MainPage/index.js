import { useNavigate } from 'react-router-dom';
import PostItem from '../../components/PostItem/index';
import React, {useEffect, useState} from 'react'
import PostsPage from '../PostsPage/index';
import React, {useCallback, useEffect, useState} from 'react'
import '../../App.css';
import UnLoginedPage from '../AccountPage/index';

export default function Index() {
    let currentStatus =
        (localStorage.getItem('isAuthenticated') === null) ? false : localStorage.getItem('isAuthenticated');
    const [isAuthenticated, setIsAuthenticated] = useState(currentStatus);

    const logout = () => {
        localStorage.setItem('isAuthenticated', false);
        setIsAuthenticated(false);
    }
    console.log(isAuthenticated);

    return (
        <div className="h-full w-full">
            {
                !isAuthenticated ?
                    <UnLoginedPage setIsAuthenticated={setIsAuthenticated}/>
                    :
                    <div className="w-full h-full m-auto  flex justify-center ">
                        {/*navigation*/}
                        <div className="w-[250px] 2xl:w-[300px]  h-screen fixed left-0 top-0
                        flex-col justify-center items-start space-y-4 p-4 bg-blue-50  ">
                            <h1 className="text-4xl text-center font-bold">Instagram</h1>
                            <a href="/" className="text-2xl text-start font-bold block">Home</a>
                            <a href="/" className="text-2xl text-start font-bold block">Add Post</a>
                            <a href="/" className="text-2xl text-start font-bold block">Profile</a>
                        </div>

                        {/*posts*/}
                        <div className=" h-full w-2/5  flex-col  bg-amber-50">
                            <PostItem/>
                            <PostItem/>
                            <PostItem/>
                        </div>

                        {/*login*/}
                        <div className="fixed top-0 right-0">
                            <button onClick={logout}>로그아웃</button>
                        </div>
                    </div>
            }
        </div>
    )
}