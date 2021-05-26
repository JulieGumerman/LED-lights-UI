function Streak () {
    return (
        <div>
        <h2>Streak</h2>
        <label for="hue">hue</label>
        <div class="hue">
          <input type="range" min="1" max="255" value="50" class="slider" id="myHue" />
        </div>
        <label for="rate">rate</label>
        <div class="slidecontainer">
          <input type="range" min="0" max="255" value="50" class="slider" id="myRate" />
        </div>
        <label for="length">length</label>
        <div class="slidecontainer">
          <input type="range" min="0" max="100" value="50" class="slider" id="myLength" />
        </div>
      </div>
    );
}

export default Streak;