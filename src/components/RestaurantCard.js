import React from "react";
import { CDN_URL } from "../utils/constants";



const RestaurantCard=({resData})=>{
    const {name,cuisines,costForTwo,cloudinaryImageId,sla,avgRating}=resData.info
    return(
        <div className="res-card">
            <div className="res-logo">
             <img src={CDN_URL+cloudinaryImageId}/>
            </div>
           <div className="res-details">
            <h3>{name}</h3>
            <h4 id="cuisine">{cuisines.join(',')}</h4>
            <h4>{costForTwo}</h4>
            <h4>{sla.deliveryTime} min</h4>
            <h4>{avgRating} stars</h4>
           </div>
           
        </div>
    )
}

export default RestaurantCard;