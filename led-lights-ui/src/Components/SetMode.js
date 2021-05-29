function SetMode ({handleChange}) {


    return (
        <div className="stack">
        <label for="setMode">Set Mode</label>
        <select name="mode" onChange={e => handleChange(e)} className="inputs">
            <option
                value="none"
                defaultValue
            >
                ---
            </option>
            <option 
                value="streak"
            >
                Streak
            </option>
            <option 
                value="rainbow"
            >
                Rainbow
            </option>
            <option 
                value="chase"
            >
                Chase
            </option>
            <option 
                value="flicker"
            >
                Flicker
            </option>
        </select>
        </div>
    )
}

export default SetMode;