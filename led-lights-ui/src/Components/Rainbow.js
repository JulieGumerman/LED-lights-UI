function Rainbow () {
    return (
        <div>
        <h2>Rainbow</h2>
        <div class="slidecontainer">
          <input type="range" min="1" max="100" value="50" class="slider" id="myRange" />
        </div>
      </div>
    );
}

export default Rainbow;