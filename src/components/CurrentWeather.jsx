import '../style/currentWeather.css'
import { useDataWeather } from '../hooks/useDataWeather'


export function CurrentWeather(cordenadas){
    const {lat,lon} = cordenadas.corde

    const {name,main,weatherIcon,country,weatherDescripcion,newHour} = useDataWeather({lat,lon})

    
    return(
        <>
            <div className="weather-title">
                <h2 className="weather-title--text">{name}  {country} <span className="weather-title--hour" >{newHour}</span></h2>
            </div>
            <div className="weather-info">
                <div className="weather-temperatura">
                    <p>{main}°C</p>
                </div>
                <div className="weather-icon">
                    <img src={`https://openweathermap.org/img/wn/${weatherIcon}@2x.png`}/>
                </div>
            </div>
            <div className="weather-description">
                <span>{weatherDescripcion}</span>
            </div>
        </>
    )
}