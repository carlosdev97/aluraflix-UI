import './AddVideo.css';
import TextField from '../../TextField/TextField';

function AddVideo() {
    return <section className='addvideo'>
        <form className='form'>
            <h2 className='form__title'>Nuevo video</h2>
            <TextField type='text' placeholder='Ingresa el titulo' />
            <TextField type='text' placeholder='Ingresa el link del video' />
            <TextField type='text' placeholder='Ingresa el link de la imagen del video' />
        </form>
    </section>
}

export default AddVideo;