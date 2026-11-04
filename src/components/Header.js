import { LOGO_URL } from "../utils/constants";

const Header=()=>{
    return(
        <div className="header">
            <div className="logo_container">
                <img className="logo" src={LOGO_URL} alt="Logo" />
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

export default Header;