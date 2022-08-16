import "./Topbar.css";
import React from 'react';
import {Navbar,Nav} from "react-bootstrap"

export default function Topbar() {

return(
<div >
  
<Navbar  variant="dark" expand="xl" className='Navbar' style={{height:'50px'}}>
 
  
   
    <Navbar.Collapse id="navbarScroll">
      <Nav className="me-auto">
        
        <Nav.Link href="/"><p className="Navbart">My Weather App</p></Nav.Link>
        
        
      </Nav>
    
    </Navbar.Collapse>
  
</Navbar>
       
    
     
    </div>
    );
}