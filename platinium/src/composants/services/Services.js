import React from 'react';
import '../../styles/services.css'
import {cartService} from '../../datas/ServicesDatas'
import '../../styles/footer.css'
import '../../styles/contact.css'
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';



const Services = ({cover, href, title, contenu}) => {

    const navigate = useNavigate()

   
    return (
    <>
            <h1 style={{textAlign:'center'}}>Nos Offres</h1>
        <div className='all_cards'>

      {/* <Row  xs={1} md={2} className="g-4">
      {cartService && cartService.map((item, index) => (
        <Col>
          <Card style={{ width: '18rem' }} key={index}>
              <Card.Img variant="top" src={item.cover} />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>{item.contenu} </Card.Text>
                <Button 
                      onClick={()=>navigate(item.to)}
                      variant ="primary"
                >
                  En savoir plus
                </Button>{' '}
              </Card.Body>
             </Card>
        </Col>
      ))}
    </Row> */}

    {/* <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
          */}
        

            
            {cartService && cartService.map((item, key)=> (
                <div className='cadre_card'>
                    <div key={key} style={{backgroundImage:`url(${item.cover})`, backgroundRepeat:'no-repeat'}} className ='img_bg'>
                        <div className = 'card_sup'>
                        <h2>
                            <a href={item.href}>{item.title}</a>
                        </h2>
                        <p>{item.contenu}</p>
                        <div className='card_bouton'>
                            <Button 
                            size="sm"
                            onClick={()=>navigate(item.to)}
                            >
                             En savoir plus
                            </Button>{' '}
                        </div>
                      </div>
                   </div>
                </div>
                )) }
        </div>
    </>
 )}
export default Services;
