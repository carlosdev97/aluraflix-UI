import './OptionsList.css';

function OptionsList({ categories }) {
    return <div className='optionslist'>
        <select className='input__form'>
            {
                categories.map((categorie, index) => {
                    return <option key={index} value={categorie}>{categorie}</option>
                })
            }
        </select>
    </div>
}

export default OptionsList;