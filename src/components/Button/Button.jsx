import './Button.css';

function Button({ text, bgColor, fontColor }) {
    return <button className='button' style={{ backgroundColor: bgColor, color: fontColor }}>{ text }</button>
}

export default Button;