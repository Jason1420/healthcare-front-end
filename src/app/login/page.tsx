'use client'
import { useState } from 'react'
import Logo from '@/assets/new-logo.png'
import './Login.scss'
import Image from 'next/image';
import { Endpoint } from '@/routes/Route';
import Link from 'next/link';
import axios from 'axios';
import { ApiURL } from '@/routes/ApiUrl';
import { redirect, useRouter } from 'next/navigation';
import { cookies } from 'next/headers'
import { createCookies } from '../action';
const Login = () => {
    // logic for show password button
    const [isShowPassword, setShowPassword] = useState<boolean>(false);
    const handleShowPassword = () => {
        setShowPassword(!isShowPassword);
    }
    const [username, setUsername] = useState<string | undefined>("")
    const [password, setPassword] = useState<string | undefined>("")
    const [loginErrorCode, setLoginErrorCode] = useState<boolean>(false) // 0:no error, bad credential

    // logic for login
    const router = useRouter()
    const handleLogin = async () => {
        try {
            const res = await axios.post(ApiURL.login, { identifier: username, password: password },)


            if (res.status === 200) {
                createCookies('jwt', res.data.jwt)
                createCookies('username', res.data.user.username)
                createCookies('email', res.data.user.email)
                createCookies('fullName', res.data.user.fullName)
                createCookies('phone', res.data.user.phone)
                createCookies('address', res.data.user.address)

                router.push(Endpoint.HOME)

            }
        } catch (error) {
            setLoginErrorCode(true)
        }
    }
    return (
        <div className="login-background " >
            <div className="login-container  ">
                <div className="login-logo ">
                    <Link href={Endpoint.HOME}>
                        <Image src={Logo} alt="logo-login" />
                    </Link>
                </div>
                <div className="login-box 
                mobile:border 
                mobile:bg-gray-100  
                mobile: w-[470px]
                mobile: mx-auto
                mobile: p-[30px]
                mobile: flex
                mobile: flex-col 
                mobile: rounded-[5px]
                mobile: mt-[50px]
                mobile: mb-5">
                    <div className="login-title">Đăng nhập</div>
                    <div className="login-subtitle">Access our dashboard</div>
                    <div className="login-input flex flex-col">
                        <label >Tài khoản</label>
                        {loginErrorCode && <p className='text-red-500 italic mb-2'>*Sai tài khoản hoặc mật khẩu</p>}
                        <input type='text' tabIndex={1} className='outline-[#0597f3] form-control py-3 pl-3 rounded-md' placeholder='Nhập tài khoản'
                            value={username} onChange={(event) => setUsername(event.target.value)} />
                    </div>
                    <div className="login-input flex flex-col ">
                        <div className="label-form">
                            <label>Mật khẩu</label>

                        </div>
                        <div className="password-input-form relative">
                            <input type={isShowPassword ? 'text' : 'password'} className='outline-[#0597f3] form-control w-full py-3 pl-3 rounded-md' placeholder='Nhập mật khẩu'
                                tabIndex={2} value={password} onChange={(event) => setPassword(event.target.value)}
                                onKeyUp={(event) => {
                                    if (event.key === "Enter") {
                                        handleLogin();
                                    }
                                }}
                            />
                            <i className={`absolute right-3 top-4 cursor-pointer ${isShowPassword ? "far fa-eye" : "far fa-eye-slash"}`}
                                onClick={() => handleShowPassword()}
                            ></i>
                        </div>
                    </div>
                    <div className="form-group text-center">
                        <button className="btn-primary login-btn"
                            tabIndex={3} onClick={() => handleLogin()}>Đăng nhập</button>
                    </div>
                    <Link tabIndex={4} className="forgot-password text-end" href={Endpoint.REGISTER}>Đăng ký nếu bạn chưa có tài khoản</Link>
                </div>
            </div>
        </div >

    )
}

export default Login