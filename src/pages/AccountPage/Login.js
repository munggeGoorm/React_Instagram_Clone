import React, {useState}  from 'react';
import { useNavigate } from 'react-router-dom';
import instagramLogo from '../../images/ajlEU-wEDyo.png';
import { styled } from 'styled-components';
import appStore from '../../images/cWx_hQBPmbo.png';
import playStore from '../../images/UtJtFmFLCiD.png';
import axios from "../../api/axios.js";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const emailHandle = (e) => {
        setEmail(e.target.value);
    }
    const passwordHandle = (e) => {
        setPassword(e.target.value);
    }

    const navigate = useNavigate();

    const login = () => {
        const response = axios.post('/login',     
            JSON.stringify({
                "email" : email,
                "password" : password,
            })
        )
        response.then((result)=>{
            if(result.data){
                localStorage.setItem('isAuthenticated', true);
                navigate(`/`);
            } else {
                alert("로그인에 실패했습니다.");
            }
        })
    
    }
    return (
        <FullScreen>
                <div className=' pt-[10px]'>
                    <LoginBox className='h-[400px]'>
                        <div className='h-[130px] pt-[4px]'>
                            <div className='w-[175px] h-[53px] overflow-hidden relative mx-auto mt-[36px] flex-col justify-center'>
                                <img className="absolute w-[175px] h-[181px] top-[-51px] flex" src={instagramLogo} alt="logo"/>
                            </div>
                        </div>
                    
                        <div>
                            <div className='w-[348px] flex-col space-y-1'>
                                <div className='h-[38px]'>
                                    <InputBox value={email} onChange={emailHandle} placeholder='이메일 주소'/>
                                </div>
                                <div className='h-[38px]'>
                                    <InputBox value={password} onChange={passwordHandle} type='password' placeholder='비밀번호'/>
                                </div>
                                <div className='h-[48px]'>
                                    <Button className='bg-[#56b6f9]' onClick={login}>로그인</Button>
                                </div>
                                <div className='h-[43px] pt-[10px] flex justify-center'>
                                    <div className='w-[105px] border-t-[1.5px] mt-[8px]'></div>
                                    <span className='text-[13px] mb-18px mx-[18px]'>또는</span>
                                    <div className='w-[105px] border-t-[1.5px] mt-[8px]'></div>
                                </div>
                                <div className='text-[14px] h-[15px] mt-[10px] mb-[8px] font-bold text-[#385185]'>
                                    Facebook으로 로그인
                                </div>
                                <div className='h-[32px]'>
                                    <a href='/accounts/password/reset/' className='text-[12px] text-[#00376B]'>비밀번호를 잊으셨나요?</a>
                                </div>
                            </div>        
                        </div>
                    </LoginBox> 
                    <div className='mt-[10px]'>
                        <LoginBox>
                            <div className='h-[64px] leading-[64px]'>
                                <span className='font-semibold'>계정이 없으신가요?</span> <a href='/accounts/emailsignup/' 
                                className='font-semibold text-[#56b6f9]'>회원가입</a>
                            </div>
                        </LoginBox>
                        <div className='w-[350px] h-[95px]'>
                            <div >
                                <span className='flex justify-center font-bold text-[14px] leading-[18px] mx-[10px] my-[20px]'>앱을 다운로드하세요.</span>
                            </div>
                            <div className='flex justify-center space-x-2'>
                                <a href='https://apps.apple.com/app/instagram/id389801252?vt=lo'><img className='w-[136px] h-[40px]' src={appStore} alt='appStore'/></a>
                                <a href='https://play.google.com/store/apps/details?id=com.instagram.android&referrer=ig_mid%3DFB085F02-BE35-4348-964A-36991336E3A9%26utm_campaign%3DloginPage%26utm_content%3Dlo%26utm_source%3Dinstagramweb%26utm_medium%3Dbadge&pli=1'><img className='w-[136px] h-[40px]' src={playStore} alt='playStore'/></a>   
                            </div>
                        </div>
                    </div>      
                </div>
        </FullScreen>
    )
}

const FullScreen = styled.div`
    display: flex;
    height : 100vh;
    align-items: center;
    justify-content: center;
`
const LoginBox = styled.div`
    width : 350px;
    border-width: 1px;
    border-color: #dbdbdb; 
    text-align: center;
`
const InputBox = styled.input`
    width : 267px;
    height : 36px;
    border-width : 1px;
    background-color : #FAFAFA;
    padding: 9px 0 7px 8px;
    line-height : 14px;
    font-size : 11px;
`
const Button = styled.button`
    width : 258px;
    height : 32px;
    // background-color: #56b6f9;
    border-radius: 8px;
    color: white;
    font-weight: bold;
    margin : 8px 40px;
    onClick={()=>setIsAuthenticated(true)
`