import React from 'react'
import { useSelector } from 'react-redux'

const MainInfoComponent = () => {

    const { city, status, error } = useSelector(state => state.weather)

  return (
    <div className='main-info-block'>
        {status === 'resolved' && city && city.main && city.weather && (  
          <div className='info'>
            <h2>Current Weather in {city.name}</h2>
            <div className='forecast-container'>
              <div className='temp-container'>
                <div className='curr-temp'>{Math.round(city.main.temp)}°C</div>
                <div className='feels-like-temp'>Feels like {Math.round(city.main.feels_like)}°C</div>
                <div className='temp-discription'>{city.weather[0].main}</div>
              </div>
            </div>
          </div>
        )}
        {status === 'rejected' && <h2>{error}</h2>}
    </div>
  )
}

export default MainInfoComponent