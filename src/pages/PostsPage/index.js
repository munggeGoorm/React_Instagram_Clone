import PostItem from "../../components/PostItem";
import React from 'react'

export default function index() {
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
            <div className="fixed top-0 right-0">
                <div>
                    로그인됨
                </div>
                {/*todo 로그아웃 기능*/}
                {/*<button onClick={() => setIsAuthenticated(false)}>로그아웃</button>*/}
            </div>
        </div>
    )
}
