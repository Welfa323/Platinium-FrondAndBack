import React from 'react';
import Button from 'react-bootstrap/Button';
import '../../styles/entreprises.css'
import entrepriPerformance from '../../images/entrepriPerformance.jpg'
import EntrepDigitalisation from '../../images/EntrepDigitalisation.jpg'
import entrepriConpetenceVente from '../../images/entrepriConpetenceVente.jpg'
import entrepriJuriste from '../../images/entrepriJuriste.jpg'
import iconeEntrprise from '../../images/icone entreprise.png'


const Entreprises = () => {
    return (
        <>
            {/* <p>
                Bonjour et bienvenue
                <br></br> 
               Nous sommes heureux de vous offrir des services de qualité pour vous aider à gérer votre entreprise de manière efficace.
                </p>
                <br></br> */}
            <div className='famille_bloc1'>
                <div className='famille_bloc1_1'>
                  <h3>
                     Entreprises PME & PMI
                  </h3>
                </div>

                <div className='famille_bloc1_2' >
                  <img src={iconeEntrprise} alt='entreprise icone'></img>
                </div>
            </div>

            <h2 className='h2_centre'>Nos services & Produits</h2>

            <div className='entreprise_bloc2'>
                 <div className='img_illust'>
                    <img src= {entrepriJuriste} alt='imageservice1'></img>
                 </div>
                 <div className='contenu_service'>
                    <h3>Protection juridique:</h3>
                   <p>
                   Nous offrons des services de protection juridique pour aider nos clients à minimiser les risques juridiques liés à leur entreprise.
                   Nous fournissons des informations et des conseils sur les lois et réglementations applicables à leur entreprise, ainsi que des stratégies pour minimiser les risques juridiques.
                   </p>
                    <Button variant="outline-primary">Partenariat</Button>{' '}
                    <Button variant="outline-primary">Etude Personnalisée</Button>{' '}
                 </div> 
            </div>

            <div className='entreprise_bloc2'>
                 <div className='img_illust'>
                    <img src={entrepriPerformance} alt='imageservice 2'></img>
                 </div>
                 <div className='contenu_service'>
                    <h3>Conseil en amélioration de la performance:</h3>
                    <p>
                    Nous offrons des services de conseil en amélioration de la performance pour aider nos clients à optimiser leurs processus opérationnels et à améliorer leur efficacité.
                  Nous proposons une analyse détaillée des processus de l'entreprise et des stratégies pour améliorer la productivité et la qualité.
                    </p>
                    <Button variant="outline-primary">Partenariat</Button>{' '}
                    <Button variant="outline-primary">Etude Personnalisée</Button>{' '}
                 </div> 
            </div>

            <div className='entreprise_bloc2'>
                 <div className='img_illust'>
                    <img src={entrepriConpetenceVente} alt='imageservice 3'></img>
                 </div>
                 <div className='contenu_service'>
                    <h3>Montée en compétences des responsables commerciaux:</h3>
                    <p>
                    Nous offrons des services de formation et de développement pour aider les responsables commerciaux à améliorer leurs compétences en vente, en négociation, en gestion de clients et en gestion d'équipe.
                    Nous proposons des programmes de formation personnalisés pour répondre aux besoins spécifiques de chaque client et de chaque responsable commercial.
                    </p>
                    <Button variant="outline-primary">Partenariat</Button>{' '}
                    <Button variant="outline-primary">Etude Personnalisée</Button>{' '}
                 </div> 
            </div>

            <div className='entreprise_bloc2'>
                 <div className='img_illust'>
                    <img src={EntrepDigitalisation} alt='imageservice 3'></img>
                 </div>
                 <div className='contenu_service'>
                    <h3>Digitalisation de la fonction RH et Commerciale:</h3>
                    <p>
                    Nous offrons des services de digitalisation pour aider nos clients à améliorer leur efficacité et leur productivité grâce à l'automatisation de leurs processus RH et commerciaux.
                    Nous proposons des solutions personnalisées pour la gestion des ressources humaines, la gestion de la relation client, le marketing digital et la vente en ligne.
                    </p>
                    <Button variant="outline-primary">Partenariat</Button>{' '}
                    <Button variant="outline-primary">Etude Personnalisée</Button>{' '}
                 </div> 
            </div>

            
        </>
    );
}

export default Entreprises;
