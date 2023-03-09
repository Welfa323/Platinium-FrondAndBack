import React from 'react'
import Button from 'react-bootstrap/Button';
import '../../styles/entreprises.css'
import bourse from '../../images/bourse2.jpg'
import crypto from '../../images/crypto.jpg'
import credit from '../../images/credit.jpg'
import eduFianciere from '../../images/eduFinanciere.jpg'
import iconeFinance from '../../images/iconeFinance.png'

function Finances() {
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
                     Conseils sur la Finance
                  </h3>
                </div>

                <div className='famille_bloc1_2' >
                  <img src={iconeFinance} alt='entreprise icone'></img>
                </div>
            </div>

            <h2 className='h2_centre'>Nos services & Produits</h2>

            <div className='entreprise_bloc2'>
                 <div className='img_illust'>
                    <img src= {eduFianciere} alt='imageservice1'></img>
                 </div>
                 <div className='contenu_service'>
                    <h3>Education Financière:</h3>
                   <p>
                   Nous savons que la gestion de l'argent peut être un défi, mais nous sommes là pour vous aider à comprendre comment atteindre vos objectifs financiers. Nous offrons des ateliers pratiques pour vous aider à élaborer un budget, à économiser pour l'avenir et à investir judicieusement. Avec notre expertise, vous pouvez avoir la confiance nécessaire pour prendre des décisions financières éclairées.
                   </p>
                   <Button variant="outline-primary">Participer à un Atelier</Button>{' '}
                
                 </div> 
            </div>

            <div className='entreprise_bloc2'>
                 <div className='img_illust'>
                    <img src={bourse} alt='imageservice 2'></img>
                 </div>
                 <div className='contenu_service'>
                    <h3>Bourse:</h3>
                    <p>
                    Nous sommes spécialisés dans l'achat et la vente d'actions, d'obligations et de fonds communs de placement. Nous offrons des conseils personnalisés pour vous aider à investir dans des entreprises prospères, à surveiller les marchés et à gérer les risques. Nous croyons que la bourse est une excellente façon de faire fructifier votre argent à long terme, et nous sommes là pour vous aider à maximiser vos investissements.
                    </p>
                    <Button variant="outline-primary">Partenariat</Button>{' '}
                    <Button variant="outline-primary">Etude Personnalisée</Button>{' '}
                 </div> 
            </div>

            <div className='entreprise_bloc2'>
                 <div className='img_illust'>
                    <img src={crypto} alt='imageservice 3'></img>
                 </div>
                 <div className='contenu_service'>
                    <h3>Crypto-monnaie:</h3>
                    <p>
                    Nous sommes passionnés par les crypto-monnaies et nous pensons qu'elles sont l'avenir des transactions financières. Nous offrons des conseils pour investir dans les crypto-monnaies les plus prometteuses, ainsi que des services de trading pour vous aider à tirer profit des fluctuations du marché. Avec notre expertise, vous pouvez être sûr que vous faites des choix éclairés et rentables.
                    </p>
                    <Button variant="outline-primary">Partenariat</Button>{' '}
                    <Button variant="outline-primary">Etude Personnalisée</Button>{' '}
                 </div> 
            </div>

            <div className='entreprise_bloc2'>
                 <div className='img_illust'>
                    <img src={credit} alt='imageservice 3'></img>
                 </div>
                 <div className='contenu_service'>
                    <h3>Courtage en crédit:</h3>
                    <p>
                    Nous savons que la recherche de financement pour un projet important peut être difficile, c'est pourquoi nous sommes là pour vous aider à trouver les meilleurs taux et les meilleurs prêts. Nous travaillons avec de nombreuses institutions financières pour vous aider à obtenir le crédit dont vous avez besoin pour réaliser vos rêves. Nous sommes passionnés par l'assistance à nos clients pour obtenir les meilleurs résultats financiers possibles.
                    </p>
                    <Button variant="outline-primary">Partenariat</Button>{' '}
                    <Button variant="outline-primary">Etude Personnalisée</Button>{' '}
                 </div> 
            </div>


            
    </div>
  )
}

export default Finances