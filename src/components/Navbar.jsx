import leftArrow from "../assets/arrow-left.jpg";
import logo from "../assets/Logo.jpg";
import profile from "../assets/profile.jpg";
import search from "../assets/search-icon.jpg";
import wishlist from "../assets/wishlist-icon.jpg";
import Banner from "./Banner";

const Navbar = () => {
  return (
    <div>
    <div className='navbar'>
       <img src={logo} alt="logo" className="logo"/>
       
       <ul className="navbar-menu">
        <li>SHOP</li>
        <li>SKILLS</li>
        <li>STORIES</li>
        <li>ABOUT</li>
        <li>CONTACT US</li>
       </ul>
       <div className="navbar-right">
           <img src={search} alt="search" className="search-icon"/> 
           <img src={wishlist} alt=""/>
           <img src={profile} alt=""/>
           <div className="navbar-option">
            <h1 className="language">ENG</h1>
            <img src={leftArrow} alt="arrow"/>
           </div>
       </div>
    </div>
    <div>
      <hr className="separator"/>
    <Banner/>
    
    </div>
   
    </div>
    
  )
}

export default Navbar
