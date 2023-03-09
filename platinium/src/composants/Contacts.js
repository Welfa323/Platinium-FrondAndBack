import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../styles/contact.css'
import icon1 from '../assets/icon1.png'
import icon2 from '../assets/icon2.png'
import icon3 from '../assets/icon3.png'


const Contact = () => {
    return (
        <>
           
            <div style={{backgroundColor: '#f2f6fa', paddingTop: '5vh'}}>
               <h1 style={{textAlign:'center' ,color: '#bb1212', marginBottom: '50px'}} >Contactez-nous</h1>
            <div  className='global_contact'>
                <div className='contact_bloc1'>
                        {/* <div className='con_bl1_bl1'>
                            <img src={icon1} alt='icone de localisation' />
                            <h4>SIEGE SOCIAL</h4>
                            <p>
                            62B Leoforos Spyrou Kyprianou  
                            <br></br>
                            CY-3076 Lemesos Cyprus
                            </p>
                        </div>
                        <div className='con_bl1_bl2'>
                            <img src={icon2} alt='icone de messagerie' />
                            <h4>Email Us</h4>
                            <p>
                            www.pc-constulting.com 
                            <br></br>
                            cote_d_ivoire.office@pc-consulting.com
                            </p>
                        </div>
                        <div className='con_bl1_bl3'>
                            <img src={icon3} alt='icone de telephone' />
                            <h4>Call Us</h4>
                            <p>
                            Tel: +2250103159254 / +2250574740325 
                            </p>
                        </div> */}
                       
                        
                </div>

                <div className='contact_bloc2'>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <div style={{width:'100%', display:'flex', margin:'5px 0px'}}>
                        <Form.Control 
                            style={{width:'50%', margin:'0px 5px'}} 
                            type="text" 
                            placeholder="Votre Nom" 
                        />
                        <Form.Control 
                            style={{width:'50%', margin:'0px 5px'}} 
                            type="email" 
                            placeholder="Entrer votre Email" 
                        />
                        </div>
                        
                        <div>
                        <Form.Control 
                            style={{width:'98%', margin:'20px 5px'}} 
                            type="text" 
                            placeholder="Sujet" 
                        />
                        <Form.Control
                                style={{width:'98%', margin:'20px 5px',height: '30vh', MozUserFocus:"#fff"}}
                                as="textarea"
                                placeholder="Message"
                        />
                        </div>
                        
                    </Form.Group>
                    <Button 
                    type="submit"
                    style={{textAlign:'center', margin:'2px 5px', float:'right',backgroundColor: '#bb1212',borderColor:'#fff'}}
                    >
                     Envoyer Message
                    </Button>
                </Form>
                </div>
            </div>
        </div>
    </>
    );
}

export default Contact;
