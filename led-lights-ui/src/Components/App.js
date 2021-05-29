import React, {useEffect, useState} from "react";
import axios from "axios";
import OnOff from "./OnOff";
import SetMode from "./SetMode";
import Rainbow from "./Rainbow";
import Streak from "./Streak";
import Chase from "./Chase";
import Flicker from "./Flicker";

function App() {

  const [onOff, setOnOff] = useState(true)
  const [setMode, setSetMode] = useState({"mode": "none"})
  const [currentMode, setCurrentMode] = useState('')

  useEffect(() => { setOnOff(false)}, [])

  const handleChange = (e) => {
    const {name, value} = e.target
    
    name=="mode" ? setSetMode({[name]: value}) : setSetMode({...setMode, [name]:value})

    console.log(setMode)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("SUBMIT THE MODE!!!", setMode, setMode.mode)
     // axios.post("http://{{URL}}:{{PORT}}/set_mode", setMode)
    // .then(res => console.log(res))
    // .catch(err => console.log(err))   
  }

  // const onAndOff = () => {
  //   if (onOff == true) {
  //     setOnOff(false)
  //   } else {
  //     setOnOff(true)
  //   }
  //   console.log("on/off state", onOff)
    // axios.get("")
    // .then(res => console.log(res))
    // .catch(err => console.log(error))
  // }



  return (
    <div>
      <div>
        <h1>Splat's freaking awesome LED Lights UI</h1>
      </div>
      <form onSubmit={handleSubmit}>
      <div>
        {/* <OnOff onAndOff={onAndOff}/> */}
        <SetMode 
          handleChange={handleChange}
          />
      </div>
        <div>
          {setMode.mode=="rainbow" ? <Rainbow handleChange={handleChange} setMode={setMode}/> : null}
          {setMode.mode=="streak" ? <Streak handleChange={handleChange}/>: null}
          {setMode.mode=="chase" ? <Chase handleChange={handleChange}/> : null}
          {setMode.mode=="flicker" ? <Flicker handleChange={handleChange}/> : null}
          {setMode.mode=="none" ? null :     <button type="submit">Do I work?</button>}

        </div>

    </form>      




    </div>
  );
}

export default App;
