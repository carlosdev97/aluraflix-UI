import './TextField.css';

function TextField(props) {
    return <div className='input__container'>
        <input 
            className='input__form' 
            type={ props.type }
            name={ props.name }
            value={ props.value }
            placeholder={ props.placeholder }
            />
        <span></span>
    </div>
}

export default TextField;