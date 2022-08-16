import React, { useState } from 'react'
import axios from 'axios'
import './Home.css';
import SearchIcon from '@mui/icons-material/Search';
import PlaceIcon from '@mui/icons-material/Place';
import AirIcon from '@mui/icons-material/Air';
import ThermostatIcon from '@mui/icons-material/Thermostat';
import CloudIcon from '@mui/icons-material/Cloud';
import Button from '@material-ui/core/Button';
export default function Home (){
   
        const [weather, setweather] = useState({})
  const [location, setLocation] = useState('')


  const searchLocation = (event) => {
 if(event.key=='Enter')
 {
   
      axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=895284fb2d2c50a520ea537456963d9c`).then((response) => {
      console.log(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=895284fb2d2c50a520ea537456963d9c`);
      setweather(response.data)
        console.log(response.data)
      })
      setLocation('')
    
  }
}

  return (
    <div className="app">
      <div className="search">
        <input
         className='inputfield'
          value={location}
          onChange={event => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder='Enter Location'
          type="text" />
          <Button onClick={()=>
            searchLocation} size="large" startIcon={<SearchIcon style={{position:"relative",top:"2px"}}/>}>
  
</Button>
          
      </div>
      <div className="container">
    
      
        {weather.name?
            <><p className="currentweather"> Current Weather</p>
            {/* <hr className='hrtag'></hr> */}
              </>
:null}
       

        
      
        <div className= {weather.name?"name":null}>
       
         <div style={{marginLeft:"40px",marginTop:"10px"}}>
            {weather.name?<PlaceIcon style={{position:"relative",top:"20px",right:"20px"}}/>:null}
              <p>{weather.name}</p>
         
          <div className="maintemp">
            {weather.main ? <h4>{weather.main.temp.toFixed()}°F</h4> : null}
          </div>
        <div style={{position:"relative",bottom:"65px",left:"195px"}}>
        {weather.main?<CloudIcon style={{position:"relative",top:"25px",right:"30px"}}/>:null}
          {weather.main? <h4>{weather.weather[0].main}</h4>:null}
        </div>
       

       
         <>
           <div className='feelslikeall'>
           {weather.main? <ThermostatIcon style={{position:"relative",top:"20px",right:"20px"}}/>:null}
           {weather.main ? <p>Feels Like</p>:null}
            <div className="feelslike">
              {weather.main ? <p className='bold'>{weather.main.feels_like.toFixed()}°F</p> : null}
              </div>
            </div>
            {weather.main? <ThermostatIcon style={{position:"relative",top:"20px",right:"20px"}}/>:null}
            {weather.main ?  <p>Humidity</p>:null}
            <div className="humidity">
              {weather.main ? <p className='bold'>{weather.main.humidity}%</p> : null}
             
            </div>
            <div className='Windall'>
            {weather.main?<AirIcon style={{position:"relative",top:"23px",right:"25px"}}/>:null}
            {weather.main ? <p>Wind Speed</p>:null}
            <div className="wind">
              {weather.wind ? <p className='bold'>{weather.wind.speed.toFixed()} MPH</p> : null}
              </div>
            </div>
            </>
            
           
        

</div>
</div>
      </div>
    </div>
  );
}
  