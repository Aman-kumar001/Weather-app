import './index.css';
import cloud from './icons/clouds.svg';
import haze from './icons/haze.svg';
import rain from './icons/rain.svg';
import clear from './icons/clear.svg';
import smoke from './icons/smoke.svg';
import thunderstorm from './icons/thunderstorm.svg';
import drizzle from './icons/drizzle.svg';
import snow from './icons/snow.svg';
import dust from './icons/dust.svg';
import atmosphere from './icons/atmosphere.svg';
import blue from './blue.jpg';
import orange from './orange.jpg';
import red from './red.jpg';
import light from './light.jpg';
import snow_weather from './snow.jpg';
import rain_weather from './rain.jpg';
import { Typography } from '@material-ui/core';


//page
const Info = ({all,clicked}) => {
    if(clicked){
        console.log(all)
    }
    return ( 
        <div>
            {all.cod===200 && <div className="content">
                {clicked && 
                    <div>
                        {all.weather[0].main==='Clear' && <div className="pic"><Typography variant="h6">{all.weather[0].description}</Typography><br/> <img src={clear} alt="Clear"/></div> }

                        {all.weather[0].main==='Clouds' && <div className="pic" ><Typography variant="h6">{all.weather[0].description}</Typography><br/> <img src={cloud} alt="Cloudy"/></div> }

                        {all.weather[0].main==='Haze' && <div className="pic"><Typography variant="h6">{all.weather[0].description}</Typography><br/> <img src={haze} alt="Haze"/></div> }

                        {all.weather[0].main==='Rain' && <div className="pic"><Typography variant="h6">{all.weather[0].description}</Typography><br/> <img src={rain} alt="Rain"/></div> }

                        {all.weather[0].main==='Smoke' && <div className="pic"><Typography variant="h6">{all.weather[0].description}</Typography><br/> <img src={smoke} alt="Smoke"/></div> }

                        {all.weather[0].main==='Thunderstorm' && <div className="pic"><Typography variant="h6">{all.weather[0].description}</Typography><br/> <img src={thunderstorm} alt="Thunderstorm"/></div> }

                        {all.weather[0].main==='Snow' && <div className="pic"><Typography variant="h6">{all.weather[0].description}</Typography><br/> <img src={snow} alt="Snow"/></div> }

                        {all.weather[0].main==='Drizzle' && <div className="pic"><Typography variant="h6">{all.weather[0].description}</Typography><br/> <img src={drizzle} alt="Drizzle"/></div> }

                        {all.weather[0].main==='Atmosphere' && <div className="pic"><Typography variant="h6">{all.weather[0].description}</Typography><br/> <img src={atmosphere} alt="Atmosphere"/></div> }

                        {all.weather[0].main==='Dust' && <div className="pic"><Typography variant="h6">{all.weather[0].description}</Typography><br/> <img src={dust} alt="dust"/></div> }
                    </div>
                }
                    {/* background control */}
                {clicked && <div className="bg">
                        { all.weather[0].main=='Clear' && <img src={light} /> }
                        { all.weather[0].main=='Snow' && <img src={snow_weather} /> }
                        { all.weather[0].main=='Rain' && <img src={rain_weather} /> }
                        { all.weather[0].main=='Thunderstorm' && <img src={blue} /> }
                        { all.weather[0].main=='Dust' && <img src={orange} /> }
                        { all.weather[0].main=='Haze' && <img src={orange} /> }
                        { all.weather[0].main=='smoke' && <img src={red} /> }
                        { all.weather[0].main=='Drizzle' && <img src={red} /> }
                        { all.weather[0].main=='Clouds' && <img src={blue} /> }
                        { all.weather[0].main=='Atmosphere' && <img src={orange} /> }
                </div>
                }
                
                {clicked && <div className="city"><Typography variant="h3">{all.name}</Typography></div>}
                {clicked && <div className="tmp"><Typography>temperature: {all.main.temp}°C</Typography> </div>}
                {clicked && <div className="tmp"><Typography>{all.main.temp_min}°C - {all.main.temp_max}°C</Typography> </div>}
            </div>}
            {!clicked && <div className="city">Enter City</div>}
            {all.cod!==200 && clicked && <p className="city">😟Something went wrong</p>}
        </div>
     );
}
 
export default Info;