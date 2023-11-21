import axios from "axios";
import React, { Suspense, useEffect, useState } from "react"
import NAV from "../component/NAV";
import Footer from "../component/Footer";
import Loader from "../utils/Loader";
import CARD from "../component/CARD";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

function Portfolio() {
    const [DataPortfolio,setPortfolio] = useState([]);
    const [url,setUrl] = useState('');

    const portfolio = async () => {
        await axios.get('http://127.0.0.1:8000/api/portofolio')
        .then(function (response) {
            if (response.status === 200) {
                setPortfolio(response.data.data.dataPortfolio.data)
                setUrl(response.data.data.url)
            }
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        })
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

    const navigate = useNavigate()
    
    useEffect(() => {
        if (sessionStorage.getItem('access_token')) {
            setTimeout(() => {
                Toast.fire({
                    icon: 'error',
                    title: 'SESSION ANDA TELAH HABIS SILAKAN LAKUKAN LOGIN ULANG',
                    toast: false,
                })
                .then((result) => {
                    navigate('/login');
                    sessionStorage.clear();
                })
            },(sessionStorage.getItem('expires_in')*60)*60);
        }

        portfolio()
    }, []);

    return(
        <div className="bg-gradient-to-r from-gray-700 to-slate-800 text-gray-300">
            <NAV title="Portfolio"/>
            <div className="hero min-h-screen shadow-md" id="portofolio">
                <div className="hero-content flex-col md:gap-32 sm:gap-20 gap-10">
                    <h1 className="md:text-2xl sm:text-xl text-md font-bold">PORTOFOLIO</h1>
                    <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
                        {
                            DataPortfolio.map((value,index) => (
                                <Suspense key={index} fallback={<Loader />}>
                                    <CARD href={"/SPP"} img={url+''+value.imagePortofolio} title={value.portofolioName}/>
                                </Suspense>
                            ))
                        }
                    </div>
                </div>
            </div>
            <Footer linkedin={'/./portofolio/icon/linkedin-original.svg'} github={'/./portofolio/icon/gi.svg'}/>
        </div>
    )
}

export default Portfolio