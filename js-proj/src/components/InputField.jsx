import React from 'react'

const InputField = ({ cityName, setCityName, handleSearch }) => {
  return (
    <div className='input-area'>
        <div className='input_area'>
        <input
          className='main-input'
          type='text'
          placeholder='Enter City name'
          value={cityName}
          onChange={(e) => setCityName(e.target.value)}
        />
        <div className='button-div'>
          <button className='button' onClick={handleSearch}>Find out the weather ... </button>
        </div>
      </div>
    </div>
  )
}

export default InputField