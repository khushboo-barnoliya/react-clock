
import { useEffect, useState } from 'react';
import './style.css'



function App() {
  
  

  const [time, setTime] = useState(new Date());

  useEffect(() => {
    var setIntervalId = setInterval(() => {
      setTime(new Date());
    }, 1000)
  
    return ()=>{
      clearInterval(setIntervalId);
    }
  })


  return (
    <>
      <div className="container-fluid p-0 d-flex justify-content-center align-items-center" id="heroMain">
        <div className="container-fluid p-0 d-flex justify-content-center align-items-center" id="heroInner">
          <div className="container d-flex justify-content-end flex-column" id="contInner">
            <span id="dateSpan" className="d-flex justify-content-end align-items-center fs-3">{time.toLocaleDateString()}</span>
            <span id='timeSpan' className="d-flex justify-content-end align-items-center">{time.toLocaleTimeString()}</span>
            <div className="timeSpan2 position-relative">
              <div id='innerSpan' className="position-absolute"></div>
              <span id='timeSpan' className="d-flex justify-content-end align-items-center">{time.toLocaleTimeString()}</span></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
