import React from 'react';
import Button from 'react-bootstrap/Button';
import '../../styles/entreprises.css'
import persoInvestissement from '../../images/persoInvestissement.jpg'
import persoSecuriteFinance from '../../images/persoSecuriteFinance.jpg'
import iconeParticulier from '../../images/iconeParticulier.png'

const Particulier = () => {
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
                    Conseils Particulier
                  </h3>
                </div>

                <div className='famille_bloc1_2' >
                  <img src={iconeParticulier} alt='entreprise icone'></img>
                </div>
            </div>

            <h2 className='h2_centre'>Nos services & Produits</h2>

            <div className='entreprise_bloc2'>
                 <div className='img_illust'>
                    <img src= {persoSecuriteFinance} alt='imageservice1'></img>
                 </div>
                 <div className='contenu_service'>
                    <h3>Sécurisation financière :</h3>
                   <p>
                   Nous comprenons que la sécurité financière est importante pour vous et votre famille, c'est pourquoi nous offrons des plans de gestion de risque pour vous aider à protéger vos actifs et vos finances. Nos plans comprennent des analyses de risque, des conseils en matière de placement, des options de diversification et d'autres services qui vous permettent de vivre en toute tranquillité d'esprit. Avec notre expertise, vous pouvez être sûr que vous avez la protection financière dont vous avez besoin.
                   </p>
                   <Button variant="outline-primary">Partenariat</Button>{' '}
                    <Button variant="outline-primary">Etude Personnalisée</Button>{' '}
                 </div> 
            </div>

            <div className='entreprise_bloc2'>
                 <div className='img_illust'>
                    <img src={persoInvestissement} alt='imageservice 2'></img>
                 </div>
                 <div className='contenu_service'>
                    <h3>Investissement :</h3>
                    <p>
                    Nous savons que l'investissement est un élément clé de la construction de richesse à long terme, c'est pourquoi nous offrons des plans de placement pour vous aider à atteindre vos objectifs financiers. Nos plans comprennent des conseils personnalisés, des stratégies de diversification et d'autres services qui vous permettent de maximiser votre rendement sur investissement. Avec notre expertise, vous pouvez être sûr que vous avez la protection financière et la croissance dont vous avez besoin.
                    </p>
                    <Button variant="outline-primary">Partenariat</Button>{' '}
                    <Button variant="outline-primary">Etude Personnalisée</Button>{' '}
                 </div> 
            </div>



        </>
        

    );
}

export default Particulier;
