import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
         <div className="top-bar">
           <nav>

           <div className="">
        <Link to="/" className="nav-link-lkj"  >
          <div className="logo-edyoda">EDYODA</div>
             <p className="logo-stories">Stories</p>
        </Link>
           </div>

           <div className="top-bar-2">
             <ul>
               <div className="nav-link-lkj explore-text-top">
               Explore Categories
               <span>
                 <img src=" " alt="" />
               </span>
               </div>
             </ul>
             <ul className="right-top-top">
               <div className="nav-link-lkj" >
                 <p className="top-bar-text-2">
                 EdYoda is free learning and knowledge 
                   <br />
                   sharing platform for techies
                 </p>
               </div>
               
             </ul>

           </div>
              <div className="nav-link-lkj">
                 <button className="btn-websit nav-link-lkj ">
                   Go To Main  Website
                 </button>
               </div>
           </nav>
       
       </div>
     );
}
 
export default Header;