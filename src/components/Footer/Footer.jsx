import './Footer.css';
import logoAluraflix from '../../../public/images/aluraflix-logo.png';

function Footer() {
    return (
        <footer className='footer'>
            <a className='footer__link' href='#'><img className='footer__logo' src={logoAluraflix} alt='Logo de Aluraflix'/></a>
            <p class="copyright__text">Copyright &copy; 2023 <a class="copyright__link" href="https://github.com/Carlosedm97/" target="_blank" rel="noopener noreferrer">Carlos López</a></p>
        </footer>
    )
}

export default Footer;