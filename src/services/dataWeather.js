const URL_WEATHER ='https://api.openweathermap.org/data/2.5/weather'
export async function dataWeather({lat,lon}){
    
    const api = await  fetch(`${URL_WEATHER}?lat=${lat}&lon=${lon}&appid=1f69b51097a8a00ab707dfa25722d17b&units=metric&lang=es`)
    const response = await api.json();
    const {main,weather,dt,sys,name} =response
    return {main,weather,dt,sys,name}
}