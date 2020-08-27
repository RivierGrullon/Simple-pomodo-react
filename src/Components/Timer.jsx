import React, {useState, useEffect} from "react";
function Timer() {

  const [workTime, breakTime] = useState(1500);
  const [isActive, setMode] = useState(false);

  useEffect(()=>{
    if(isActive){
      UpdateTime(workTime)
    }
  })

  const UpdateTime = (secs) =>{
    const timer=setTimeout(() => {
      breakTime(secs - 1)
    }, 1000);
    if(secs <= 1) setMode(false)
    // Clear timeout if the component is unmounted
    return () => clearTimeout(timer);
  }

  const twoDigits = (num)=> num > 9 ? "" + num : "0" + num;
  const calculateTime = (work_time) => {
    let hours = twoDigits(Math.floor(work_time / 3600));
    let minutes = twoDigits(Math.floor((work_time % 3600) / 60));
    let seconds = twoDigits(Math.floor(work_time % 3600 % 60));
    return(
      `${hours}:${minutes}:${seconds}`
    )
  }

  return(
    <div className="App timer__time">
    {calculateTime(workTime)}
    <button className="row justify-content-center border rounded-pill btn input-group" id="countdown"onClick={()=> setMode(true)}>start</button>
    <button className="row justify-content-center border rounded-pill btn input-group" id="countdown"onClick={()=> setMode(false)}>Stop</button>
    <button className="row justify-content-center border rounded-pill btn input-group" id="countdown"onClick={()=> breakTime(1500)}>restart</button>
    </div>

  )
}

export default Timer;
