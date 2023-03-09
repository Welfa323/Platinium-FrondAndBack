import React from 'react'
import Button from 'react-bootstrap/Button';
import '../../styles/entreprises.css'
import assuranceVoyage from '../../images/assuranceVoyage.jpg'
import assuranceVie from '../../images/assuranceVie.jpg'
import assuranceDivers from '../../images/assuranceDivers.jpg'
import assuranceDeces from '../../images/assuranceDeces.jpg'
import iconeAssurance from '../../images/iconeAssurance.png'

function Assurances() {
  return (
    <div>
        {/* <p>
                Bonjour et bienvenue
                <br></br> 
               Nous sommes heureux de vous offrir des services de qualité pour vous aider à gérer votre entreprise de manière efficace.
                </p>
                <br></br> */}
            <div className='famille_bloc1'>
                <div className='famille_bloc1_1'>
                  <h3>
                     Assurance Familiale
                  </h3>
                </div>

                <div className='famille_bloc1_2' >
                  <img src={iconeAssurance} alt='entreprise icone'></img>
                </div>
            </div>

            <h2 className='h2_centre'>Nos services & Produits</h2>

            <div className='entreprise_bloc2'>
                 <div className='img_illust'>
                    <img src= {assuranceDeces} alt='imageservice1'></img>
                 </div>
                 <div className='contenu_service'>
                    <h3>Assurance décès et obsèques :</h3>
                   <p>
                    Nous savons que la perte d'un être cher est une épreuve difficile pour tous, c'est pourquoi nous offrons des plans de couverture pour vous aider à traverser cette période difficile. Nos plans offrent une couverture pour les frais funéraires, ainsi qu'une aide financière pour aider votre famille à faire face aux dépenses imprévues. Avec notre expertise, vous pouvez être sûr que vous avez la protection dont vous avez besoin pour traverser ces moments difficiles.</p>
                    <Button variant="outline-primary">Souscire Maintenant</Button>{' '}
                 </div> 
            </div>

            <div className='entreprise_bloc2'>
                 <div className='img_illust'>
                    <img src={assuranceVoyage} alt='imageservice 2'></img>
                 </div>
                 <div className='contenu_service'>
                    <h3>Assurance voyage :</h3>
                    <p>
                    Nous savons que voyager peut comporter des risques, c'est pourquoi nous offrons des plans de couverture pour vous aider à voyager en toute sécurité. Nos plans couvrent les soins médicaux d'urgence, les évacuations d'urgence, et d'autres services qui vous permettent de voyager en toute tranquillité d'esprit. Avec notre expertise, vous pouvez être sûr que vous êtes protégé, peu importe où vous êtes dans le monde.
                    </p>
                    <Button variant="outline-primary">Souscire Maintenant</Button>{' '}
                 </div> 
            </div>

            <div className='entreprise_bloc2'>
                 <div className='img_illust'>
                    <img src={assuranceVie} alt='imageservice 3'></img>
                 </div>
                 <div className='contenu_service'>
                    <h3>Assurance vie :</h3>
                    <p>
                    Nous savons que la sécurité financière est importante pour vous et votre famille, c'est pourquoi nous offrons des plans de couverture personnalisés pour répondre à vos besoins spécifiques. Nos plans couvrent les coûts de la vie quotidienne, les dépenses imprévues et d'autres services qui vous permettent de vivre en toute tranquillité d'esprit. Avec notre expertise, vous pouvez être sûr que vous avez la protection financière dont vous avez besoin pour vous et votre famille.
                    </p>
                    <Button variant="outline-primary">Souscire Maintenant</Button>{' '}
                 </div> 
            </div>

            <div className='entreprise_bloc2'>
                 <div className='img_illust'>
                    <img src={assuranceDivers} alt='imageservice 3'></img>
                 </div>
                 <div className='contenu_service'>
                    <h3>Assurance auto, habitation et risques divers :</h3>
                    <p>
                    Nous savons que votre voiture, votre maison et vos biens ont une grande valeur pour vous, c'est pourquoi nous offrons des plans de couverture adaptés à vos besoins spécifiques. Nos plans couvrent les coûts des réparations, des remplacements, et d'autres services qui vous permettent de vivre en toute tranquillité d'esprit. Avec notre expertise, vous pouvez être sûr que vous avez la protection dont vous avez besoin pour votre voiture, votre maison et vos biens.
                    </p>
                    <Button variant="outline-primary">Souscire Maintenant</Button>{' '}
                 </div> 
            </div>

            <div className='entreprise_bloc2'>
                 <div className='img_illust'>
                    <img src={assuranceDivers} alt='imageservice 3'></img>
                 </div>
                 <div className='contenu_service'>
                    <h3>Transmission du patrimoine :</h3>
                    <p>
                    Notre objectif est de vous offrir une protection pour vos proches tout en augmentant la valeur de votre patrimoine. Nous proposons des solutions fiscales, juridiques et financières adaptées à votre situation et à vos besoins.
                    <br></br>
                    Notre méthodologie repose sur une approche globale et comprend les éléments suivants :
                    </p>
                    <Button variant="outline-primary">Souscire Maintenant</Button>{' '}
                 </div> 
            </div>


            


    </div>
  )
}

export default Assurances