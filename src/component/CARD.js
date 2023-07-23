import { Link } from "react-router-dom";

export default function CARD({img,title,href}){
    return (
        <Link to={href} className="hover:scale-110 hover:animate-pulse transition delay-150 duration-300 ease-in-out">
            <div className="card md:w-96 sm:w-72 w-56 bg-base-100 shadow-xl">
                <figure>
                    <img src={img} alt="logo" />
                </figure>

                <div className="card-body">
                    <h2 className="md:card-title text-xs">{title}</h2>
                </div>
            </div>
        </Link>
    )
}