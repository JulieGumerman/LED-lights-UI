import React, {useEffect, useState} from "react";
import axios from "axios";
import OnOff from "./OnOff";
import SetMode from "./SetMode";
import Rainbow from "./Rainbow";
import Streak from "./Streak";
import Chase from "./Chase";

function App() {

  const [onOff, setOnOff] = useState(true)
  const [setMode, setSetMode] = useState({})
  const [currentMode, setCurrentMode] = useState('')

  useEffect(() => { setOnOff(false)}, [])

  const onChange = (e) => {
    const {name, value} = e.target
    setSetMode({...setMode, [name]:value})
  }

  const onAndOff = () => {
    if (onOff == true) {
      setOnOff(false)
    } else {
      setOnOff(true)
    }
    console.log("on/off state", onOff)
    // axios.get("")
    // .then(res => console.log(res))
    // .catch(err => console.log(error))
  }

  const myMode = () => {
    // axios.post("http://{{URL}}:{{PORT}}/set_mode", setMode)
    // .then(res => console.log(res))
    // .catch(err => console.log(err))
  }


  return (
    <div>
      <div>
        <h1>Splat's freaking awesome LED Lights UI</h1>
      </div>
      <div>
        <OnOff onAndOff={onAndOff}/>
        <SetMode currentMode={currentMode} setCurrentMode={setCurrentMode}/>

      </div>
      <Rainbow />
      <Streak />
      <Chase />

    </div>
  );
}

export default App;
