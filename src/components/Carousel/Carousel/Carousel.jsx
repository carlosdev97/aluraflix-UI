import './Carousel.css';
import SliderVideos from '../Slider/Slider';

function Carousel({ categories, videos }) {
    
    return (
        <section className='carousel'>
            {
                categories.map((categorie, index) => {
                    return <SliderVideos key={index} videos={videos.filter((video) => video.categoria === categorie.nombre)} categorie={categorie}/>
                })
            }
        </section>
    )
}

export default Carousel;