import React from "react";

function Footer() { 
    return(
        <footer className="footer items-center p-4 bg-neutral text-neutral-content">
            <div className="items-center grid-flow-col">
                <p>Copyright © 2023 - All right reserved</p>
            </div>
            <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                <a href="https://www.linkedin.com/in/bayumaulana26/" target="_blank">
                    <img className="w-7" src="./../icon/linkedin-original.svg" alt="icon github" />
                </a>
                <a href="https://github.com/BayuM26?tab=repositories" target="_blank">
                    <img className="w-7" src="./../icon/gi.svg" alt="icon linked" />
                </a>
            </div>
        </footer>
    )
 }

 export default Footer