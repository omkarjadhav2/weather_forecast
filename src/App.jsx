import './App.css'
import Input from './components/input'
import  Card  from './components/card'
import Button  from './components/button'
import { useWheather } from './context/weather'
import { useEffect } from 'react'
function App() {
  useEffect(()=> {
    weather.fetchCurrentUserLocationData()
  },[])

  const weather = useWheather();
  console.log(weather);
  return (
    <div className='App'>
      <h1>weather forecast</h1>
      <br></br>
      <Input></Input>
      <br></br>
      <Button value = "search" onClick = {weather.fetchdata}></Button>
      <br></br>
      <Card></Card>
      <br></br>
      <Button value = "refresh" onClick = {weather.refreshData}  ></Button>
      </div>
  )
}

export default App
