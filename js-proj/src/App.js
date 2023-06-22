import { useState } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux'
import { cityNameReducer } from './store/weatherSlice';

function App() {

  const [cityName, setCityName] = useState('')
  const dispatch = useDispatch();

  return (
    <div className="App">

      <div className='input_area'>
        <input
          type='text'
          placeholder='Enter City name'
          onChange={(e) => setCityName(e.target.value)} // work
        />
        <button
          onClick={() => dispatch(cityNameReducer(cityName))} // work
        >Search</button>
      </div>

    </div>
  );
}

export default App;
