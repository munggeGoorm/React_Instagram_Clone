import React from 'react'
import backgroundPhone from '../../images/home-phones.png';
import instagramLogo from '../../images/ajlEU-wEDyo.png';

export default function Index({setIsAuthenticated}) {
    return (
        <div className='h-screen w-screen '>
            <div className='flex justify-center'>
                <div className='w-[380px] h-[582px]'>
                    <img src={backgroundPhone} alt="phone"/>
                    <div>
                        {/*<img className="w-[380px] h-[582px]" src="../../../public/images/screenshot1.png" alt="instagram_image"/>*/}
                        {/*<img className="w-[380px] h-[582px]" src="../../../public/images/screenshot2.png" alt="instagram_image"/>*/}
                        {/*<img className="w-[380px] h-[582px]" src="../../../public/images/screenshot3.png" alt="instagram_image"/>*/}
                        {/*<img className="w-[380px] h-[582px]" src="../../../public/images/screenshot4.png" alt="instagram_image"/>*/}
                    </div>
                </div>
                <div className='w-[350px] h-[401px] bg-amber-300 py-[10px] mb-[10px]'>
                    <div className=''>
                        <div className='w-[175px] h-[51px] overflow-hidden relative mx-auto'>
                            <img className="absolute w-[175px] h-[181px] top-[-51px]" src={instagramLogo} alt="logo"/>
                        </div>
                    </div>
                </div>
            </div>
            <button className='font-bold' onClick={()=>setIsAuthenticated(true)}>로그인</button>
        </div>
    )
}