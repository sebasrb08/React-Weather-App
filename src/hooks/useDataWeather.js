import { useEffect, useState } from "react"
import { dataWeather } from "../services/dataWeather";
export const useDataWeather=({lat,lon})=>{
    const[name,setName] = useState("")
    const[main,setMain] = useState("")
    const[weatherIcon,setWeatherIcon] = useState("")
    const[country,setCountry] = useState("")
    const [weatherDescripcion,setWeatherDescripcion ] = useState("")
    const [newHour, setNewHour] = useState("")

    useEffect(() => {
        dataWeather({lat, lon}).then(dataClima => {
            setName(dataClima.name)
            setCountry(dataClima.sys.country)
            setWeatherIcon(dataClima.weather[0].icon)
            setMain(dataClima.main.temp)
            setWeatherDescripcion(dataClima.weather[0].description)
            const  horaUnix = dataClima.dt * 1000
            
            const hour = new Date(horaUnix)
            console.log(hour.toLocaleString())
            setNewHour(hour.toLocaleString())
        })
    }, []);

    return {name,main,weatherIcon,country,weatherDescripcion,newHour}

}