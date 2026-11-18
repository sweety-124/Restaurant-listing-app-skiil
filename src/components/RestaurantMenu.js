import { useEffect,useState } from "react";
import {useParams} from "react-router";
import ShimmerCard from "./Shimmer";
import { MENU_API_URL } from "../utils/constants";

const RestaurntMenu=()=>{
    const [resMenu,setResMenu]=useState(null);
    const [error,setError]=useState(null);
    const {resId}=useParams();
    useEffect(()=>{
        const loadMenu=async()=>{
            try {
                if(!resId) throw new Error("Restaurant ID is missing from the route");
                await fetchMenu(resId);
            } catch(error) {
                console.warn("Unable to load restaurant menu:",error);
                setError("Could not load the restaurant menu. Check the restaurant URL and your connection.");
            }
        };
        loadMenu();
    },[resId]);

     const fetchMenu=async(id)=>{
        const data= await fetch(MENU_API_URL + id);
        if(!data.ok) throw new Error(`Menu request failed (${data.status})`);
        const json= await data.json();
        setResMenu(json);
    }
    // Optional chaining can still return undefined, which cannot be destructured.
    const {name,menu,cloudinaryImageId,costForTwo}=
        resMenu?.data?.cards?.[2]?.card?.card?.info ?? {};

    const itemCards =
        resMenu?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card?.card?.itemCards ?? [];
    return(
        error ? <p role="alert">{error}</p> :
        resMenu===null ? <ShimmerCard/> :
        <div>
            <h1>{name}</h1>
            <h1>Menu</h1>
            {cloudinaryImageId && <img src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${cloudinaryImageId}`} alt="restaurant"/>}
            <h3>Cost for two: {costForTwo}</h3>
            <ul>
                {itemCards?.map((item)=>(
                    <li key={item.card.info.id}>{item.card.info.name} - ₹ {item.card.info.price/100}</li>
                ))}
            </ul>
        </div>
    )
}

export default RestaurntMenu;   
