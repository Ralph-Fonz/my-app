import React from "react";
import "./styles.css";
import NavBarComponent from "./nav-bar1";
import trailer from "./trailer";





function App (props) {
  const D2chars = ["Amazon", "Necromancer", "Barbarian"];
    console.log (D2chars);
  
  
  
  return ( 

<div>
  
  <img src ="/images/D2R.jpg" alt = "Diablo 2 Resurrected" />
 <NavBarComponent classname = "navbar"> 

 </NavBarComponent>
 <trailer>

 </trailer>
  


  
</div>

  );
}


export default App 
