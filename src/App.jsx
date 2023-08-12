import WeatherApp from "./components/WeatherApp"
import MovingBackground from "./components/MovingBackground";

function App() {

  return (
    <div className="w-full min-h-screen">
      <MovingBackground />
      <WeatherApp />
    </div>
  )
}

export default App
