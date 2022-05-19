import Caroussel from "../components/Caroussel";
import { apartments } from "../data/apartments";
import { useParams } from 'react-router-dom';
import Tag from "../components/Tags";
import Rating from "../components/Rating";
import DropDown from '../components/DropDown';
import { Navigate } from 'react-router-dom'



function Housing() {
    
    const {id} = useParams();//recuperer l'id de l'url
    const house = apartments.find((house) => house.id === id);//Recherche de l'annonce avec l'identifiant qui se trouve dans l'URL.
    
    if (!house) {
        return <Navigate to="/Error"/>;
    }
      
    return (<main className="caroussel">
        <Caroussel pictures={house.pictures} />

        <div className="informations">
            <div className="txt">
                <h2 className="title">{house.title}</h2>
                <h3>{house.location}</h3>
                
                <div className="tags_box">
                    {house.tags.map((tag) => (
                    <Tag name={tag} key={tag} />
                    ))}
                </div>
            </div>

            <div className="rating">
                <div className="rating_item">
                    <p>{house.host.name}</p>
                    <img src={house.host.picture} alt={house.host.name} />
                </div>

                <div className="infos__rate">
                    <Rating rate={house.rating}/>
                </div>
            </div>
        </div>
        <section className="appartements_dropDown">
            <DropDown title='Description' content={house.description} />
            <DropDown title='Équipements' content={house.equipments} />
        </section>
    </main>)
}
export default Housing;