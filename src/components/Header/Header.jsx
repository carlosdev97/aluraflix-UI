import './Header.css';
import logoAluraflix from '../../../public/images/aluraflix-logo.png';

function Header() {
    return (
        <header className='header'>
            <div className='header__container'>
                <img className='header__logo' src={logoAluraflix} alt='Logo de Aluraflix' />
                <a className='header__link' href='#' target='_blank' rel='noopener noreferrer'>Nuevo video</a>
            </div>
        </header>
    );
}

export default Header;