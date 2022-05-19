import { apartments } from "../data/apartments";
import { NavLink } from 'react-router-dom';

function Gallery() {
	return (
		<div className="apartments_container">
            <div className="apartments_box">
                {apartments.map((app,id) => (
                    <NavLink className="apartments_item" to={'/house/' + app.id} key={`${app.title}-${id}`}>       
                        <img src={app.cover} alt={app.title}/>
                        <h3>{app.title}</h3>
                    </NavLink>
				))}
            </div>
		</div>
	)
}
export default Gallery;