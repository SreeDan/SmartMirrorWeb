import axios from "axios";
import { useEffect, useState } from "react";


function Weather() {
    const [temperature, setTemperature] = useState<string>('69.73')
    const [description, setDescription] = useState<string>('Clear')
    const [feelsLike, setFeelsLike] = useState<string>('67.91')
    const [extraDescription, setExtraDescription] = useState<string>('Clear Sky')
    const [weatherImage, setWeatherImage] = useState<string>('https://openweathermap.org/img/wn/10d@2x.png')

    useEffect(() => {
        const TEN_MINUTES_MS = 600000

        const interval = setInterval(() => {
            // getWeather()
          }, TEN_MINUTES_MS);
        
          return () => clearInterval(interval)
        
    }, [])

    const getWeather = () => {
        const weatherKey: string = process.env.WEATHER_KEY!;
        const lat: string = process.env.LATITUDE!;
        const long: string = process.env.LONGITUDE!;

        axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${weatherKey}`)
            .then(response => {
                var data: any = response.data
                var tempK: number = parseFloat(data['main']['temp']);
                var tempF: number = Math.round((9 / 5 * (tempK - 273.15) + 32) * 100) / 100
                
                var feelsLikeK: number = parseFloat(data['main']['feels_like'])
                var feelsLikeF: number = Math.round((9 / 5 * (feelsLikeK - 273.15) + 32) * 100) / 100

                var description: string = data['weather'][0]['main']
                var extraDescription: string = data['weather'][0]['description']
                
                var weatherIcon: string = data['weather'][0]['icon']
                
                setTemperature(String(tempF))
                setDescription(String(description))
                setExtraDescription(String(extraDescription))
                setFeelsLike(String(feelsLikeF))
                setWeatherImage(`https://openweathermap.org/img/wn/10d@2x.png`)


            })
            .catch(error => {
                console.error(error);
            });
    }

    return (
        <div>
            <div style={{marginRight: '10px'}}>
                <div style={{display: "inline-flex", fontSize: 60}}>
                    <img src={weatherImage} alt="image" width="200" height="200" /> <br />
                    <div style={{marginTop: '60px'}}>{temperature}</div> <span style={{marginLeft: '5px', marginTop: '1.5em', verticalAlign: 'top', fontSize: 40}}>°F</span> <br />
                </div>
                {/* <div style={{textAlign: 'center', fontSize: '1.5rem'}}>Atlanta, Georgia</div> */}
                <div style={{fontSize: 20, marginLeft: '0.5em', marginTop: '-3rem'}}>
                    <ul style={{display: 'inline-flex', listStyleType: 'none'}}>
                        <li style={{display: 'inline-block', marginRight: '1.5rem'}}>{description}</li>
                        <li style={{display: 'inline-block', marginRight: '1.5rem'}}>Feels like {feelsLike}</li>
                        <li style={{display: 'inline-block'}}>{extraDescription}</li>
                    </ul>
                </div>
            </div>
            
        </div>
    )

}

export default Weather;