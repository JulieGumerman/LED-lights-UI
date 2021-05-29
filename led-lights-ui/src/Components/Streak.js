function Streak ({handleChange}) {
    return (
        <div>
        <h2>Streak</h2>
        <label for="hue">hue</label>
        <div className="hue">
          <input type="range" min="1" max="255" value="50" className="slider" id="myHue" onChange={e => handleChange(e)}/>
        </div>
        <label for="rate">rate</label>
        <div className="slidecontainer">
          <input type="range" min="0" max="255" value="50" className="slider" id="myRate" onChange={e=> handleChange(e)}/>
        </div>
        <label for="length">length</label>
        <div className="slidecontainer">
          <input type="range" min="0" max="100" value="50" className="slider" id="myLength" onChange={e => handleChange(e)}/>
        </div>
      </div>
    );
}

export default Streak;