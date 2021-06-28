function Streak ({handleChange, setMode}) {
    return (
        <div>
        <h2>Streak</h2>
        <label for="hue">hue</label>
        <div className="hue">
          <input 
            type="range" 
            name="hue"
            min="1" 
            max="255" 
            value={setMode.hue ? parseInt(setMode.hue) : setMode.hue = 50}
            className="slider" 
            id="myHue" 
            onChange={e => handleChange(e)}/>
        </div>
        <label for="rate">rate</label>
        <div className="slidecontainer">
          <input 
            type="range" 
            name="rate"
            min="0" 
            max="255" 
            value={setMode.rate ? parseInt(setMode.rate) : setMode.rate = 50}
            className="slider" 
            id="myRate" 
            onChange={e=> handleChange(e)}
          />
        </div>
        <label for="length">length</label>
        <div className="slidecontainer">
          <input 
            name="length"
            type="range" 
            min="0" 
            max="100" 
            value={setMode.length ? parseInt(setMode.length) : setMode.length = 50}
            className="slider" 
            id="myLength" 
            onChange={e => handleChange(e)}/>
        </div>
      </div>
    );
}

export default Streak;