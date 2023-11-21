import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import NAV from "../component/NAV";
import Footer from "../component/Footer";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const DataSertifikat = () => {
    const [link,setLink] = useState('');
    const [image,setImage] = useState('');
    const [name,setName] = useState('');
    const [validate,setValidate] = useState('');
    const valueImage = useRef();
    const BtnLoading = useRef();
    const textBtn = useRef();

    // alertSetting
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
        })
    // end alertSetting

    const submiteButton = () => {
        textBtn.current.hidden = true
        BtnLoading.current.className = 'loading loading-ring loading-lg'
        post(link,image,name); 
    }
    
    const post = async (link,image,name) =>{
        axios.post('http://127.0.0.1:8000/api/sertifikat',
            {
                link:link,
                name:name,
                file:image,
            }, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }
        ).then(res => {
            if (res.status == 200) {
                BtnLoading.current.className = 'loading hidden loading-ring loading-lg'
                textBtn.current.hidden = false

                setValidate('')
                setLink('')
                setName('')

                // set null type file
                    valueImage.current.value = '';
                    valueImage.current.type = 'text';
                    valueImage.current.type = 'file';
                // end set null type file

                Toast.fire({
                    icon: 'success',
                    title: 'Signed in successfully',
                    timer: 3000,
                  })
            }
            console.log(res.data.data)
        }).catch(function (error){
            BtnLoading.current.className = 'loading hidden loading-ring loading-lg'
            textBtn.current.hidden = false
            
            setValidate(error.response.data.data)

            console.log(error.response.data.data)
        })
    }

    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            Toast.fire({
                icon: 'error',
                title: 'SESSION ANDA TELAH HABIS SILAKAN LAKUKAN LOGIN ULANG',
                toast: false,
                showConfirmButton: true,
                position:"center"
            })
            .then((result) => {

                if (result.isConfirmed) {
                    navigate('/login');
                    sessionStorage.clear();
                }
            })
        },sessionStorage.getItem('expires_in')*100);

        if (!sessionStorage.getItem('access_token')) {
            navigate('/login')
        }
    }, []);

    return (
        <div className="bg-gradient-to-r space-y-10 from-gray-700 to-slate-800">
            <NAV title={'Input Siswa'}/>
            <div className="card max-w-xl bg-base-200 shadow-xl flex m-auto">
                <div className="card-body space-y-5">
                    <h2 className="card-title uppercase">input Sertifikat</h2>
                        <div className="form-control w-full max-w-xl">
                            <label className="label">
                                <span className="label-text uppercase">Link Sertifikat</span>
                            </label>
                            <input name="linkSertifikat" value={link} onChange={(linkSertifikat) => setLink(linkSertifikat.target.value)} id='linkSertifikat' autoFocus type='url' placeholder='Link Sertifikat' className="input input-bordered w-full" />
                            <p id="filled_error_help" class="mt-2 text-xs text-red-600 dark:text-red-400">
                                <span class="font-medium">
                                    {validate.link}
                                </span>
                            </p>
                        </div>
                        <div className="form-control w-full max-w-xl">
                            <label className="label">
                                <span className="label-text uppercase">Nama Sertifikat</span>
                            </label>
                            <input name="nameSertifikat" value={name} onChange={(nameSertifikat) => setName(nameSertifikat.target.value)} id='nameSertifikat' type='text' placeholder='Nama Sertifikat' className="input input-bordered w-full" />
                            <p id="filled_error_help" class="mt-2 text-xs text-red-600 dark:text-red-400">
                                <span class="font-medium">
                                    {validate.name}
                                </span>
                            </p>
                        </div>
                        <div className="form-control w-full max-w-xl">
                            <label className="label">
                                <span className="label-text uppercase">Gambar Sertifikat</span>
                            </label>
                            <input ref={valueImage} name="GambarSertifikat" onChange={(GambarSertifikat) => setImage(GambarSertifikat.target.files)} id='gambarSertifikat' type='file' placeholder='' className="file-input file-input-bordered w-full" accept="image/*" />
                            <p id="filled_error_help" class="mt-2 text-xs text-red-600 dark:text-red-400">
                                <span class="font-medium">
                                    {validate.file}
                                </span>
                            </p>
                        </div>
                        
                        <div className="card-actions">
                            <button onClick={() => submiteButton()} className="btn disabled btn-primary w-full"><span ref={textBtn}>Input</span> <span ref={BtnLoading} className='loading hidden loading-ring loading-lg'></span> </button>
                        </div>
                </div>
            </div>
            <Footer linkedin={'/./portofolio/icon/linkedin-original.svg'} github={'/./portofolio/icon/gi.svg'} />
        </div>
    )
}

export default DataSertifikat