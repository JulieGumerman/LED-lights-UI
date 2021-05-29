function Rainbow ({handleChange}) {
    const min=1
    const max=100
    const happyMedium=50
    return (
        <div>
        <h2>Rainbow</h2>
        <div className="slidecontainer">
          <input 
            onChange={e => handleChange(e)}
            type="range" 
            min={min}
            max={max}
            value={happyMedium}
            name="Rate"
            className="slider" 
          id="myRange" />
        </div>
      </div>
    );
}

export default Rainbow;