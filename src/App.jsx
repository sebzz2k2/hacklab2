import { useEffect, useState } from 'react'

import './App.css'

function App() {

  const [light, setLight] = useState("red");
  const [time, setTime] = useState(0);

  //! function for incrementing time 
  const incrementTime = () => {
    setTime(time => time + 1);

  }

  useEffect(() => {
    incrementTime()
  }, [])

  // ! function for changing light
  useEffect(() => {
    let interval = null;
    if (time <= 40) {
      interval = setInterval(() => {
        incrementTime()
      }, 1000);
    }
    if (time === 20) {
      setLight("green")
    }
    if (time === 35) {
      setLight("yellow")
    }
    if (time === 40) {
      setLight("red")
      setTime(0)
    }
    return () => clearInterval(interval);
  }, [time])

  return (
    <div className="App">
      <p>Time : {time}</p>
      <div className="lightContainer">
        <div className='container'>
          <div className="light" style={{ background: light === "red" ? "red" : "grey" }}></div>
          <button onClick={() => {
            setLight("red")
            setTime(0)
          }}>Change</button>
        </div>
        <div className='container'>
          <div className="light" style={{ background: light === "yellow" ? "yellow" : "grey" }}></div>
          <button onClick={() => {
            setLight("yellow");
            setTime(35)
          }}>Change</button></div>
        <div className='container'>
          <div className="light" style={{ background: light === "green" ? "green" : "grey" }} ></div>
          <button onClick={() => {
            setLight("green")
            setTime(20)
          }}>Change</button></div>
      </div>
    </div >
  )
}

export default App
