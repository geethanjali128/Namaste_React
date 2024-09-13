import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { MENU_URL } from '../utils/constants'
import Shimmer from './Shimmer'

const RestaurantMenu = () => {

    const [resInfo,setResInfo]=useState(null)

 const{resId}=useParams()
      

    useEffect(()=>{
        fetchMenu()
    },[])

    const fetchMenu=async()=>{
        try{
             const data=await fetch(MENU_URL+resId+"&catalog_qa=undefined&submitAction=ENTER")

        const jsonData=await data.json()

        console.log(jsonData)
        setResInfo(jsonData?.data)
        } catch(error){
            console.log(error)
        }
       
    }

  if(resInfo===null){
    return <Shimmer/>
  } 

   const { name, avgRating, costForTwoMessage, cuisines } = resInfo?.cards?.[2]?.card?.card?.info || {};
const { itemCards } = resInfo?.cards?.[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[5]?.card?.card || {};
//   console.log(resInfo?.cards?.[5]);
// console.log(resInfo?.cards?.[5]?.groupedCard);
// console.log(resInfo?.cards?.[5]?.groupedCard?.cardGroupMap?.REGULAR);
// console.log(resInfo?.cards?.[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[5]?.card?.card);

// console.log(itemCards)



  return (
    <div>
      <div>
        <h3>{name}</h3>
      <h4>{cuisines.join(",")}</h4>
      <h5>{avgRating}</h5>
      <h6>{costForTwoMessage}</h6>
      </div>
      <div>
      <h2>Menu</h2>
     <ul>
      {
       itemCards?(
        itemCards.map( item=>(
         <li key={item.card.info.id}>{item.card.info.name}</li>
         ))):(
        <h2>Loading...</h2>
        )
      }
     </ul>
      </div>
      
    </div>
  )
}

export default RestaurantMenu

