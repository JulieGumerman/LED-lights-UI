function SetMode () {
    return (
        <div>
        <label for="setMode">Set Mode</label>
        <select name="setMode">
            <option value="streak">Streak</option>
            <option value="rainbow">Rainbow</option>
            <option value="chase">Chase</option>
            <option value="flicker">Flicker</option>
        </select>
        </div>
    )
}

export default SetMode;