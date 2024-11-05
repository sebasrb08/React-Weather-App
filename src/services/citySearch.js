const URL_WEATHER = "https://api.openweathermap.org"

export async function citySearch({textInput}) {
    const api = await fetch(`${URL_WEATHER}/geo/1.0/direct?q=${textInput}&appid=1f69b51097a8a00ab707dfa25722d17b`)
    const response = await api.json();
    const {lat, lon} = response[0]
    return {lat,lon}
}