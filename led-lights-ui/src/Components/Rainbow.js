function Rainbow ({handleChange, setMode}) {

    return (
        <div>
        <h2>Rainbow</h2>
        <div className="slidecontainer">
          <input 
            onChange={e => handleChange(e)}
            type="range" 
            min="1"
            max="100"
            value={setMode.Rate ? setMode.Rate : setMode.Rate = 50}
            name="Rate"
            className="slider" 
          id="myRange" />
        </div>
      </div>
    );
}

export default Rainbow;