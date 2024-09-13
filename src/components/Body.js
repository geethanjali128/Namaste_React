
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SWIGGY_URL } from "../utils/constants";
import RestaurantCard from './RestaurantCard';
import Shimmer from "./Shimmer";


const Body=()=>{
    
    const [listOfRestaurants,setListOfRestaurants]=useState([])
    const [filteredRestaurants,setFilteredRestaurants]=useState([])
    const[search,setSearch]=useState("")

    // console.log(useState())

    useEffect(()=>{
        fetchData()
    },[])

    const fetchData=async()=>{
       try{
          const data=await fetch(SWIGGY_URL)
        
        const json=await data.json()
        console.log(json)

        setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
       }
       catch(error){
            console.log(error)
         } 
        
    }

    if (!listOfRestaurants || listOfRestaurants.length === 0) return <Shimmer />;


    return (
        <div className="body">
            <div className="filter" >
                <div className="search">
                    <input type="text" placeholder="Enter a Cuisine" value={search} onChange={(e)=>{
                      
                        setSearch(e.target.value)}}/>
                    <button onClick={()=> {
                        const searchRes=listOfRestaurants.filter( res => res.info.name.toLowerCase().includes(search.toLowerCase()))
                       setFilteredRestaurants(searchRes)
                    }}>Search</button>
                </div>
                <div className="top">
             <button onClick={()=>{
                     const topRated=listOfRestaurants.filter( res => res.info.avgRating > 4)
                     setFilteredRestaurants(topRated)
                    }
                  
                     }>
                        Top Rated Restaurants
                        </button>
                </div>
               
            </div>
            
            <div className="res-container">
                {
                    filteredRestaurants.map( restaurant =>(
                  <Link key={restaurant.info.id} to={'/restaurants/'+restaurant.info.id}>    <RestaurantCard   resData={restaurant}/></Link> 
                    ) )
                }
              </div>
        </div>
    )
}

export default Body;