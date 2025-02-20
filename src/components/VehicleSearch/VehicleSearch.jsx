import {useState} from 'react'
import './VehicleSearch.css'

const VehicleSearch = (props) => {
    const [make, setMake] = useState('');
    const [model, setModel] = useState('');
    const [year, setYear] =useState('');
    const [trim, setTrim] = useState('');

    const handleSubmit =(e) => {
        e.preventDefault();
        // console.log("Submitting with values:", year, make, model, trim);

        props.fetchData(year, make, model, trim);
        setYear(''),
        setMake(''),
        setModel(''),
        setTrim('')
    }

    return (

        <div className='container'>
            <h2 className='center'>Search Vehicle</h2>
            <form  className='card-panel' onSubmit={handleSubmit} >
            <div className='input-field'>
                <label htmlFor="year">Year </label>
                <input 
                type="number"
                id='year' 
                placeholder='vehicle year'
                value={year}
                onChange={(e) => setYear(e.target.value)}
                />
            </div>
            <div className='input-field'>
            <label htmlFor="make">Make </label>
            <input 
            type="text" 
            id='make'
            placeholder='Vehicle Make'
            value={make}
            onChange={(e) => setMake(e.target.value)}
            />
            </div>
            <div className='input-field'>
            <label htmlFor="model">Model </label>
            <input 
            type="text" 
            id= 'model'
            placeholder='Vehicle model'
            value={model}
            onChange={(e) => setModel(e.target.value)}
            />
              
            </div>
      
            <div className='input-field'>
                <label htmlFor="trim">Trim</label>
                <input 
                type="text" 
                id='trim'
                placeholder='vehicle trim'
                value={trim}
                onChange={(e) => setTrim(e.target.value)}
                />
            </div>
            <button className='btn waves-effect waves-light'  type="submit">Vehicle Search</button>
            </form>

        </div>
    )
}

export default VehicleSearch