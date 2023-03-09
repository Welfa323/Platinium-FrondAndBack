import React from 'react'
import Button from 'react-bootstrap/Button';
import '../../styles/entreprises.css'
import santeNomade from '../../images/santeNomade.jpg'
import santeExpatrie from '../../images/santeExpatrie.jpg'
import santeTelecommunication from '../../images/santeTelecommunication.jpg'
import protectionSociale from '../../images/protectionSociale.jpg'
import iconeSante from '../../images/iconeSante.png'

function Sante() {
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
                     Conseils sur la Santé
                  </h3>
                </div>

                <div className='famille_bloc1_2' >
                  <img src={iconeSante} alt='entreprise icone'></img>
                </div>
            </div>

            <h2 className='h2_centre'>Nos services & Produits</h2>

            <div className='entreprise_bloc2'>
                 <div className='img_illust'>
                    <img src= {protectionSociale} alt='imageservice1'></img>
                 </div>
                 <div className='contenu_service'>
                    <h3>Protection sociale:</h3>
                   <p>
                   Nous savons que la sécurité financière en cas de maladie ou d'accident est essentielle, c'est pourquoi nous proposons des solutions de protection sociale adaptées à vos besoins. Nous offrons des assurances maladie, des assurances accidents, des garanties hospitalières et des assurances invalidité pour protéger votre santé et votre bien-être. Avec notre expertise, vous pouvez avoir la tranquillité d'esprit nécessaire pour profiter de la vie en toute sérénité
                   </p>
                    <Button variant="outline-primary">Partenariat</Button>{' '}
                    <Button variant="outline-primary">Etude Personnalisée</Button>{' '}
                 </div> 
            </div>

            <div className='entreprise_bloc2'>
                 <div className='img_illust'>
                    <img src={santeNomade} alt='imageservice 2'></img>
                 </div>
                 <div className='contenu_service'>
                    <h3>Assurance santé des nomades:</h3>
                    <p>
                    Nous savons que la vie des nomades peut être imprévisible, c'est pourquoi nous proposons des solutions d'assurance santé flexibles pour vous protéger partout où vous allez. Que vous soyez en voyage, en mission ou en expédition, nous vous offrons une protection médicale complète pour vous permettre de vous concentrer sur vos aventures. Avec notre expertise, vous pouvez voyager l'esprit tranquille.
                    </p>
                    <Button variant="outline-primary">Partenariat</Button>{' '}
                    <Button variant="outline-primary">Etude Personnalisée</Button>{' '}
                 </div> 
            </div>

            <div className='entreprise_bloc2'>
                 <div className='img_illust'>
                    <img src={santeExpatrie} alt='imageservice 3'></img>
                 </div>
                 <div className='contenu_service'>
                    <h3>Assurance santé des expatriés:</h3>
                    <p>
                    Nous savons que la vie dans un pays étranger peut être stimulante, mais cela peut aussi être stressant. C'est pourquoi nous offrons des solutions d'assurance santé complètes pour les expatriés. Nous couvrons tous les besoins de santé, y compris les soins de routine, les soins d'urgence et les soins dentaires. Avec notre expertise, vous pouvez vivre à l'étranger en toute tranquillité.
                    </p>
                    <Button variant="outline-primary">Partenariat</Button>{' '}
                    <Button variant="outline-primary">Etude Personnalisée</Button>{' '}
                 </div> 
            </div>

            <div className='entreprise_bloc2'>
                 <div className='img_illust'>
                    <img src={santeTelecommunication} alt='imageservice 3'></img>
                 </div>
                 <div className='contenu_service'>
                    <h3>Services de téléconsultation:</h3>
                    <p>
                    Nous savons que la santé est un sujet important pour tout le monde, et il peut être difficile d'obtenir des soins de qualité lorsque vous êtes occupé ou que vous ne pouvez pas vous déplacer facilement. C'est pourquoi nous offrons des services de consultation à distance avec des professionnels de la santé qualifiés, qui peuvent vous fournir des conseils, des prescriptions et des diagnostics en ligne. Avec notre service, vous pouvez obtenir les soins dont vous avez besoin, sans avoir à vous rendre dans un cabinet médical.
                    </p>
                    <Button variant="outline-primary">Partenariat</Button>{' '}
                    <Button variant="outline-primary">Etude Personnalisée</Button>{' '}
                 </div> 
            </div>


            
    </div>
  )
}

export default Sante
