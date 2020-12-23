import axios from 'axios';

interface WeatherOptions {
    zip: string,
    apiKey: string
}

/**
 * Returns weather object from https://openweathermap.org/
 * All temps are in kelvin
 * @param obj 
 */
export async function fetchWeather({ zip, apiKey }: WeatherOptions) {
    const url = `//api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${apiKey}`;
    return await axios.get(url);
}

export function kelvinToC(degrees: number) {
    return Math.round( degrees - 273.15 );
}

export function kelvinToF(degrees: number) {
    return Math.round(kelvinToC(degrees) * 9/5 + 32);
}
