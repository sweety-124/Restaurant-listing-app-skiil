import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
const Header=()=>{
    return(
        <div className="header">
            <div className="logo_container">
                <img className="logo" src="https://t3.ftcdn.net/jpg/08/29/90/88/360_F_829908823_kYsRKdQcIaYEAhHRAZTIXuSKvuVPif8w.jpg" alt="Logo" />
            </div>
            <div className="nav_container">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const Body=()=>{
    return(
        <div className="body">
            <div className="search">
                Search
            </div>
            <div className="restaurant_container">
                <ResCard resName="Meghna foods" cuisine="Biriyani, North Indian" rating="4.5 stars" deliveryTime="30-40 mins"/>
                <ResCard resName="Another Restaurant" cuisine="Italian" rating="4.2 stars" deliveryTime="25-35 mins"/>
                <ResCard resName="Third Restaurant" cuisine="Mexican" rating="4.0 stars" deliveryTime="30-40 mins"/>
                   <ResCard resName="Fourth Restaurant" cuisine="Chinese" rating="4.3 stars" deliveryTime="20-30 mins"/>
                <ResCard resName="Fifth Restaurant" cuisine="Indian" rating="4.1 stars" deliveryTime="25-35 mins"/>
                <ResCard resName="Sixth Restaurant" cuisine="Thai" rating="4.4 stars" deliveryTime="30-40 mins"/>
                </div>
    </div>
    )
}
 const ResCard=(props)=>{
    return(
        <div className="res-card" style={{backgroundColor:"#f0f0f0f0"}}>
            <img className="res-logo" src="https://b.zmtcdn.com/data/pictures/chains/1/50691/0435a03f4d2017a0a64d90b279c2fa63.jpg" alt="Restaurant Logo" />
            <h3>{props.resName}</h3>
            <h4>{props.cuisine}</h4>
            <h4>{props.rating}</h4>
            <h4>{props.deliveryTime}</h4>
        </div>
    )}
 

const AppLayout=() => {
  return (
    <div className="App">   
        <Header />
        <Body />
    </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
  