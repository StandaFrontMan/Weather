import { useEffect, useState } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { cityNameReducer, weatherDataFetch } from './store/weatherSlice';
import InputField from './components/InputField';
import MainInfoComponent from './components/MainInfoComponent';

function App() {
  const [cityName, setCityName] = useState('');
  const dispatch = useDispatch();

  const { status } = useSelector(state => state.weather);

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
      <InputField
        cityName={cityName}
        setCityName={setCityName}
        handleSearch={handleSearch}
      />

      <MainInfoComponent />

      {status === 'loading' && <h2>Loading...</h2>}
    </div>
  );
}

export default App;
