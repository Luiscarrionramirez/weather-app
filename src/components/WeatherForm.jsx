import React, { useState } from 'react'

const WeatherForm = ({ onChangeCity }) => {

   const [city, setCity] = useState('');

   const onChangeInput = (e) => {
      const value = e.target.value;
      if(value != ''){
      setCity(value);
      }
   }

   const handleSubmit = (e) => {
      e.preventDefault();

      onChangeCity(city)
    
   }


  return (
    <form onSubmit={handleSubmit} className='flex justify-center items-center h-16'>
      <input 
        type="text" 
        onChange={onChangeInput} 
        placeholder='Ingresa el lugar en inglés' 
        className=' p-3 rounded-md w-1/2 placeholder:text-lg placeholder:text-slate-500 shadow shadow-blue-900 mb-6 outline-none'
      />
    </form>
  )
}

export default WeatherForm