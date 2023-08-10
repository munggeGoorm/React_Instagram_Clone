import PostItem from "../../components/PostItem";
import React from 'react'
import Logout from '../../components/Logout.js';

export default function index({setIsAuthenticated}) {
    return (
        <div className="w-full h-full m-auto  flex justify-center ">
            {/*navigation*/}
            <div className="w-[250px] 2xl:w-[300px]  h-screen fixed left-0 top-0
                        flex-col justify-center items-start space-y-4 p-4 bg-blue-50  ">
                <h1 className="text-4xl text-center font-bold">Instagram</h1>
                <a href="/" className="text-2xl text-start font-bold block">Home</a>
                <a href="/" className="text-2xl text-start font-bold block">Add Post</a>
                <a href="/" className="text-2xl text-start font-bold block">Profile</a>
            </div>
            <div className="w-[250px] 2xl:w-[300px]  h-screen">
            </div>
            {/*posts*/}
            <div className=" h-full w-2/5 flex-col  bg-amber-50">
                <PostItem/>
                <PostItem/>
                <PostItem/>
            </div>

            {/*login*/}
            <Logout setIsAuthenticated={setIsAuthenticated}/>
        </div>
    )
}
