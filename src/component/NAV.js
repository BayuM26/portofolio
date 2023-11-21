import axios from "axios";
import { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function NAV({title,absolute=false}){
    const navigate = useNavigate()

    useEffect(() => {
        document.title = title;
    }, []);
    
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

    const LogoutBtn = () => {
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
    }

    // console.log(absolute);
    return (
        <div className="navbar fixed shadow-lg z-40 bg-gradient-to-r from-gray-700 to-slate-800">
            <div className="navbar-start">
                <a className="btn btn-ghost normal-case text-xl">
                    <img src="/./portofolio/foto.JPG" className={ absolute? "rounded-full w-7 scrolltes animate-horizontalMe" : "rounded-full w-7"} alt="" />
                    <span className={ absolute? 'animate-opacityNameTop scrolltes' : ''}>
                        BAYU MAULANA
                        <img className="absolute z-20 w-4 rotate-12" src="/./portofolio/icon/laravel.svg" alt="icon laravel"/>
                        <img className="absolute z-20 w-4 ms-32 top-2 -rotate-6" src="/./portofolio/icon/php.svg" alt="icon php"/>
                        <img className="absolute z-20 w-5 ms-40 rotate-12" src="/./portofolio/icon/tailwind-css.svg" alt="icon tailwind"/>
                        <img className="absolute z-20 w-5  top-2 ms-7 -rotate-12" src="/./portofolio/icon/file-type-html.svg" alt="icon html"/>
                    </span>
                </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                    {
                        !sessionStorage.getItem('access_token')?
                            <ul className="menu menu-horizontal px-1">
                                <li><NavLink to="/" className={({isActive}) => (isActive ? "active btn btn-ghost normal-case md:text-md sm:text-sm text-xs" : 'btn btn-ghost normal-case md:text-md sm:text-sm text-xs')}>HOME</NavLink></li>
                                <li><NavLink to="/Portfolio" className={({isActive}) => (isActive ? "active btn btn-ghost normal-case md:text-md sm:text-sm text-xs" : 'btn btn-ghost normal-case md:text-md sm:text-sm text-xs')}>Portfolio</NavLink></li>
                                <li><NavLink to="/contact" className={({isActive}) => (isActive ? "active btn btn-ghost normal-case md:text-md sm:text-sm text-xs" : 'btn btn-ghost normal-case md:text-md sm:text-sm text-xs')}>CONTACT</NavLink></li>
                            </ul>
                        :
                            <ul className="menu menu-horizontal px-1">
                                <li><NavLink to="/" className={({isActive}) => (isActive ? "active btn btn-ghost normal-case md:text-md sm:text-sm text-xs" : 'btn btn-ghost normal-case md:text-md sm:text-sm text-xs')}>HOME</NavLink></li>
                                <li><NavLink to="/DataPortfolio" className={({isActive}) => (isActive ? "active btn btn-ghost normal-case md:text-md sm:text-sm text-xs" : 'btn btn-ghost normal-case md:text-md sm:text-sm text-xs')}>Portfolio</NavLink></li>
                                <li><NavLink to="/DataSertifikat" className={({isActive}) => (isActive ? "active btn btn-ghost normal-case md:text-md sm:text-sm text-xs" : 'btn btn-ghost normal-case md:text-md sm:text-sm text-xs')}>Sertifikat</NavLink></li>
                                <li><button onClick={() => LogoutBtn()} className='btn btn-ghost normal-case md:text-md sm:text-sm text-xs'>Logout</button></li>
                            </ul>
                    }
            </div>
            <div className="navbar-end">
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    {
                        !sessionStorage.getItem('access_token')?
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-gray-800 rounded-box w-52">
                                <li><NavLink to="/" className={({isActive}) => (isActive ? "active btn btn-ghost normal-case md:text-md sm:text-sm text-xs content-center" : 'btn btn-ghost normal-case md:text-md sm:text-sm text-xs content-center')}>HOME</NavLink></li>
                                <li><NavLink to="/Portfolio" className={({isActive}) => (isActive ? "active btn btn-ghost normal-case md:text-md sm:text-sm text-xs content-center" : 'btn btn-ghost normal-case md:text-md sm:text-sm text-xs content-center')}>Portfolio</NavLink></li>
                                <li><NavLink to="/contact" className={({isActive}) => (isActive ? "active btn btn-ghost normal-case md:text-md sm:text-sm text-xs content-center" : 'btn btn-ghost normal-case md:text-md sm:text-sm text-xs content-center')}>CONTACT</NavLink></li>
                            </ul>
                        :
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-gray-800 rounded-box w-52">
                                <li><NavLink to="/" className={({isActive}) => (isActive ? "active btn btn-ghost normal-case md:text-md sm:text-sm text-xs content-center" : 'btn btn-ghost normal-case md:text-md sm:text-sm text-xs content-center')}>HOME</NavLink></li>
                                <li><NavLink to="/DataPortfolio" className={({isActive}) => (isActive ? "active btn btn-ghost normal-case md:text-md sm:text-sm text-xs content-center" : 'btn btn-ghost normal-case md:text-md sm:text-sm text-xs content-center')}>Portfolio</NavLink></li>
                                <li><NavLink to="/DataSertifikat" className={({isActive}) => (isActive ? "active btn btn-ghost normal-case md:text-md sm:text-sm text-xs content-center" : 'btn btn-ghost normal-case md:text-md sm:text-sm text-xs content-center')}>Sertifikat</NavLink></li>
                                <li><button onClick={() => LogoutBtn()} className='btn btn-ghost normal-case md:text-md sm:text-sm text-xs content-center'>Logout</button></li>
                            </ul>
                    }
                </div>
            </div>
        </div>
    )
}