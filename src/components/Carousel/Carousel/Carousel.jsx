import './Carousel.css';
import SliderVideos from '../Slider/Slider';

function Carousel({ videos }) {
    return (
        <section className='carousel'>
            <SliderVideos videos={ videos }/>
        </section>
    )
}

export default Carousel;