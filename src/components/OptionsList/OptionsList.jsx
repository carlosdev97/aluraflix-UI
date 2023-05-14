import './OptionsList.css';

function OptionsList({ categories, value, updateCategorie }) {

    const handleChange = (event) => {
        updateCategorie(event.target.value)
    }

    return <div className='optionslist'>
        <select className='input__form' value={ value } onChange={ handleChange }>
            {
                categories.map((categorie, index) => {
                    return <option key={index} value={categorie}>{categorie}</option>
                })
            }
        </select>
    </div>
}

export default OptionsList;