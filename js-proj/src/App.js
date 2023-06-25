import { useEffect, useState } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { cityNameReducer, weatherDataFetch } from './store/weatherSlice';

function App() {
  const [cityName, setCityName] = useState('');
  const dispatch = useDispatch();

  const { city, status, error } = useSelector(state => state.weather);

  useEffect(() => {  // стираю данные о погоде при изменении значения cityName
    if (cityName === '') {
      dispatch(cityNameReducer([]));
    }
  }, [cityName, dispatch]);

  const handleSearch = () => {  // проверка что cityName не пустое перед отправкой запроса
    if (cityName.trim() !== '') {
      dispatch(weatherDataFetch(cityName));
    }
  };

  return (
    <div className="App">
      <div className='input_area'>
        <input
          type='text'
          placeholder='Enter City name'
          value={cityName}
          onChange={(e) => setCityName(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      <div className='info'>
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

      {status === 'loading' && <h2>Loading...</h2>}
    </div>
  );
}

export default App;
