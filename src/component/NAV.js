import { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

export default function NAV({title}){
    useEffect(() => {
        document.title = title;
    }, []);
    return (
        <div className="navbar shadow-lg z-40 bg-gradient-to-r from-gray-700 to-slate-800">
            <div className="navbar-start">
                <a className="btn btn-ghost normal-case text-xl">BAYU MAULANA</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><NavLink to="/" className={({isActive}) => (isActive ? "active btn btn-ghost normal-case md:text-md sm:text-sm text-xs" : 'btn btn-ghost normal-case md:text-md sm:text-sm text-xs')}>HOME</NavLink></li>
                    <li><a href="#portofolio" className="btn btn-ghost normal-case md:text-md sm:text-sm text-xs">PORTOFOLIO</a></li>
                    <li><NavLink to="/contact" className={({isActive}) => (isActive ? "active btn btn-ghost normal-case md:text-md sm:text-sm text-xs" : 'btn btn-ghost normal-case md:text-md sm:text-sm text-xs')}>CONTACT</NavLink></li>
                </ul>
            </div>
            <div className="navbar-end">
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><NavLink to="/" className={({isActive}) => (isActive ? "active btn btn-ghost normal-case md:text-md sm:text-sm text-xs" : 'btn btn-ghost normal-case md:text-md sm:text-sm text-xs')}>HOME</NavLink></li>
                        <li><a href="#portofolio" className="btn btn-ghost normal-case md:text-md sm:text-sm text-xs">PORTOFOLIO</a></li>
                        <li><NavLink to="/contact" className={({isActive}) => (isActive ? "active btn btn-ghost normal-case md:text-md sm:text-sm text-xs" : 'btn btn-ghost normal-case md:text-md sm:text-sm text-xs')}>CONTACT</NavLink></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}