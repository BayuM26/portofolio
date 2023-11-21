import React from "react";

function Footer({linkedin,github}) { 
    return(
        <>
            <div className="w-full h-1 bg-gray-900 animate-opacityFooter filter blur-md scrolltes"></div>
            <footer className="footer bg-gradient-to-r from-gray-700 to-slate-800 items-center p-4 bg-neutral text-gray-300">
                <div className="items-center grid-flow-col">
                    <p>Copyright © 2023 - All right reserved</p>
                </div>
                <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                    <a href="https://www.linkedin.com/in/bayumaulana26/" target="_blank">
                        <img className="w-7" src={linkedin} alt="icon github" />
                    </a>
                    <a href="https://github.com/BayuM26?tab=repositories" target="_blank">
                        <img className="w-7" src={github} alt="icon linked" />
                    </a>
                </div>
            </footer>
        </>
    )
 }

 export default Footer