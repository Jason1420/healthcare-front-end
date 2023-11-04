'use client'
import { useState } from 'react'
import Logo from '@/assets/logo.webp'
import './Login.scss'
import axios from 'axios'
import Image from 'next/image';
import { Endpoint } from '@/routes/Route';
import Link from 'next/link';

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
    const handleLogin = () => {

    }
    return (
        <div className="login-background" >
            <div className="login-container">
                <div className="login-logo">
                    <Link href={Endpoint.HOME}>
                        <Image src={Logo} alt="logo-login" />
                    </Link>
                </div>
                <div className="login-box">
                    <div className="login-title">Đăng nhập</div>
                    <div className="login-subtitle">Access our dashboard</div>
                    <div className="login-input">
                        <label >Tài khoản</label>
                        {loginErrorCode && <p className='login-error-response'>*Sai tài khoản hoặc mật khẩu</p>}
                        <input type='text' tabIndex={1} className='form-control' placeholder='Nhập tài khoản'
                            value={username} onChange={(event) => setUsername(event.target.value)} />
                    </div>
                    <div className="login-input ">
                        <div className="label-form">
                            <label>Mật khẩu</label>

                        </div>
                        <div className="password-input-form">
                            <input type={isShowPassword ? 'text' : 'password'} className='form-control' placeholder='Nhập mật khẩu'
                                tabIndex={2} value={password} onChange={(event) => setPassword(event.target.value)}
                                onKeyUp={(event) => {
                                    if (event.key === "Enter") {
                                        handleLogin();
                                    }

                                }}
                            />
                            <i className={isShowPassword ? "far fa-eye" : "far fa-eye-slash"}
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