'use client'
import { useState } from 'react'
import './Register.scss'
import Logo from '../../assets/new-logo.png'
import Link from 'next/link';
import { Endpoint } from '@/routes/Route';
import Image from 'next/image';

const Register = () => {
    // logic for show password button
    const [isShowPassword, setShowPassword] = useState<boolean>(false);
    const handleShowPassword = () => {
        setShowPassword(!isShowPassword);
    }

    return (
        <div className="register-background" >
            <div className="register-container">
                <div className="register-logo">
                    <Link href={Endpoint.HOME}>

                        <Image src={Logo} alt="logo-register" />
                    </Link>
                </div>
                <div className="register-box">
                    <div className="register-title">Đăng Ký</div>
                    <div className="register-subtitle">Access our dashboard</div>


                    <div className="form">
                        <div className="register-input">
                            <label htmlFor="username">Tài khoản</label>

                            <input type="text"
                                className="form-control "
                                id="username"
                                placeholder='Nhập tài khoản'
                            />

                        </div>

                        <div className="register-input ">
                            <div className="password-input-form">
                                <label htmlFor="password">Mật khẩu</label>

                                <input type={isShowPassword ? 'text' : 'password'}
                                    className='form-control'
                                    id="password"
                                    placeholder='Nhập mật khẩu'
                                    tabIndex={2}

                                />
                                <i className={isShowPassword ? "far fa-eye" : "far fa-eye-slash"}
                                    onClick={() => handleShowPassword()}
                                ></i>


                            </div>
                        </div>
                        <div className="register-input">
                            <label htmlFor="fullName">Họ và tên</label>

                            <input type="text"
                                className="form-control "
                                id="fullName"
                            />

                        </div>
                        <div className="register-input">
                            <label htmlFor="email">Email</label>

                            <input type="text"
                                className="form-control "
                                id="email"
                            />

                        </div>
                        <div className="register-input">
                            <label htmlFor="phoneNumber">Số điện thoại</label>

                            <input type="text"
                                className="form-control "
                                id="phoneNumber"
                            />

                        </div>
                        <div className="register-input">
                            <label htmlFor="address">Địa chỉ</label>

                            <input type="text"
                                className="form-control "
                                id="address"
                            />

                        </div>

                    </div>
                    <div className="form-group text-center">
                        <button className="btn-primary register-btn"
                            tabIndex={3} onClick={() => { }}>Đăng ký</button>
                    </div>
                    <Link tabIndex={4} className="forgot-password text-end" href={Endpoint.LOGIN}>Bạn đã có tài khoản</Link>
                </div>
            </div>
        </div >

    )
}

export default Register