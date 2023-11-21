import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from 'react-router-dom';

function HalamanLogin(){
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    const [validate,setvalidate] = useState('')
    const BtnLoading = useRef()
    const textBtn = useRef()
    
    const btnLogin = () => {
        textBtn.current.hidden = true
        BtnLoading.current.className = 'loading loading-ring loading-lg'
        post(username,password)
    }
    
    // alertSetting
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
        })
    // end alertSetting
    const navigasi = useNavigate()

    const post = async (usernames,passwords) => {
        await axios.post('http://127.0.0.1:8000/api/login',
                {
                    username:usernames,
                    password:passwords,
                },
            )
        .then(function (response) {
            if (response.status === 200) {
                BtnLoading.current.className = 'loading hidden loading-ring loading-lg'
                textBtn.current.hidden = false
    
                setUsername('')
                setPassword('')
                setvalidate('')

                sessionStorage.setItem('access_token',response.data.access_token);
                sessionStorage.setItem('expires_in',response.data.expires_in);

                if (sessionStorage.getItem('access_token')) {
                    navigasi('/')
                }
            }

            console.log(response)
        })
        .catch(function (error){
            BtnLoading.current.className = 'loading hidden loading-ring loading-lg'
            textBtn.current.hidden = false

            if (error.response.data.code === 422) {
                setvalidate(error.response.data.data)
            }

            if (error.response.data.error === "Unauthorized") {
                Toast.fire({
                    icon: 'error',
                    title: 'USERNAME ATAU PASSWORD SALAH'
                  })
            }

            console.log(error)
        })
    }

    useEffect(() => {
        if (sessionStorage.getItem('access_token')) {
            navigasi('/')
        }
    }, []);

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>

                <div className="rounded-full mix-blend-multiply delay-300 bg-green-400 w-72 h-72 z-0 absolute filter blur-xl animate-blob opacity-75 md:left-16 sm:left-20"></div>
                <div className="bg-red-500 rounded-full mix-blend-multiply delay-500 w-72 h-72 z-0 absolute filter blur-xl animate-blob opacity-75 md:bottom-36 sm:bottom-20 md:left-40"></div>
                <div className="rounded-full mix-blend-multiply delay-1000 bg-sky-600 w-72 h-72 z-0 absolute filter blur-xl animate-blob opacity-75 md:left-72 sm:right-20 right-20"></div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl z-10 bg-base-100 opacity-80">
                    <div className="card-body">
                        <div className="form-control opacity-100">
                            <label className="label">
                                <span className="label-text">Username</span>
                            </label>
                            <input value={username} onChange={(inputUsertname) => setUsername(inputUsertname.target.value)} type="text" placeholder="Username" className="input input-bordered  opacity-100" />
                            <p id="filled_error_help" className="mt-2 text-xs text-red-600 dark:text-red-400">
                                <span className="font-medium">
                                    {validate.username}
                                </span>
                            </p>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input value={password} onChange={(inputPassword) => setPassword(inputPassword.target.value)} type="password" placeholder="password" className="input input-bordered  opacity-100" />
                            <p id="filled_error_help" className="mt-2 text-xs text-red-600 dark:text-red-400">
                                <span className="font-medium">
                                    {validate.password}
                                </span>
                            </p>
                        </div>
                        <div className="form-control mt-6">
                            <button onClick={() => btnLogin()} className="btn btn-primary">
                                <span ref={textBtn}>Login</span> 
                                <span ref={BtnLoading} className='loading hidden loading-ring loading-lg'></span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HalamanLogin