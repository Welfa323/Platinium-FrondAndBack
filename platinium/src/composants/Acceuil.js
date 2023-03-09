import '../styles/header.css'
import '../styles/footer.css'
import '../styles/contact.css'
import { slides } from '../Exports/Slides.js';
import { serviceDatas } from '../Exports/ServiceDatas.js';
import Caroussels from './Caroussels.js'
import Apropos from './Apropos';
import Services from './services/Services';







const Acceuil = () => {
    return (
        <>
      <Caroussels slides={slides}/>
      <Apropos/>
      <Services serviceData ={serviceDatas} /> 
        </>
    );
}
export default Acceuil