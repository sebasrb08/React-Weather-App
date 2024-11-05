import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useEffect, useState } from 'react';
import '../style/CitySearch.css'
import { citySearch } from '../services/CitySearch';
import { CurrentWeather } from './CurrentWeather';
export function CitySearch(){

    const [textInput,setTextInput] = useState('')
    const [cordenadas,setCordenadas] = useState('')
    const [flat,setFlat] = useState(false)

    const handleOnChange=(event)=>{
        setTextInput(event.target.value)
        
    }

    const handleClick= async ()=>{
        const {lat, lon}= await citySearch({textInput})
        setCordenadas({lat,lon})
        setFlat(true)
    }
    

    return(
        <>
            <main className='main-component'>
                {!flat&& <form onSubmit={(event)=> event.preventDefault() }>
                <TextField className='citySearch-input' id="outlined-basic" label="City" variant="outlined"  onChange={handleOnChange}/>
                <Button onClick={handleClick} className='citySearch-button' variant="contained" >
                    Buscar Ciudad
                </Button>

                </form> }
                {flat && <CurrentWeather corde = {cordenadas}/>}
            </main>
        </>
    )
}

