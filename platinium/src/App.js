import './styles/App.css';
import {Routes,Route} from 'react-router-dom';
import {menus} from './Exports/Menus';
import {menus2} from './Exports/Menus2.js'
import {menus3} from './Exports/Menus3.js'
import Navig from './composants/Navig';
import Acceuil from './composants/Acceuil';
import Apropos from './composants/Apropos';
import Services from './composants/services/Services';
import Contacts from './composants/Contacts';
import Particulier from './composants/services/Particulier';
import Entreprises from './composants/services/Entreprises';
import Retraite from './composants/services/Retraite'
import Sante from './composants/services/Sante'
import Footer from './composants/Footer';
import Assurances from './composants/services/Assurances';
import Finances from './composants/services/Finances';
import Topbar from './composants/Topbar';




function App() {
  return (
    <>
    <Topbar/>
    <Navig title="PlatiniumConseils" bg="ligth" expand="lg" menus = {menus} titre ="Services" menus2 ={menus2} menus3 ={menus3}/>
        <Routes>
            <Route path='/' element={<Acceuil/>} />
            <Route path='apropos' element={<Apropos/>} />
            <Route path='contact' element={<></>}/>
            <Route path='services' element={<Services/>}/>
            <Route path='services/finances' element={<Particulier/>}/>
            <Route path='services/entreprises' element={<Entreprises/>}/>
            <Route path='services/retraite' element={<Retraite/>}/>
            <Route path='services/sante' element={<Sante/>}/>
            <Route path='services/assurance' element={<Assurances/>}/>
            <Route path='services/finance' element={<Finances/>}/>
            <Route path='services/particulier' element={<Particulier/>}/>
        </Routes>
        <Contacts/>
      <Footer/>
    </>
  );
}

export default App;
