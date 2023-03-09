import React from 'react';
import '../styles/footer.css'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import { useState } from 'react';

// import { useState } from 'react';
// import { useFormik } from 'formik';




const Footer = () => {

    const [message, setMessage] = useState('');

  

    return (
     <>
   
        <div className='footer'>
                <div className='footer_bloc1'>
                    <h3>PlatiniumConseils</h3> 
                       {/* <img src=''></img> */}
                        <Navbar expand="lg">
                            <Container fluid>
                                <Navbar.Toggle aria-controls="navbarScroll" />
                                <Navbar.Collapse id="navbarScroll">
                                <Form className="search_barre">
                                    <Form.Control
                                    type="search"
                                    placeholder="Entrer Votre Email"
                                    aria-label="Search"
                                    className="recherche"
                                    />
                                    <Button variant="#">NewLetter</Button>
                                </Form>
                                </Navbar.Collapse>
                            </Container>
                        </Navbar>  
                </div> 
                <hr></hr> 
                <div className='footer_bloc2'>
                    <h6>@Copyright <span>PC_Consulting</span> All Right Reserved</h6>
                    <span>Designed by <span className='codeur'><a href='/' >Welf@Code</a> </span></span>
                </div>
        </div> 

{/* <form onSubmit={formik.handleSubmit}>
      <label htmlFor="email">Adresse e-mail</label>
      <input
        type="email"
        id="email"
        name="email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
      />
      {formik.touched.email && formik.errors.email ? (
        <div>{formik.errors.email}</div>
      ) : null}
      <button type="submit">S'inscrire</button>
      {message && <div>{message}</div>}
    </form> */}

    </> 
    );
}

export default Footer;
