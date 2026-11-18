import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
const Header=()=>{
    return(
        <div className="header">
            <div className="logo_container">
                <img className="logo" src={LOGO_URL} alt="Logo" />
            </div>
            <div className="nav_container">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/cart">Cart</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Header;