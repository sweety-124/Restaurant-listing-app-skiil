import RestaurantCard from "./RestaurantCard";
import mockData from "../utils/mockData";
import { useState,useEffect} from "react";
import react from "react";


const Body = () => {
  const [restaurants, setRestaurants] = useState(mockData);

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
      setRestaurants(restaurantData);
    }
  } catch (error) {
    console.error("Error fetching restaurants:", error);
  }

};
  return ( restaurants.length === 0 ? <ShimmerCard /> :
    <div className="body">
      <div className="search">
        Search
      </div>
      <div>
        <div className="filter-buttons">
          <button onClick={() => {setRestaurants(mockData.filter((r) => r.rating > 4.5))}}>Top Rated Restaurants</button>
          <button>Filter 2</button>
        </div>
      </div>
      <div className="restaurant_container">
        {
          restaurants?.map((restaurant) => (
            restaurant && <RestaurantCard key={restaurant?.info?.id} restaurant={restaurant?.info} />
          ))
        }
      </div>
    </div>
  );
}

export default Body;