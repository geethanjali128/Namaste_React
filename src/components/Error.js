
import React from "react";
import { useRouteError } from "react-router-dom";

const Error=()=>{

    const err=useRouteError()

    console.log(err)
    return(
        <div>
            <h3>oops!</h3>
            <p>Something Went Wrong</p>
            <h4>{err.status}:{err.statusText}</h4>
        </div>
    )
}

export default Error;