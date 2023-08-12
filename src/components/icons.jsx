import { useEffect, useState } from "react";

const Icons = (icon) => {

  const [hour, setHour] = useState(0)


  useEffect(()=>{
    const date = new Date;
    setHour(date.getHours()) 
  },[icon])

    switch (icon) {
      case 'Overcast':
        icon='icons/overcast.svg';
        break;
      case 'Partly cloudy':
        if(hour < 5 && hour > 18){
          icon='icons/partly-cloudy-day.svg';
        }else {
          icon='icons/partly-cloudy-night.svg';
        }
        break;
        case 'Light rain':
          if(hour < 5 && hour > 18){
            icon='icons/rain.svg';
          }else {
            icon='icons/rain.svg';
          }
          break;
      case 'Cloudy':
        if(hour < 5 && hour > 18){
          icon='icons/partly-cloudy-day.svg';
        }else {
          icon='icons/partly-cloudy-night.svg';
        }
          break;
      case 'Clear':
        if(hour < 5 && hour > 18){
          icon='icons/clear-day.svg';
        }else {
          icon='icons/clear-night.svg';
        }
        break;
      case 'Fog':
        if(hour > 5 && hour < 18){
          icon='icons/fog-day.svg';
        }else {
          icon='icons/fog-night.svg';
        }
        break;
      case 'Light rain shower':
        if(hour > 5 && hour < 18){
          icon='icons/partly-cloudy-day-rain.svg';
        }else {
          icon='icons/partly-cloudy-night-rain.svg';
        }
        break;
      case 'Patchy rain possible':
        if(hour > 5 && hour < 18){
          icon='icons/partly-cloudy-day-rain.svg';
        }else {
          icon='icons/partly-cloudy-night-rain.svg';
        }
        break;
      case 'Sunny':
          icon='icons/clear-day.svg';
        break;
      case 'Mist':
          icon='icons/mist.svg';
        break;
    
      default:
        break;
  }
  return icon
}

export default Icons