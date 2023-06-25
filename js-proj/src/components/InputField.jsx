import React from 'react'

const InputField = ({ cityName, setCityName, handleSearch }) => {
  return (
    <div className='input-area'>
        <div className='input_area'>
        <input
          type='text'
          placeholder='Enter City name'
          value={cityName}
          onChange={(e) => setCityName(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
    </div>
  )
}

export default InputField