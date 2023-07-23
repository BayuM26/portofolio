import React from "react"
import NAV from "../../component/NAV"
import Footer from "../../component/Footer";

function SPP() { 
    return (
        <div className="bg-gradient-to-r from-gray-700 to-slate-800">
           <NAV/>

            {/* cover */}
                <div className="hero min-h-screen">
                    <div className="hero-content flex-col lg:flex-row">
                        <img src="./../Aplikasi_SPPSekolah.jpg" className="md:w-6/12 sm:w-8/12 w-11/12 rounded-lg shadow-2xl" alt="gambar" />
                        <div>
                            <h1 className="md:text-5xl sm:text-4xl text-xl font-bold">APLIKASI SISTEM PEMBAYARAN SEKOLAH</h1>
                        </div>
                    </div>
                </div>
            {/* end cover */}

            {/* penjelasan */}
                <div className="hero min-h-screen">
                    <div className="hero-content flex-col lg:flex-row">
                        <div className="flex md:flex-row flex-col w-full md:space-x-52 space-x-0 sm:space-y-7 space-y-7">
                            <div className="flex flex-col md:space-y-20 space-y-10 mt-7">
                                <div className="md:space-y-14 md:text-2xl sm:space-y-7 space-y-10 sm:text-lg text-sm text-left">
                                    <div>
                                        <h1 className="md:text-3xl text-lg font-bold">PENGGUNA</h1>
                                        <ul className="list-disc ms-5">
                                            <li className="md:text-lg text-md">SD IT Nuralima Majalaya</li>
                                        </ul>
                                    </div> 
                                </div>

                                <div className="md:space-y-14 md:text-2xl sm:space-y-7 space-y-10 sm:text-lg text-sm text-left">
                                    <div>
                                        <h1 className="md:text-3xl text-lg font-bold">FITUR</h1>
                                        <ul className="list-disc ms-5">
                                            <li className="md:text-lg text-md">Pemberitahuan tunggakan melalui WhatsApp</li>
                                        </ul>
                                        <ul className="list-disc ms-5">
                                            <li className="md:text-lg text-md">Pembayaran SPP</li>
                                        </ul>
                                        <ul className="list-disc ms-5">
                                            <li className="md:text-lg text-md">Pembayaran tunggakan</li>
                                        </ul>
                                        <ul className="list-disc ms-5">
                                            <li className="md:text-lg text-md">Pembayaran untuk Angkatan selanjutnya</li>
                                        </ul>
                                    </div> 
                                </div>
                            </div>

                            <div className="divider divider-horizontal"></div>

                            <div className="md:space-y-14 md:text-2xl sm:space-y-7 space-y-10 sm:text-lg text-sm">
                                <div className="flex flex-col md:space-y-20 space-y-10">
                                    <div className="md:space-y-14 md:text-2xl sm:space-y-7 space-y-10 sm:text-lg text-sm text-left">
                                        <div>
                                            <h1 className="md:text-3xl text-lg font-bold">BAHASA PEMOGRAMAN</h1>
                                            <ul className="list-disc ms-5 ">
                                                <li className="md:text-lg text-md">Laravel v9</li>
                                            </ul>
                                            <ul className="list-disc ms-5 ">
                                                <li className="md:text-lg text-md">Tailwind css (plugin: flowbit)</li>
                                            </ul>
                                            <ul className="list-disc ms-5 ">
                                                <li className="md:text-lg text-md">nodeJs (WhatsApp Gateway)</li>
                                            </ul>
                                            <ul className="list-disc ms-5 ">
                                                <li className="md:text-lg text-md">javaScript (library : JQuery)</li>
                                            </ul>
                                            <ul className="list-disc ms-5 ">
                                                <li className="md:text-lg text-md">Database (MySql)</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="md:space-y-14 md:text-2xl sm:space-y-7 space-y-10 sm:text-lg text-sm text-left">
                                        <div>
                                            <h1 className="md:text-3xl text-lg font-bold">DEVELOPER</h1>
                                            <ul className="list-disc ms-5 ">
                                                <li className="md:text-lg text-md">Bayu Maulana (Full Stask)</li>
                                            </ul>
                                        </div> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            {/* end penjelasan */}
            
            {/* Fitur Pembayaran SPP */}
                <div className="hero min-h-screen">
                    <div className="hero-content flex-col">
                        <h1 className="text-xl font-bold uppercase">Fitur Pembayaran SPP</h1>
                        <div className="grid md:grid-cols-2 gap-5">
                            <img className="md:w-11/12 sm:w-8/12 sm:block sm:m-auto rounded-lg md:hover:scale-125 hover:scale-150 transition delay-150 duration-300" src="./../spp/pembayaran.jpg" alt="gambar Pembayaran" />
                            <img className="md:w-11/12 sm:w-8/12 sm:block sm:m-auto rounded-lg md:hover:scale-125 hover:scale-150 transition delay-150 duration-300" src="./../spp/pembayaran2.jpg" alt="gambar Pembayaran" />
                        </div>
                    </div>
                </div>
            {/* end Fitur Pembayaran SPP */}

            {/* Fitur Pembayaran untuk Angkatan selanjutnya */}
                <div className="hero min-h-screen">
                    <div className="hero-content flex-col">
                        <h1 className="text-xl font-bold uppercase">Fitur Pembayaran untuk Angkatan selanjutnya</h1>
                        <div className="grid md:grid-cols-2 gap-5">
                            <img className="md:w-11/12 sm:w-8/12 sm:block sm:m-auto rounded-lg md:hover:scale-125 hover:scale-150 transition delay-150 duration-300" src="./../spp/pembayaranL.jpg" alt="gambar Pembayaran lebih" />
                            <img className="md:w-11/12 sm:w-8/12 sm:block sm:m-auto rounded-lg md:hover:scale-125 hover:scale-150 transition delay-150 duration-300" src="./../spp/pembayaranL2.jpg" alt="gambar Pembayaran lebih" />
                        </div>
                    </div>
                </div>
            {/* end Fitur Pembayaran untuk Angkatan selanjutnya */}

            {/* Fitur Pemberitahuan tunggakan melalui WhatsApp */}
                <div className="hero min-h-screen">
                    <div className="hero-content flex-col">
                        <h1 className="text-xl font-bold uppercase">Fitur Pemberitahuan tunggakan melalui WhatsApp</h1>
                        <div className="grid md:grid-cols-2 gap-5">
                            <img className="md:w-11/12 sm:w-8/12 sm:block sm:m-auto rounded-lg md:hover:scale-125 hover:scale-150 transition delay-150 duration-300" src="./../spp/pemberitahuanwa.jpg" alt="gambar pemberitahuan wa" />
                            <img className="md:w-11/12 sm:w-8/12 sm:block sm:m-auto rounded-lg md:hover:scale-125 hover:scale-150 transition delay-150 duration-300" src="./../spp/pemberitahuanwa2.jpg" alt="gambar pemberitahuan wa" />
                        </div>
                    </div>
                </div>
            {/* end Fitur Pemberitahuan tunggakan melalui WhatsApp */}

            {/* Fitur Pembayaran tunggakan */}
                <div className="hero min-h-screen shadow-lg">
                    <div className="hero-content flex-col">
                        <h1 className="text-xl font-bold uppercase">Fitur Pembayaran tunggakan</h1>
                        <div className="grid md:grid-cols-2 gap-5">
                            <img className="md:w-11/12 sm:w-8/12 sm:block sm:m-auto rounded-lg md:hover:scale-125 hover:scale-150 transition delay-150 duration-300" src="./../spp/tunggakan.jpg" alt="gambar pemberitahuan wa" />
                            <img className="md:w-11/12 sm:w-8/12 sm:block sm:m-auto rounded-lg md:hover:scale-125 hover:scale-150 transition delay-150 duration-300" src="./../spp/tunggakan2.jpg" alt="gambar pemberitahuan wa" />
                        </div>
                    </div>
                </div>
            {/* end Fitur Pembayaran tunggakan */}

            <Footer/>
        </div>
    );
 }

 export default SPP