const RestaurantCard = ({ restaurant }) => {
  return (
    <div className="res-card">
      <h2>{restaurant?.name}</h2>
     <div className="res-logo"> <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1600,h_640,c_fill/" +
          restaurant?.cloudinaryImageId
        } alt={restaurant?.name} /> </div> 
      <p>Cuisine: {restaurant?.cuisines?.join(", ")}</p>
      <p>Rating: {restaurant?.avgRatingString}</p>
      <p>Delivery Time: {restaurant?.sla?.deliveryTime}</p>
    </div>
  );
};

export default RestaurantCard;