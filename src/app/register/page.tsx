'use client'
import { useState, useEffect } from 'react'
import Logo from '@/assets/new-logo.png'
import './Register.scss'
import Image from 'next/image';
import { Endpoint } from '@/routes/Route';
import Link from 'next/link';
import axios, { AxiosError } from 'axios';
import { ApiURL } from '@/routes/ApiUrl';
import { toast, ToastContainer } from 'react-toastify'
import { redirect, useRouter } from 'next/navigation';
const Register = () => {
    // logic for show password button
    const [isShowPassword, setShowPassword] = useState<boolean>(false);
    const handleShowPassword = () => {
        setShowPassword(!isShowPassword);
    }
    const [username, setUsername] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [confirmPassword, setConfirmPassword] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [passwordNotMatch, setPasswordNotMatch] = useState<boolean>(false)
    const [usernameOrEmailIsAreTaken, setUsernameOrEmailAreTaken] = useState<boolean>(false)
    const [usernameAtLeast3Character, setUsernameAtLeast3Character] = useState<boolean>(false)
    const [emailInvalid, setEmailInvalid] = useState<boolean>(false)
    const [passwordAtLeast6Character, setPasswordAtLeast6Character] = useState<boolean>(false)
    // logic for register
    const router = useRouter()

    const handleRegister = async () => {
        try {
            if (username.length < 3) {
                setUsernameAtLeast3Character(true)
            }
            if (password === confirmPassword) {
                const res = await axios.post(ApiURL.register, {
                    username: username,
                    email: email,
                    password: password
                })
                if (res.status === 200) {
                    toast.success("Đăng ký tài khoản thành công", {
                        icon: "✔️"
                    });
                    setTimeout(() => {
                        router.push(Endpoint.LOGIN,)
                    }, 2000)
                }
            } else {
                setPasswordNotMatch(true)
            }
        } catch (error: any) {

            if (error.response.data.error.message === "email must be a valid email") {
                setEmailInvalid(true)
            } else if (error.response.data.error.message === "password must be at least 6 characters") {
                setPasswordAtLeast6Character(true)
            }
            else {
                setUsernameOrEmailAreTaken(true)
            }
        }
    }
    useEffect(() => {
        setPasswordNotMatch(false)
        setUsernameOrEmailAreTaken(false)
        setUsernameAtLeast3Character(false)
        setEmailInvalid(false)
        setPasswordAtLeast6Character(false)
    }, [username, password, email, confirmPassword])
    return (
        <div className="register-background " >
            <div className="register-container  ">
                <div className="register-logo ">
                    <Link href={Endpoint.HOME}>
                        <Image src={Logo} alt="logo-register" />
                    </Link>
                </div>
                <div className="register-box 
                mobile:border 
                mobile:bg-gray-100  
                mobile: w-[476px]
                mobile: mx-auto
                mobile: p-[30px]
                mobile: flex
                mobile: flex-col 
                mobile: rounded-[5px]
                mobile: mt-[50px]
                mobile: mb-[50px]">
                    <div className="register-title">Đăng ký</div>
                    <div className="register-subtitle">Access our dashboard</div>
                    <div className="register-input flex flex-col">
                        <label >Tài khoản</label>
                        {usernameOrEmailIsAreTaken && <p className='text-red-500 italic mb-2'>*Tài khoản hoặc email đã tồn tại</p>}
                        {usernameAtLeast3Character && <p className='text-red-500 italic mb-2'>*Tài khoản phải có ít nhất 3 ký tự</p>}
                        <input type='text' tabIndex={1} className='outline-[#0597f3] form-control py-3 pl-3 rounded-md' placeholder='Nhập tài khoản'
                            value={username} onChange={(event) => setUsername(event.target.value)} />
                    </div>
                    <div className="register-input flex flex-col">
                        <label >Email</label>
                        {emailInvalid && <p className='text-red-500 italic mb-2'>*Vui lòng nhập đúng định dạng email</p>}
                        <input type='email' tabIndex={1} className='outline-[#0597f3] form-control py-3 pl-3 rounded-md' placeholder='Nhập tài khoản'
                            value={email} onChange={(event) => setEmail(event.target.value)} />
                    </div>
                    <div className="register-input flex flex-col ">
                        <div className="label-form">
                            <label>Mật khẩu</label>

                        </div>
                        <div className="password-input-form relative">
                            {passwordAtLeast6Character && <p className='text-red-500 italic mb-2'>*Mật khẩu phải có ít nhất 6 ký tự</p>}
                            <input type={isShowPassword ? 'text' : 'password'} className='outline-[#0597f3] form-control w-full py-3 pl-3 rounded-md' placeholder='Nhập mật khẩu'
                                tabIndex={2} value={password} onChange={(event) => setPassword(event.target.value)}
                                onKeyUp={(event) => {
                                    if (event.key === "Enter") {
                                        handleRegister();
                                    }

                                }}
                            />
                            <i className={`absolute right-3 top-4 cursor-pointer ${isShowPassword ? "far fa-eye" : "far fa-eye-slash"}`}
                                onClick={() => handleShowPassword()}
                            ></i>
                        </div>
                    </div>
                    <div className="register-input flex flex-col ">
                        <div className="label-form">
                            <label>Nhập lại mật khẩu</label>

                        </div>
                        <div className="password-input-form relative">
                            {passwordNotMatch && <p className='text-red-500 italic mb-2'>*Mật khẩu không khớp</p>}
                            <input type={isShowPassword ? 'text' : 'password'} className='outline-[#0597f3] form-control w-full py-3 pl-3 rounded-md' placeholder='Nhập mật khẩu'
                                tabIndex={2} value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)}
                                onKeyUp={(event) => {
                                    if (event.key === "Enter") {
                                        handleRegister();
                                    }

                                }}
                            />
                            <i className={`absolute right-3 top-4 cursor-pointer ${isShowPassword ? "far fa-eye" : "far fa-eye-slash"}`}
                                onClick={() => handleShowPassword()}
                            ></i>
                        </div>
                    </div>
                    <div className="form-group text-center">
                        <button className="btn-primary register-btn"
                            tabIndex={3} onClick={() => handleRegister()}>Đăng ký</button>
                    </div>
                    <Link tabIndex={4} className="forgot-password text-end" href={Endpoint.LOGIN}>Bạn đã có tài khoản?</Link>
                </div>
            </div>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </div >

    )
}

export default Register