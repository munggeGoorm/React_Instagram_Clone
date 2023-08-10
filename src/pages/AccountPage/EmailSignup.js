import React, {useState}  from 'react';
import { useNavigate } from 'react-router-dom';
import instagramLogo from '../../images/ajlEU-wEDyo.png';
import { styled } from 'styled-components';
import appStore from '../../images/cWx_hQBPmbo.png';
import playStore from '../../images/UtJtFmFLCiD.png';
import axios from "../../api/axios.js";

export default function EmailSignup() {
    const [email, setEmail] = useState("");
    const [nickname, setNickname] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    const emailHandle = (e) => {
        setEmail(e.target.value);
    }
    const nicknameHandle = (e) => {
        setNickname(e.target.value);
    }
    const nameHandle = (e) => {
        setName(e.target.value);
    }
    const passwordHandle = (e) => {
        setPassword(e.target.value);
    }

    const navigate = useNavigate();

    const signup = () => {
        const response = axios.post('/sign-up',     
            JSON.stringify({
                "email" : email,
                "nickname" : nickname,
                "password" : password,
            })
        )
        response.then((result)=>{
            if(result.data){
                navigate(`/accounts/login`);
            } else {
                alert("이미 존재하는 계정입니다.");
            }
        })
    }

    return (
        <FullScreen>
                <div className='pt-[10px]'>
                    <LoginBox className='h-[561px]'>
                        <div className='h-[130px] pt-[4px]'>
                            <div className='w-[175px] h-[53px] overflow-hidden relative mx-auto mt-[36px] flex-col justify-center'>
                                <img className="absolute w-[175px] h-[181px] top-[-51px] flex" src={instagramLogo} alt="logo"/>
                            </div>
                        </div>
                        <div className='mb-[10px] mx-[40px]'>
                            <span className='text-[17px] text-[#737373] font-bold'>친구들의 사진과 동영상을 보려면 가입하세요.</span> 
                        </div>
                        <div className='h-[48px]'>
                                    <Button className='bg-[#0095f6]'>Facebook으로 로그인</Button>
                        </div>
                        <div className='h-[43px] pt-[10px] flex justify-center'>
                                    <div className='w-[105px] border-t-[1.5px] mt-[8px]'></div>
                                    <span className='text-[13px] mb-18px mx-[18px]'>또는</span>
                                    <div className='w-[105px] border-t-[1.5px] mt-[8px]'></div>
                                </div>
                        <div>
                            <div className='w-[348px] flex-col space-y-1'>
                                <div className='h-[38px]'>
                                    <InputBox value={email} onChange={emailHandle} type='text' placeholder='이메일 주소'/>
                                </div>
                                <div className='h-[38px]'>
                                    <InputBox value={name} onChange={nameHandle} type='text'placeholder='성명'/>
                                </div>
                                <div className='h-[38px]'>
                                    <InputBox value={nickname} onChange={nicknameHandle} type='text'placeholder='사용자 이름'/>
                                </div>
                                <div className='h-[38px]'>
                                    <InputBox value={password} onChange={passwordHandle} type='password' placeholder='비밀번호'/>
                                </div>
                            </div>
                                <div className='w-[267px] h-[32px] mx-[40px]'>
                                    <p className='text-[12px] leading-1 mb-[8px]'>저희 서비스를 이용하는 사람이 회원님의 연락처 정보를 Instagram에 업로드했을 수도 있습니다. <a href='/accounts/login' className='text-[#00376b]'>더 알아보기</a></p>
                                </div>
                                <div className='h-[48px]'>
                                    <Button className='bg-[#56b6f9]' onClick={signup}>가입</Button>
                                </div>
                        </div>
                    </LoginBox> 
                    <div className='mt-[10px]'>
                    
                        <LoginBox>
                            <div className='h-[64px] leading-[64px]'>
                                <span className='font-semibold'>계정이 있으신가요?</span> <a href='/accounts/login' 
                                className='font-semibold text-[#56b6f9]'>로그인</a>
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
    border-width : 1px;
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
