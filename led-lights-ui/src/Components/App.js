import React, {useEffect, useState} from "react";
import axios from "axios";
import OnOff from "./OnOff";
import SetMode from "./SetMode";
import Rainbow from "./Rainbow";
import Streak from "./Streak";
import Chase from "./Chase";

function App() {

  const [onOff, setOnOff] = useState(false)
// const onAndOff () {
//   axios.get("")
//   .then(res => console.log(res))
//   .catch(err => console.log(error))
// }

  // const rainbowLights = () => {
  //   axios.get("")
  //   .then(res => console.log(res))
  //   .catch(err => console.log(err))
  // }

  // const streak = () => {
  //   axios.get("")
  //   .then(res => console.log(res))
  //   .catch(err => console.log(err))
  // }

  // const chase = () => {
  //   axios.get("")
  //   .then(res => console.log(res))
  //   .catch(err => console.log(err))
  // }

  return (
    <div>
      <div>
        <h1>Splat's freaking awesome LED Lights UI</h1>
      </div>
      <div>
        <OnOff />
        <SetMode />

      </div>
      <Rainbow />
      <Streak />
      <Chase />

    </div>
  );
}

export default App;
