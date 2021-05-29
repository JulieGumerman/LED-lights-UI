function Chase ({handleChange}) {
    return (
        <div>
        <h2>Chase</h2>
        <p>What this needs:</p>
        <ul>
          <li>double slider (twinkle min and max</li>
          <li>knobs: boost rate, fade rate, color count, seed amount</li>
          <li>knob or slider for max iteration</li>
        </ul>
        <label for="twinkle">Twinkle</label>
          <div className="slidecontainer">
      <input name="twinkle" type="range" min="1" max="255" value="50" className="slider" id="myHue" onChange={e => handleChange(e)}/>
    </div>
          <label for="boost">Boost</label>
          <div className="slidecontainer">
      <input name="boost" type="range" min="0" max="255" value="50" className="slider" id="myRate" onChange={e => handleChange(e)} />
    </div>
      </div>
    )
}

export default Chase;