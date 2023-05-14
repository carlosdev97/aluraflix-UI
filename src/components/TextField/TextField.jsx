import './TextField.css';

function TextField(props) {

    const handleChange = (event) => {
        props.valuesUpdate(event.target.value)
    }

    return <div className='input__container'>
        <input 
            className='input__form' 
            type={ props.type }
            name={ props.name }
            value={ props.value }
            onChange={ handleChange }
            placeholder={ props.placeholder }
            />
        <span></span>
    </div>
}

export default TextField;