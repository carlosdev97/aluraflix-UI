import './Footer.css';
import logoAluraflix from '../../../public/images/aluraflix-logo.png';

function Footer() {
    return (
        <footer className='footer'>
            <a className='footer__link' href='#'><img className='footer__logo' src={logoAluraflix} alt='Logo de Aluraflix'/></a>
        </footer>
    )
}

export default Footer;