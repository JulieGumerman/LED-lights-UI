import React, { useState } from "react"
import { Donut } from 'react-dial-knob';
import { Slider, Handles, Tracks } from 'react-compound-slider';

function Flicker ({handleChange, setMode}) {
    const [colorCountValue, setColorCountValue] = useState(1);
    const [boostRateValue, setBoostRateValue] = useState(1);
    const [seedAmtValue, setSeedAmtValue] = useState(1);
    const [fadeRateValue, setFadeRateValue] = useState(1);
    return (
        <div>
            <div className="box-of-donuts">
                <div className="donut">
                <input 
                    name="color_count" 
                    type="range" 
                    min="1" 
                    max="16" 
                    value={setMode.color_count}
                    className="slider" 
                    id="myHue" 
                    onChange={e => handleChange(e)}/>
                    <label id={'my-label'}>Color count</label>
                    <p>sets the number of colors to use from the palette</p>
                </div>
                <div className="donut">
                <input 
                    name="max_iter" 
                    type="range" 
                    min="1" 
                    max="10000" 
                    value={setMode.max_iter}
                    className="slider" 
                    id="myHue" 
                    onChange={e => handleChange(e)}/>
                    <label id={'my-label'}>Maximum Iterations</label>
                    <p>number of iterations/frames to render before resetting the palette</p>
                </div>
                <div className="box-of-donuts">
                <div className="donut">
                <input 
                    name="boost_thr" 
                    type="range" 
                    min="1" 
                    max="16" 
                    value={setMode.boost_thr}
                    className="slider" 
                    id="myHue" 
                    onChange={e => handleChange(e)}/>
                    <label id={'my-label'}>Boost_thr</label>
                    <p>Number of LEDs to to boost intermittently</p>
                </div>
                <div className="donut">
                <input 
        name="boost_rate" 
        type="range" 
        min="1" 
        max="16" 
        value={setMode.boost_rate}
        className="slider" 
        id="myHue" 
        onChange={e => handleChange(e)}/>

                <label id={'my-label'}>Boost Rate</label>
                <p>frequency at which boosting occurs</p>

                </div>
                <div className="donut">
                <input 
        name="twinkle" 
        type="range" 
        min="1" 
        max="255" 
        value={setMode.twinkle ? parseInt(setMode.twinkle) : setMode.twinkle = 50}
        className="slider" 
        id="myHue" 
        onChange={e => handleChange(e)}/>

                <label id={'my-label'}>Seed Amount</label>
                <p>number of “sparks” to seed the array</p>

            </div>
            
            <div className="donut">
            <input 
        name="fade_rate" 
        type="range" 
        min="1" 
        max="16" 
        value={setMode.fade_rate}
        className="slider" 
        id="myHue" 
        onChange={e => handleChange(e)}/>
                    <label id={'my-label'}>Fade Rate</label>
                    <p>decay rate of the lit LEDs on the array</p>
            </div>
        </div>
        </div>
        </div>
    );
}

export default Flicker;