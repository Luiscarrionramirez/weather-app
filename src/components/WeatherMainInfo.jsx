import Icons from "./icons"

const WeatherMainInfo = ({ weather }) => {

  
  const icon = weather?.current.condition.text;

  


  return (
     <div className="flex flex-col justify-center items-center ">
      <div className="flex items-center  m-5 gap-4 md:gap-7 mb-10 ">
        <h2 className="text-4xl md:text-5xl font-sans text-[#191b1f]">{weather?.location.name}</h2>
        <h2 className="text-4xl">|</h2>
        <h2 className="text-2xl text-slate-800">{weather?.location.country}</h2>
      </div>
     <div>
       <div className="flex flex-col items-center mb-2 ">
        <div className="flex items-center justify-between gap-10">
          <div className="text-8xl font-light">{weather?.current.temp_c}º</div>
          <div>
              <div className="text-1xl md:text-2xl">Max: {weather?.current.temp_c}º</div>
              <div className="text-1xl md:text-2xl">Min: {weather?.current.temp_f}º</div>
            </div>
        </div>
          <div className="flex items-center justify-around gap-7 ">
            <img src={Icons(icon, weather)} alt="Weather-icon" className="my-6 filter drop-shadow-lg h-72 md:h-96"/>
            <div className="text-2xl md:text-3xl tracking-widest ">{weather?.current.condition.text}</div>
            <br />
          </div>
        </div>
      </div>
   </div>
  )
}

export default WeatherMainInfo