import React from "react";
import NAV from "../component/NAV";
import CARD from "../component/CARD";
import Footer from "../component/Footer";
function Beranda() {
  return (
    <div className="bg-gradient-to-r from-gray-700 bg-white to-slate-800 text-gray-300">
        <NAV title="Beranda" absolute={true}/>
        {/* PROFILE */}
          <div className="hero min-h-screen">
            <div className="hero-content flex-col md:gap-40 gap-10 lg:flex-row">
              <img src="/./portofolio/foto.JPG" className="rounded-lg animate-verticalMe scrolltes imgMe md:w-2/6 sm:w-8/12 w-7/12 shadow-2xl z-30" />
              <div>
                <div>
                <img className="absolute z-20 md:w-32 sm:w-32 md:-ms-14 md:mt-28 sm:-mt-80 sm:-ms-32 -mt-80 -ms-24 w-20 rotate-12" src="/./portofolio/icon/laravel.svg" alt="icon laravel"/>
                    <img className="absolute animate-blob filter blur-xl opacity-75 z-20 md:w-32 sm:w-32 md:-ms-14 md:mt-28 sm:-mt-80 sm:-ms-32 -mt-80 -ms-24 w-20 rotate-12" src="/./portofolio/icon/laravel.svg" alt="icon laravel"/>
                    <img className="absolute z-20 md:w-20 sm:w-20 md:-mt-24 md:ms-10 sm:-mt-10 sm:-ms-32 -mt-10 -ms-20 w-16 -rotate-6" src="/./portofolio/icon/php.svg" alt="icon php"/>
                    <img className="absolute animate-blob filter blur-xl opacity-75 z-20 md:w-20 sm:w-20 md:-mt-24 md:ms-10 sm:-mt-10 sm:-ms-32 -mt-10 -ms-20 w-16 -rotate-6" src="/./portofolio/icon/php.svg" alt="icon php"/>
                    <img className="absolute z-20 md:w-40 sm:w-40 md:-mt-24 md:ms-80 sm:-mt-80 sm:ms-72 -mt-72 ms-48 w-16 rotate-12" src="/./portofolio/icon/tailwind-css.svg" alt="icon tailwind"/>
                    <img className="absolute animate-blob filter blur-xl opacity-75 z-20 md:w-40 sm:w-40 md:-mt-24 md:ms-80 sm:-mt-80 sm:ms-72 -mt-72 ms-48 w-16 rotate-12" src="/./portofolio/icon/tailwind-css.svg" alt="icon tailwind"/>
                    <img className="absolute z-20 w-20 md:mt-28 md:ms-56 sm:-mt-32 sm:ms-72 sm:-rotate-6 -mt-10 ms-44 -rotate-12" src="/./portofolio/icon/file-type-html.svg" alt="icon html"/>
                    <img className="absolute animate-blob filter blur-xl opacity-75 z-20 w-20 md:mt-28 md:ms-56 sm:-mt-32 sm:ms-72 sm:-rotate-6 -mt-10 ms-44 -rotate-12" src="/./portofolio/icon/file-type-html.svg" alt="icon html"/>
                </div>
                <div>
                  <h1 className="md:text-5xl animate-opacityNameMiddle scrolltes sm:text-4xl text-2xl font-bold">BAYU MAULANA</h1>
                  <p className="md:py-6 sm:py-5 py-2 animate-opacityNameMiddle scrolltes text-center">WEB DEVELOPER</p>
                </div>
              </div>
            </div>
          </div>
        {/* END PROFILE */}

        {/* ABOUT ME */}
          <div className="hero min-h-screen">
              <div className="hero-content flex-col">
                <h1 className="md:text-xl sm:text-lg text-sm font-bold">
                  TENTANG SAYA
                </h1>
                <article className="prose animate-opacityMe scrolltes max-w-none text-gray-300 text-justify md:prose-xl sm:prose-lg prose-md md:space-y-10 md:text-lg sm:space-y-7 space-y-5 sm:text-md text-sm md:px-10 sm:px-7 px-3" >
                  <p>
                    Nama saya adalah Bayu Maulana, seorang lulusan S1 informatika dengan latar belakang pendidikan yang kuat dalam bidang ini. Saya sangat antusias dalam mencari peluang kerja di dunia pengembangan web.
                  </p>
                    
                  <p>
                    Saya memiliki pengalaman dan keterampilan yang solid dalam pengembangan web. Pada sisi back-end, saya sangat terampil dalam menggunakan framework Laravel dan PHP untuk membangun aplikasi web yang efisien dan andal. Di sisi front-end, saya mahir dalam HTML, JavaScript, dan jQuery, yang memungkinkan saya untuk menciptakan antarmuka pengguna yang menarik dan interaktif.
                  </p>
                  
                  <p>
                    Selain itu, saya juga memiliki pengetahuan tentang desain responsif menggunakan Tailwind CSS, yang memungkinkan saya untuk menciptakan situs yang terlihat bagus dan responsif di berbagai perangkat.
                  </p>

                  <p>
                    Saya adalah orang yang rajin dan penuh dedikasi dalam menghadapi tantangan pemrograman. Sayang selalu berusaha untuk mengembangkan diri dan selalu terbuka untuk belajar teknologi terbaru dalam industri ini.
                  </p>
                </article>
              </div>
          </div>
        {/* END ABOUT ME */}

        {/* BAHASA PEMOGRAMAN */}
          <div className="hero min-h-screen">
            <div className="hero-content flex-col md:gap-32 sm:gap-20 gap-10">
              <h1 className="md:text-2xl sm:text-xl text-md font-bold">BAHASA PEMOGRAMAN YANG DIKUASAI</h1>
              <div className="flex w-full md:space-x-60 sm:space-x-20 space-x-10">

                <div className="md:space-y-14 animate-verticalL scrolltes md:text-2xl sm:space-y-7 space-y-10 sm:text-lg text-sm font-bold">
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

                <div className="md:space-y-14 md:text-2xl animate-verticalR scrolltes sm:space-y-7 space-y-10 sm:text-lg text-sm font-bold">
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

        {/* CARD SERTIFIKAT*/}
          <div className="hero min-h-screen">
              <div className="hero-content flex-col md:gap-32 sm:gap-20 gap-10">
                <h1 className="md:text-2xl sm:text-xl text-md font-bold">SERTIFIKAT</h1>
                <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-2 gap-5">
                    <a className="hover:scale-110 hover:animate-pulse transition delay-150 duration-300 ease-in-out md:w-96 sm:w-52 w-28" target="_blank" href={'https://www.dicoding.com/certificates/L4PQ6M7JOPO1'}>
                      <img src={'/./portofolio/sertifikat/WEB.png'} alt={'.............'} />
                    </a>
                    <a className="hover:scale-110 hover:animate-pulse transition delay-150 duration-300 ease-in-out md:w-96 sm:w-52 w-28" target="_blank" href={'https://www.dicoding.com/certificates/2VX318583ZYQ'}>
                      <img src={'/./portofolio/sertifikat/JAVASCRIPT.png'} alt={'.............'} />
                    </a>
                    <a className="hover:scale-110 hover:animate-pulse transition delay-150 duration-300 ease-in-out md:w-96 sm:w-52 w-28" target="_blank" href={'https://www.hackerrank.com/certificates/iframe/11a03b77a25d'}>
                      <img src={'/./portofolio/sertifikat/HackerRank SQL (Basic).png'} alt={'.............'} />
                    </a>
                </div>
              </div>
          </div>
        {/* END CARD SERTIFIKAT*/}

        {/* CARD PORTFOLIO*/}
          <div className="hero min-h-screen shadow-lg" id="portofolio">
            <div className="hero-content flex-col md:gap-40 gap-10 lg:flex-row">
              <CARD href={"/portofolio/SPP"} img={"/./portofolio/Aplikasi_SPPSekolah.jpg"} title={'APLIKASI PEMBAYARAN SPP'}/>
            </div>
          </div>
        {/* END CARD PORTFOLIO*/}
        <Footer linkedin={'/./portofolio/icon/linkedin-original.svg'} github={'/./portofolio/icon/gi.svg'} />
    </div>
  );
}

export default Beranda;
