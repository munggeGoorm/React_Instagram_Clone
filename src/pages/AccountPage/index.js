import React from 'react'
import backgroundPhone from '../../images/home-phones.png';
import instagramLogo from '../../images/ajlEU-wEDyo.png';
import { styled } from 'styled-components';
import appStore from '../../images/cWx_hQBPmbo.png';
import playStore from '../../images/UtJtFmFLCiD.png';

export default function Index({setIsAuthenticated}) {
    return (
        <div className='h-screen w-screen justify-center'>
            <div className='flex justify-center'>
                <div className='w-[412px] h-[594px]'>
                    <img className='mr-[32px] mb-[12px]' src={backgroundPhone} alt="phone"/>
                    <div>
                        {/*<img className="w-[380px] h-[582px]" src="../../../public/images/screenshot1.png" alt="instagram_image"/>*/}
                        {/*<img className="w-[380px] h-[582px]" src="../../../public/images/screenshot2.png" alt="instagram_image"/>*/}
                        {/*<img className="w-[380px] h-[582px]" src="../../../public/images/screenshot3.png" alt="instagram_image"/>*/}
                        {/*<img className="w-[380px] h-[582px]" src="../../../public/images/screenshot4.png" alt="instagram_image"/>*/}
                    </div>
                </div>
                <div className='pt-[10px]'>
                    <LoginBox>
                        <div className='h-[53px]'>
                            <div className='w-[175px] h-[53px] overflow-hidden relative mx-auto mt-[36px] my-auto mb-[12px]'>
                                <img className="absolute my-auto w-[175px] h-[181px] top-[-51px] flex" src={instagramLogo} alt="logo"/>
                            </div>
                        </div>
                        <div className='w-[348px] h-[215px] mt-[24px]'>
                            <InputBox placeholder='전화번호, 사용자 이름 또는 이메일'/>
                            <InputBox placeholder='비밀번호'/>
                            <Button onClick={()=>setIsAuthenticated(true)}>로그인</Button>
                            <div className='text-[15px]'>
                                -----------  또는  ----------
                            </div>
                            <div className='text-[17px]'>
                                Facebook으로 로그인
                            </div>
                            <div>
                                <a>비밀번호를 잊으셨나요?</a>
                            </div>
                        </div>
                    </LoginBox>
                    <div className='mt-[10px]'>
                        <LoginBox>
                            <div className='h-[64px] leading-[64px]'>
                                계정이 없으신가요? <a className='font-bold text-[#56b6f9]'>가입하기</a>
                            </div>
                        </LoginBox>
                    </div>
                    <div>
                        <div >
                            <span className='flex justify-center text-[14px] leading-[18px] mx-[10px] my-[20px]'>앱을 다운로드하세요.</span>
                        </div>
                        <div className='flex justify-center'>
                            <a href='https://apps.apple.com/app/instagram/id389801252?vt=lo'><img className='w-[136px] h-[40px]' src={appStore}/></a>
                            <a href='https://play.google.com/store/apps/details?id=com.instagram.android&referrer=ig_mid%3DFB085F02-BE35-4348-964A-36991336E3A9%26utm_campaign%3DloginPage%26utm_content%3Dlo%26utm_source%3Dinstagramweb%26utm_medium%3Dbadge&pli=1'><img className='w-[136px] h-[40px]' src={playStore}/></a>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const LoginBox = styled.div`
    width : 350px;
    // height: 402px;
    border-width : 1px;
    text-align: center;
    margin : auto 0;
`

const InputBox = styled.input`
    width : 267px;
    height : 36px;
    border-width : 1px;
    background-color : #FAFAFA;
    padding: 9px 0 7px 8px;
    line-height : 14px;
`
const Button = styled.button`
    width : 258px;
    height : 32px;
    background-color: #56b6f9;
    border-radius: 8px;
    color: white;
    font-weight: bold;
    margin : 8px 40px;
    onClick={()=>setIsAuthenticated(true)
`