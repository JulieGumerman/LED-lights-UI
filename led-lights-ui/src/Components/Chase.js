function Chase () {
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
          <div class="slidecontainer">
      <input name="twinkle" type="range" min="1" max="255" value="50" class="slider" id="myHue" />
    </div>
          <label for="boost">Boost</label>
          <div class="slidecontainer">
      <input name="boost" type="range" min="0" max="255" value="50" class="slider" id="myRate" />
    </div>
      </div>
    )
}

export default Chase;