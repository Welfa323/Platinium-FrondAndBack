import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import '../styles/topbar.css'
import iconeCall from '../images/icone-call.png'
import iconeEmail from '../images/icone-email.png'




function Topbar() {
  return (
    <Navbar className='Topbar' style={{
        backgroundColor : '#fff',
        color : '#95191c',
        borderBottom : '2px solid #95191c'
    }}>
        <Container>
          <Navbar.Brand className='slogan'>CONSEILS FIABLES, SUCCES ASSURE</Navbar.Brand>
          <Navbar.Brand >
          
          < a  className='lien'href='tel:+225 07 05 13 14 14'>
            <img className='iconeCall' src={iconeCall} alt = 'icone call'/>
            +225 07 05 13 14 14
          </a>
          

          < a className='lien' href='mailto:platiniumconseils532@gmail.com'>
            <img className='iconeEmail' src={iconeEmail} alt = 'icone email'/>
            platiniumconseils532@gmail.com
          </a>
          </Navbar.Brand>
          
        </Container>
      </Navbar>
  )
}

export default Topbar