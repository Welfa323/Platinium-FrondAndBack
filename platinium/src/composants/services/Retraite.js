import React from 'react';
import Button from 'react-bootstrap/Button';
import '../../styles/entreprises.css'
import financementRetraite from '../../images/financementRetraite.jpg'
import anticipRetraite from '../../images/anticipRetraite.jpg'
import optimRetraite from '../../images/optimaRetraite.jpg'
import iconeRetraite from '../../images/iconeRetraite.png'


const Retraite = () => {
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
                  Planification de la Retraite
                  </h3>
                </div>

                <div className='famille_bloc1_2' >
                  <img src={iconeRetraite} alt='entreprise icone'></img>
                </div>
            </div>

            <h2 className='h2_centre'>Nos services & Produits</h2>

            <div className='entreprise_bloc2'>
                 <div className='img_illust'>
                    <img src= {optimRetraite} alt='imageservice1'></img>
                 </div>
                 <div className='contenu_service'>
                    <h3>Optimisation de la retraite:</h3>
                   <p>
                   Nous offrons des services de conseil en optimisation de la retraite pour aider nos clients à planifier et à gérer efficacement leurs économies de retraite.
                  Nous proposons une analyse approfondie de la situation financière de nos clients et des stratégies personnalisées pour atteindre leurs objectifs de retraite.
                  </p>
                    <Button variant="outline-primary">Partenariat</Button>{' '}
                    <Button variant="outline-primary">Etude Personnalisée</Button>{' '}
                 </div> 
            </div>

            <div className='entreprise_bloc2'>
                 <div className='img_illust'>
                    <img src={financementRetraite} alt='imageservice 2'></img>
                 </div>
                 <div className='contenu_service'>
                    <h3>Financement de la retraite:</h3>
                    <p>
                    Nous offrons des services de conseil en financement de la retraite pour aider nos clients à comprendre les différentes options de financement de la retraite et à prendre des décisions éclairées.
                    Nous fournissons des informations sur les avantages et les inconvénients des différents produits financiers, tels que les comptes d'épargne-retraite individuels (IRA) et les régimes de retraite d'entreprise.
                    </p>
                    <Button variant="outline-primary">Partenariat</Button>{' '}
                    <Button variant="outline-primary">Etude Personnalisée</Button>{' '}
                 </div> 
            </div>

            <div className='entreprise_bloc2'>
                 <div className='img_illust'>
                    <img src={anticipRetraite} alt='imageservice 3'></img>
                 </div>
                 <div className='contenu_service'>
                    <h3>Retraite anticipée:</h3>
                    <p>
                    Nous offrons des services de conseil en retraite anticipée pour aider nos clients à comprendre les avantages et les risques de la prise d'une retraite anticipée.
                    Nous fournissons des informations sur les implications financières de la retraite anticipée, ainsi que des stratégies pour minimiser les risques et maximiser les avantages.
                    </p>
                    <Button variant="outline-primary">Partenariat</Button>{' '}
                    <Button variant="outline-primary">Etude Personnalisée</Button>{' '}
                 </div> 
            </div>


        </div>
    );
}

export default Retraite;
