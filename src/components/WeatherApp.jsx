import { useEffect, useState } from "react"
import WeatherForm from "./WeatherForm"
import WeatherMainInfo from "./WeatherMainInfo";

const WeatherApp = () => {
   const [weather, setWeather] = useState(null);
   const [loading, setLoading] = useState(true); // Estado de carga
   const [error, setError] = useState(null); // Estado de error

   useEffect(()=>{
      loadInfo();
   },[])



   const loadInfo = async (city = "London") => {
      try {
         const request = await fetch(`http://api.weatherapi.com/v1/current.json?key=8a41fd77efce42cf95421414232507&q=${city}&aqi=no`);
         if (!request.ok) {
            throw new Error("Error en la consulta"); // Lanzar un error si la respuesta no es exitosa
          }

         const json = await request.json();

         setWeather(json)
         setLoading(false); // La consulta ha finalizado
         setError(null); // Reiniciar el estado de error
         console.log(weather)
      }
      catch (err) {
         console.log(err)
         setError('No se pudo cargar el clima :(');
         setLoading(false); // La consulta ha finalizado, incluso si es con error
      }
   }


   const handleOnChangeCity = (city) => {
      setWeather(null);
      setLoading(true); // Comenzar la carga
      loadInfo(city);
      console.log(weather);
   }
 
  return (
    <div className="p-8 sm:w-screen md:w-5/6 sm:m-auto  md:m-auto md:h-5/6 md:rounded-lg  md:bg-black md:bg-opacity-30 bg-opacity-30 bg-black  z-50 absolute inset-0 md:border-white md:border-2 md:hover:bg-opacity-40">
      <h1 className=" text-center text-4xl md:text-5xl mt-8 mb-8 font-semibold font-sans text-[#191b1f]">Weather App</h1>
      <WeatherForm onChangeCity={handleOnChangeCity}/>
      {loading ? (
        <p className="text-center text-2xl mt-10 mb-8 text-[#191b1f]">Cargando...</p>
      ) : error ? (
        <p className="text-center text-4xl mt-10 mb-8 text-red-700">{error}</p>
      ) : (
        <WeatherMainInfo weather={weather} />
      )}
    </div>
  )
}

export default WeatherApp