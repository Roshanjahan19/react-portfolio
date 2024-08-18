import React, {useState} from 'react'
import { TypeAnimation } from "react-type-animation";
import styles from "./Navbar.module.css";
import {getImageUrl} from "../../utils";

export const Navbar = () => {
   const [menuOpen, setMenuOpen] = useState(false);
    return (
     <nav className = {styles.navbar}> 
       <a className = {styles.title} href= "/">  
     <div className = {styles.logo}>
     <TypeAnimation
        sequence={[
          '<a-ra>',  // Text to type
          2000,      // Duration to display the text before erasing
          '',        // Erase the text
          1000,       // Duration to keep the text erased
          '</a-ra>',  // Re-type the text
          2000,      // Duration to display the text before erasing
        ]}
        wrapper="span"
        speed={400} 
        repeat={Infinity}
      />
     </div>
       </a>  
         <div className = {styles.menu}>
            <img className = {styles.menuBtn} 
            src= {
                menuOpen 
                ? getImageUrl("nav/closeIcon.png")
                :getImageUrl("nav/menuIcon.png")
            } 
                alt="menu-button"
                onClick = {() => setMenuOpen(!menuOpen)}
                />
            <ul className = {`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
            onClick = {() => setMenuOpen(false)}>
                <li>
                     <a href= "#about"> About</a>  
                </li>
                <li>
                     <a href= "#skills"> Skills</a>  
                </li>
          
                <li>
                     <a href= "#contact"> Contact</a>  
                </li>
            </ul>
        </div>  
     </nav>
    )
}