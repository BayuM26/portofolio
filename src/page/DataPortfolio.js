import React, { useEffect, useRef, useState } from "react";
import NAV from "../component/NAV";
import Footer from "../component/Footer";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export default function DataPortfolio() {
    const [nameP,setName] = useState('')
    const [imageP,setImage] = useState('')
    const [validate,setvalidate] = useState('')
    const [dataPortfolio,setPortfolio] = useState('')
    const [url,setUrl] = useState('')
    const valueImage = useRef()
    const BtnLoading = useRef()
    const textBtn = useRef()
    const navigate = useNavigate()
    
    const submiteButton = () => {
        textBtn.current.hidden = true
        BtnLoading.current.className = 'loading loading-ring loading-lg'
        post(nameP,imageP)
    }

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

    const post = async (names,images) =>{
        await axios.post('http://127.0.0.1:8000/api/portofolio'
                    ,{
                        name: names,
                        file: images,
                    }, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        "Authorization": "Bearer "+sessionStorage.getItem('access_token'),
                    }
                }
            )
        .then(function (response) {
            if (response.status === 200) {

                BtnLoading.current.className = 'loading hidden loading-ring loading-lg'
                textBtn.current.hidden = false
                setvalidate('')
                setName('')

                // set null type file
                    valueImage.current.value = '';
                    valueImage.current.type = 'text';
                    valueImage.current.type = 'file';
                // end set null type file

                navigate('/DataPortfolio')

                Toast.fire({
                    icon: 'success',
                    title: 'Data Berhasil Tersimpan',
                    timer: 3000,
                  })
            }
            // console.log(response)
        })
        .catch(function(error){
            BtnLoading.current.className = 'loading hidden loading-ring loading-lg'
            textBtn.current.hidden = false

            setvalidate(error.response.data.data)

            console.log(error)
        })
    }

    const getPortfolio = async () => {
        await axios.get('http://127.0.0.1:8000/api/portofolio')
        .then(function (response) {
            if (response.status === 200) {
                

                setPortfolio(response.data.data.dataPortfolio.data)
                setUrl(response.data.data.url)
            }
            // console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        })

    }

    const btnDelete = (id) => {
        console.log(id);
        Toast.fire({
            icon: 'warning',
            title: 'PERINGATAN',
            text: 'APAKAH ANDA YAKIN INGIN MENGHAPUS DATA INI?',
            showConfirmButton: true,
            showCancelButton: true,
            confirmButtonText: 'Delete',
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            toast: false,
            position:'center',
        })
        .then((result) => {
            if (result.isConfirmed) {
                axios.delete('http://127.0.0.1:8000/api/portofolio?i='+id,{
                    headers:{
                        "Authorization": "Bearer "+sessionStorage.getItem('access_token')
                    },
                })
                .then(function (response) {
                    if (response.status === 200) {
                        
                        Toast.fire({
                            icon: 'success',
                            title: 'Data Berhasil Di Hapus',
                            timer: 3000,
                          })
                    }
                    
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                })
            }
        })

    }

    useEffect(() => {
        setTimeout(() => {
            Toast.fire({
                icon: 'error',
                title: 'SESSION ANDA TELAH HABIS SILAKAN LAKUKAN LOGIN ULANG',
                toast: false,
                showConfirmButton:true,
                position:"center"
            })
            .then((result) => {
                if (result.isConfirmed) {
                    axios.post('http://127.0.0.1:8000/api/logout','',
                        {
                            headers: {
                                "Authorization": "Bearer "+sessionStorage.getItem('access_token'),
                            }
                        }
                    )
                    .then(function (response) {
                        if (response.status === 200) {
                            sessionStorage.clear()
                            navigate('/')
                        }
                    })
                }
            })
        },sessionStorage.getItem('expires_in')*100);

        if (!sessionStorage.getItem('access_token')) {
            navigate('/login')
        }

        getPortfolio()
    }, []);

    return (
        <div className="bg-gradient-to-r space-y-10 from-gray-700 to-slate-800">
            <NAV title={'Input Siswa'}/>
            
            <div className="flex justify-center space-x-8">
                <button className="hover:underline hover:underline-offset-8 w-10 rounded-lg hover:text-gray-200 font-semibold">Form</button>
                <button className="hover:underline hover:underline-offset-8 w-10 rounded-lg hover:text-gray-200 font-semibold">Data</button>
            </div>

            <div className="card max-w-6xl bg-base-200 shadow-xl flex m-auto">
                <div className="card-body space-y-5">
                    <div className="overflow-x-auto rounded-md">
                        <table className="table w-full border-y-8">
                            {/* head */}
                            <thead className="border-b-4">
                                <tr className="text-center">
                                    <th>No</th>
                                    <th>Gambar</th>
                                    <th>Portfolio</th>
                                    <th></th>
                                </tr>
                            </thead>

                            <tbody>
                                {
                                    dataPortfolio?
                                    dataPortfolio.map((value,index) => (
                                        <tr key={index} className="text-center">
                                            <td className="text-xs truncate text-center">{index+1}</td>
                                            <td className="text-xs truncate text-center"> <img src={url+''+value.imagePortofolio} width={90} alt="" /></td>
                                            <td className="text-xs truncate">{value.portofolioName}</td>
                                            <td className="text-xs truncate">
                                                <label onClick={() => btnDelete(value.id)} className="btn btn-secondary md:btn-md btn-sm md:w-16 w-10">
                                                    <img src="./icon/trash.svg" className="md:w-5 w-4" srcSet=""></img>
                                                </label>
                                            </td>
                                        </tr>
                                    ))
                                    :
                                    <tr className="text-center">
                                        <td className="text-xs truncate text-center" colSpan={4}>DATA TIDAK DI TEMUKAN</td>
                                    </tr>
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className="card max-w-xl bg-base-200 shadow-xl flex m-auto">
                <div className="card-body space-y-5">
                    <h2 className="card-title uppercase">input portfolio</h2>
                        <div className="form-control w-full max-w-xl">
                            <label className="label">
                                <span className="label-text uppercase">Nama Portfolio</span>
                            </label>
                            <input value={nameP} name="Namaportfolio" onChange={(Namaportfolio) => setName(Namaportfolio.target.value)} id='namaPortfolio' autoFocus type='text' placeholder='' className="input input-bordered w-full" />
                            <p id="filled_error_help" className="mt-2 text-xs text-red-600 dark:text-red-400">
                                <span className="font-medium">
                                    {validate.name}
                                </span>
                            </p>
                        </div>
                        <div className="form-control w-full max-w-xl">
                            <label className="label">
                                <span className="label-text uppercase">Gambar Portfolio</span>
                            </label>
                            <input ref={valueImage} name="Gambarportfolio" onChange={(Gambarportfolio) => setImage(Gambarportfolio.target.files)} id='gambarPortfolio' type='file' placeholder='' className="file-input file-input-bordered w-full" accept="image/*" />
                            <p id="filled_error_help" className="mt-2 text-xs text-red-600 dark:text-red-400">
                                <span className="font-medium">
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