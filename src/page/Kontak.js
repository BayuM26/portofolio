import React from "react";
import NAV from "../component/NAV";
import Footer from "../component/Footer";

function Kontak() { 
    return(
        <div className="bg-gradient-to-r from-gray-700 to-slate-800">
            <NAV/>

            <div className="hero min-h-screen shadow-lg" id="portofolio">
                <div className="hero-content flex-col space-y-10">
                    <h1 className="text-2xl font-bold">
                        CONTACT ME
                    </h1>

                    <div className="space-y-4">
                        <div className="flex space-x-3">
                            <img className="w-8" src="./icon/whatsapp.svg" alt="logowa" />
                            <p className="mt-1">
                                WhatsApp : +62 898-757-0848
                            </p>
                        </div>
                        <div className="flex space-x-3">
                            <img className="w-8" src="./icon/gmail.svg" alt="logoemail" />
                            <p>
                                Email : bayu.maulana669@gmail.com
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <Footer/>
        </div>
    );
 }

 export default Kontak;