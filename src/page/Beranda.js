import React from "react";
import NAV from "../component/NAV";
import CARD from "../component/CARD";
import Footer from "../component/Footer";
function Beranda() {
  return (
    <div className="bg-gradient-to-r from-gray-700 to-slate-800">
        <NAV title="Beranda"/>
        {/* PROFILE */}
          <div className="hero min-h-screen">
            <div className="hero-content flex-col md:gap-40 gap-10 lg:flex-row">
              <img src="/./portofolio/foto.JPG" className="rounded-lg md:w-2/6 sm:w-8/12 w-7/12 shadow-2xl" />
              <div>
                <div>
                  <img className="absolute z-20 md:w-32 sm:w-32 md:-ms-14 md:mt-28 sm:-mt-80 sm:-ms-32 -mt-80 -ms-24 w-20 rotate-12" src="/./portofolio/icon/laravel.svg" alt="icon laravel"/>
                  <img className="absolute z-20 md:w-20 sm:w-20 md:-mt-24 md:ms-10 sm:-mt-10 sm:-ms-32 -mt-10 -ms-20 w-16 -rotate-6" src="/./portofolio/icon/php.svg" alt="icon php"/>
                  <img className="absolute z-20 md:w-40 sm:w-40 md:-mt-24 md:ms-80 sm:-mt-80 sm:ms-72 -mt-72 ms-52 w-24" src="/./portofolio/icon/tailwind-css.svg" alt="icon tailwind"/>
                  <img className="absolute z-20 w-20 md:mt-28 md:ms-56 sm:-mt-32 sm:ms-72 sm:-rotate-6 -mt-10 ms-52 -rotate-12" src="/./portofolio/icon/file-type-html.svg" alt="icon html"/>
                </div>
                <div>
                  <h1 className="md:text-5xl sm:text-4xl text-2xl font-bold">BAYU MAULANA</h1>
                  <p className="md:py-6 sm:py-5 py-2 text-center">WEB DEVELOPER</p>
                </div>
              </div>
            </div>
          </div>
        {/* END PROFILE */}

        {/* BAHASA PEMOGRAMAN */}
          <div className="hero min-h-screen">
            <div className="hero-content flex-col md:gap-40 gap-10 lg:flex-row">
              <div className="flex w-full md:space-x-60 sm:space-x-20 space-x-10">
                <div className="md:space-y-14 md:text-2xl sm:space-y-7 space-y-10 sm:text-lg text-sm font-bold">
                  <h1 className="flex space-x-3">
                    <img src="/./portofolio/icon/laravel.svg" className="md:w-8 sm:w-6 w-4" alt="laravel-icon" />
                    <div>
                      LARAVEL
                    </div>
                  </h1>
                  <h1 className="flex space-x-3">
                    <img src="/./portofolio/icon/php.svg"  className="md:w-8 sm:w-6 w-4" alt="php-icon" />
                    <div>
                      PHP
                    </div>
                  </h1>
                  <h1 className="flex space-x-3">
                    <img src="/./portofolio/icon/file-type-html.svg"  className="md:w-8 sm:w-6 w-5" alt="html-icon" />
                    <div>
                      HTML
                    </div>
                  </h1>
                  <h1 className="flex space-x-3">
                    <img src="/./portofolio/icon/javascript-js.svg"  className="md:w-8 sm:w-6 w-4" alt="js-icon" />
                    <div>
                      JavaScript
                    </div>
                  </h1>
                </div>

                <div className="divider divider-horizontal"></div>

                <div className="md:space-y-14 md:text-2xl sm:space-y-7 space-y-10 sm:text-lg text-sm font-bold">
                  <h1 className="flex space-x-3">
                    <img src="/./portofolio/icon/file-type-css.svg"  className="md:w-8 sm:w-6 w-5" alt="css-icon" />
                    <div>
                      CSS
                    </div>
                  </h1>
                  <h1 className="flex space-x-3">
                    <img src="/./portofolio/icon/tailwind-css.svg"  className="md:w-8 sm:w-6 w-5" alt="tailwind-icon" />
                    <div>
                      TailwindCSS
                    </div>
                  </h1>
                  <h1 className="flex space-x-3">
                    <img src="/./portofolio/icon/jquery-original-wordmark.svg"  className="md:w-8 sm:w-6 w-5" alt="jquery-icon" />
                    <div>
                      JQuery
                    </div>
                  </h1>
                  <h1 className="flex space-x-3">
                    <img src="/./portofolio/icon/mysql-original-wordmark.svg"  className="md:w-8 sm:w-6 w-5" alt="mysql" />
                    <div>
                      MySQL
                    </div>
                  </h1>
                </div>

              </div>
            </div>
          </div>
        {/* END BAHASA PEMOGRAMAN */}

        {/* CARD */}
          <div className="hero min-h-screen shadow-lg" id="portofolio">
            <div className="hero-content flex-col md:gap-40 gap-10 lg:flex-row">
              <CARD href={"/portofolio/SPP"} img={"/./portofolio/Aplikasi_SPPSekolah.jpg"} title={'APLIKASI PEMBAYARAN SPP'}/>
            </div>
          </div>
        {/* END CARD */}
        <Footer linkedin={'/./portofolio/icon/linkedin-original.svg'} github={'/./portofolio/icon/gi.svg'} />
    </div>
  );
}

export default Beranda;
