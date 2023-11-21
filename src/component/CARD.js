import { Link } from "react-router-dom";

const CARD = ({img,title,href}) => {
    return (
        <Link to={href} className="hover:scale-110 hover:animate-pulse transition delay-150 duration-300 ease-in-out">
            <div className="card md:w-96 sm:w-72 w-64 shadow-xl bg-gray-800 md:h-72 sm:h-52 h-52">
                <figure>
                    <img src={img} alt="logo"/>
                </figure>

                <div className="card-body">
                    <h2 className="md:card-title text-xs">{title}</h2>
                </div>
            </div>
        </Link>
    )
}

export default CARD