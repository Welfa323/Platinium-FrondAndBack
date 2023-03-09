import imgFinance from '../images/finance.jpg'
import imgSante from '../images/sante.jpg'
import imgAssurance from '../images/assurance.jpg'
import imgRetraite from '../images/retraite1.jpg'
import imgEntreprise from '../images/entreprise1.jpg'
import imgEntreprise2 from '../images/entreprise2.jpg'

export const cartService = [
    {
        cover: imgEntreprise2,
        href : '#',
        title: 'PARTICULIERS',
        to : 'services/particulier',
        contenu : <p>
        Conseils en affaires personnels
       <br></br>
       <br></br>
       Améliorez votre vie personnelle et professionnelle grâce à nos conseils en affaires personnels. Cliquez sur "En savoir plus" .
        </p>,
    },
    {
        cover: imgEntreprise ,
        href : '#',
        title: 'PME & PMI',
        to : 'services/entreprises',
        contenu : <p>
        Conseils en affaires pour les entreprises
       <br></br>
       <br></br>
       {/* Améliorez votre vie professionnelle grâce à nos conseils en affaires pour les entreprises. Cliquez sur "En savoir plus". */}
       Mise en place d’un accompagnement personnalisé  de vos équipes, 
        Formation produits et back testing,
        Accélération de la performance commerciale et managériale par le développement des compétences.
 
        </p>,
    },
    {
        cover: imgFinance,
        href : '#',
        title: 'FINANCES',
        to : 'services/finance',
        contenu : <p>
        Conseils en finance personnels
       <br></br>
       <br></br>
       Obtenez des conseils personnalisés sur la gestion de vos finances pour atteindre vos objectifs financiers à long terme. Cliquez sur "En savoir plus" .
        </p>,
    },
    {
        cover: imgAssurance,
        href : '#',
        title: 'ASSURANCES',
        to : 'services/assurance',
        contenu :
        `Protégez-vous et ceux que vous aimez grâce à nos solutions d'assurance personnalisées. Cliquez sur "En savoir plus" .`
    ,
    },
    {
        cover: imgSante,
        href : '#',
        title: 'SANTE',
        to : 'services/sante',
        contenu : <p>
         Conseils de santé personnels
       <br></br>
       <br></br>
       Améliorez votre santé et votre bien-être grâce à nos conseils personnalisés. Cliquez sur "En savoir plus" .
        </p>,
    },
    {
        cover: imgRetraite,
        href : '#',
        title: 'RETRAITE',
        to : 'services/retraite',
        contenu : <p>
         Planification de la retraite
       <br></br>
       <br></br>
       Préparez-vous pour votre avenir financier en toute tranquillité d'esprit grâce à nos services de planification de la retraite. Cliquez sur "En savoir plus" .
        </p>,
    },
]