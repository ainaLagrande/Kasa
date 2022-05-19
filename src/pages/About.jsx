import Banniere from '../components/Banniere';
import bannerImg from '../assets/mountain-landscape.jpeg';
import DropDown from '../components/DropDown';


const fiabiliteContent = `Les annonces postées sur Kasa garantissent une fiabilité totale. 
Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées 
par nos équipes.`
const respectContent = `La bienveillance fait partie des valeurs fondatrices de Kasa. Tout 
comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre 
plateforme.`
const serviceContent = `Nos équipes se tiennent à votre disposition pour vous fournir une 
expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.`
const responsabiliteContent = `La sécurité est la priorité de Kasa. Aussi bien pour nos 
hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos 
services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de 
vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité 
domestique pour nos hôtes.`

function About() {
    return (<main className="About">
        <Banniere text='' picture={bannerImg}/>
        <DropDown title='Fiabilité' content={fiabiliteContent} />
        <DropDown title='Respect' content={respectContent} />
        <DropDown title='Service' content={serviceContent} />
        <DropDown title='Sécurité' content={responsabiliteContent} />
    </main>)
}
export default About;