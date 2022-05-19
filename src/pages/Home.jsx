import Banniere from '../components/Banniere';
import Gallery from '../components/Gallery';
import bannerImg from '../assets/coast-landscape.jpeg';

function Home() {
    return (<main className="Home">
        <Banniere text='Chez vous, partout et ailleurs' picture={bannerImg} />
        <Gallery />
    </main>)
}

export default Home;