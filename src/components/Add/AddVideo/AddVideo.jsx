import './AddVideo.css';
import TextField from '../../TextField/TextField';
import OptionsList from '../../OptionsList/OptionsList';
import Button from '../../Button/Button';
import { useForm } from '../../../hooks/useForm';

const initialForm = {
    title: '',
    videoUrl: '',
    imageUrl: '',
    description: ''
}

const validationsForm = (form) =>{} // ! Quedamos aquí.

function AddVideo({ categories }) {

    const {form,
        errors, 
        loading, 
        response,
        HandleInputBlur,
        HandleInputChange,
        HandleInputSubmit
    } = useForm(initialForm, validationsForm);

    return <section className='addvideo'>
        <form className='form'>
            <h2 className='form__title'>Nuevo video</h2>
            <TextField type='text' name='title' value={form.title} placeholder='Ingresa el titulo' />
            <TextField type='text' name='videoUrl' value={form.videoUrl} placeholder='Ingresa el link del video' />
            <TextField type='text' name='imageUrl' value={form.imageUrl} placeholder='Ingresa el link de la imagen del video' />
            <OptionsList categories={ categories }/>
            <textarea className="input__form" name='description' value={form.description} rows="3" cols="50" placeholder='Ingrese la descripción'>
            </textarea>
            <div className='buttons__container'>
                <Button text='Guardar' bgColor='#2A7AE4' fontColor='#fff' />
                <Button text='Limpiar' bgColor='#9E9E9E' fontColor='#000' />
                <Button text='Nueva Categoria' bgColor='#2A7AE4' fontColor='#fff' />
            </div>
        </form>
    </section>
}

export default AddVideo;