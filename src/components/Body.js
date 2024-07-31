
import React, { useState } from "react";
import resList from "../utils/mockData";
import RestaurantCard from './RestaurantCard';


const Body=()=>{
    
    const [listOfRestaurants,setListOfRestaurants]=useState(resList)

    return (
        <div className="body">
            <div className="filter" >
                <button onClick={()=>{
                        setListOfRestaurants( listOfRestaurants.filter( res => res.info.avgRating > 4.2))
                    }
                  
                     }>
                        Top Rated Restaurants
                        </button>
            </div>
            <div className="res-container">
                {
                    listOfRestaurants.map( restaurant =>(
                        <RestaurantCard  key={restaurant.id}  resData={restaurant}/>
                    ) )
                }
              </div>
        </div>
    )
}

export default Body;