function OnOff ({onAndOff}) {
    return (
        <div>
        <p>On/Off</p>
        <label>
            <input type="checkbox" onClick={(e) => onAndOff(e)}/>
        </label>
        </div>
    )
}

export default OnOff;