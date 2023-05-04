import './Banner.css';

function Banner() {
    return (
        <section className='banner'>
            <div className='banner__container'>
                <div className='info__banner'>
                    <a className='title__category' href='#'>Front End</a>
                    <h3 className='title__banner'>Challenge React</h3>
                    <p className='paragraph__banner'>Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte en la resolución de un problema para poder aplicar todos los conocimientos adquiridos en la formación React.</p>
                </div>
            </div>
        </section>
    )
}

export default Banner;