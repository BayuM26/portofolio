import React from "react"
import Skeleton, { SkeletonTheme } from "react-loading-skeleton"

function Loader() { 
    return(
        <SkeletonTheme baseColor="#202020" highlightColor="#444">
            <h1 className="md:w-96 sm:w-72 w-64 rounded-lg">
                <Skeleton count={1} className="md:h-72 sm:h-52 h-52"/>
            </h1>
        </SkeletonTheme>
    )
}

export default Loader