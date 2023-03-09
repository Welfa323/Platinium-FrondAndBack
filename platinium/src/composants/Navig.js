import React from 'react';
// import React, {useState,useEffect} from "react";
import { Link} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../styles/Navig.css';



const Navig = ({bg, expand, menus, menus2,menus3,title}) => {
//     const [activeHref, setActiveHref] = useState(null);
//     useEffect(() => {
//     setActiveHref(window.location.pathname);
//   }, []);

    return (
        <div >
            <Navbar className='navba'collapseOnSelect expand={expand} bg={bg} >
              <Container>
                <Navbar.Brand className='logo' href="#home"> <span className='parti1_logo'>Platin</span><span className='parti2_logo' >ium</span> <span className='parti3_logo' >Conseils</span> </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="me-auto">
                  {menus && menus.map((item) => (<Nav.Link key={item.href} href={item.href} active={item.href }>
                    <Link className='liens' to ={item.to}>{item.title}</Link>
                        </Nav.Link>)
                    )}
                    <NavDropdown title="SERVICES" id="collasible-nav-dropdown">
                    {menus2 && menus2.map((element) => (
                            <NavDropdown.Item href={element.href}>
                            <Link className='liens' to ={element.to}>{element.service}</Link>
                            </NavDropdown.Item>
                          )
                  )}
                    </NavDropdown>
                    {menus3 && menus3.map((item) => (<Nav.Link key={item.href} href={item.href} active={item.href }>
                    <Link className='liens' to ={item.to}>{item.title}</Link>
                        </Nav.Link>)
                    )}
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
        </div>
    );
}




export default Navig;

