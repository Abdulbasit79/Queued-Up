import React from 'react'
// import {link} from 'react-router-dom';

export const Header = () => {
  return (
    <header>
      <div  className= "container">
         <div className= "inner-content">
         <div className= "brand">
             <a href  ="/">WatchList</a>

          
            </div>    
            <ul className = "navlinks"> 
            <li> 
            <a href ="/">WatchList</a>
             </li>
            
            <li> 
            <a href  ="/Watched">Watched</a>
            </li>
           
            <li> 
            < a href  ="/add" className = "btn" > + add </a>
            </li>
            
            
            </ul>
          
          </div>    
          </div>           
       
    </header>
  )
}
