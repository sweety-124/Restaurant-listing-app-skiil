import RestaurantCard from "./RestaurantCard";
import mockData from "../utils/mockData";
import { useState,useEffect} from "react";


const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState(mockData);
  const [restaurants, setRestaurants] = useState(mockData);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  // const fetchData = async () => {
  //   const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&page_type=DESKTOP_WEB_LISTING");
  //   const json = await data.json();
  //   setRestaurants(json?.data?.cards[1]?.card.card?.gridElements?.infoWithStyle?.restaurants);
  //   console.log(json);
  // }
const fetchData = async () => {
  try {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&page_type=DESKTOP_WEB_LISTING"
    );

    if (!data.ok) {
      throw new Error("Failed to fetch restaurant data");
    }

    const json = await data.json();

    console.log(json);

    const restaurantData =
      json?.data?.cards
        ?.find((card) =>
          card?.card?.card?.gridElements?.infoWithStyle?.restaurants
        )
        ?.card?.card?.gridElements?.infoWithStyle?.restaurants;

    if (restaurantData) {
      setAllRestaurants(restaurantData);
      setFilteredRestaurants(restaurantData);
      setRestaurants(restaurantData);
    }
  } catch (error) {
    console.error("Error fetching restaurants:", error);
  }

};
  return (
    <div className="body">
      <div className="filter">
           <div className="search">
        <input type="text" className="search-input" onChange={(e) => setSearchText(e.target.value)} placeholder="Search for restaurants..." />
        <button onClick={()=>{
          const query = searchText.trim().toLowerCase();
          const filteredRestaurants = allRestaurants.filter((res) =>
            (res.info?.name ?? res.name ?? "").toLowerCase().includes(query)
          );
          setFilteredRestaurants(filteredRestaurants);
        }}>Search</button>
      </div>
       <button
  onClick={() => {
    setRestaurants(
      allRestaurants.filter((r) => (r.info?.avgRating ?? r.rating ?? 0) > 4.5)
    );
  }}
>
  Top Rated Restaurants
</button>
      </div>  
      <div>
       
      </div>
      <div className="restaurant_container">
        {filteredRestaurants.length === 0 ? <p>No restaurants found.</p> :
          filteredRestaurants?.map((restaurant) => {
            if (!restaurant) return null;

            // API results are wrapped in `info`; the local mock data is not.
            const details = restaurant.info ?? restaurant;
            return (
              <RestaurantCard
                key={details.id}
                restaurant={details}
              />
            );
          })
        }
      </div>
    </div>
  );
}

export default Body;
