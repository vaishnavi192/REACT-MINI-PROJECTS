import {useState, useEffect} from 'react';

function Stopwatch() {
  const[time, setTime] = useState(0);
  const[running, setRunning] = useState(false);

  useEffect(() => {
    let interval = null;
    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);
  return (
    
    <>
    <h1>stopwatch</h1>
    <div>
  <span>{("0" + Math.floor((time / (1000 * 60)) % 60)).slice(-2)}:</span>
  <span>{("0" + Math.floor((time / (1000 )) % 60)).slice(-2)}:</span>
  <span>{("0" + Math.floor((time / 10) % 100)).slice(-2)}</span>
  </div>
  <div>
    <button onClick={()=> setRunning(true)}>Start</button>  {/*or we can also write like this in 1 button 
    {running?
(<button onClick={()=> setRunning(false)}>Start</button>): (<button onClick={()=> setRunning(false)}>Stop</button>)}
    <button onClick={()=> setTime(0)}>Reset</button> */}
    <button onClick={()=> setRunning(false)}>Stop</button>
    <button onClick={()=> setTime(0)}>Reset</button> 
  </div>
    </>
  );
}
export default Stopwatch;