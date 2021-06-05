import React, { useState } from "react"
import { Donut } from 'react-dial-knob';
function Flicker ({handleChange}) {
    const [colorCountValue, setColorCountValue] = useState(1);
    const [boostRateValue, setBoostRateValue] = useState(1);
    const [seedAmtValue, setSeedAmtValue] = useState(1);
    const [fadeRateValue, setFadeRateValue] = useState(1);
    return (
        <div>
        <div>
        <Donut
            diameter={200}
            min={1}
            max={16}
            step={1}
            value={colorCountValue}
            theme={{
                donutColor: 'blue'
            }}
            onValueChange={setColorCountValue}
            ariaLabelledBy={'my-label'}
        >
            <label id={'my-label'}>Color count</label>
        </Donut>
        </div>

        <div>
        // “boost_rate”, [int] - frequency at which boosting occurs, value can be between 1 and 16
        <Donut
        diameter={200}
        min={1}
        max={16}
        step={1}
        value={boostRateValue}
        theme={{
            donutColor: 'blue'
        }}
        onValueChange={setBoostRateValue}
        ariaLabelledBy={'my-label'}
    >
        <label id={'my-label'}>Boost Rate</label>
    </Donut>
        </div>
        <div>
        // “seed_amt”, [int] - number of “sparks” to seed the array
        <Donut
        diameter={200}
        min={1}
        max={16}
        step={1}
        value={seedAmtValue}
        theme={{
            donutColor: 'blue'
        }}
        onValueChange={setSeedAmtValue}
        ariaLabelledBy={'my-label'}
    >
        <label id={'my-label'}>Boost Rate</label>
    </Donut>
    </div>
    <div>
        // “fade_rate”, [int] - decay rate of the lit LEDs on the array, value can be between 1 and 16 
        <Donut
            diameter={200}
            min={1}
            max={16}
            step={1}
            value={fadeRateValue}
            theme={{
                donutColor: 'blue'
            }}
            onValueChange={setFadeRateValue}
            ariaLabelledBy={'my-label'}
        >
            <label id={'my-label'}>Boost Rate</label>
        </Donut>
    </div>
        {/* // “max_iter”, [int] - number of iterations/frames to render before resetting the palette - can be between 1 and 100000 (arbitrarily large)
        // “twink_min”, [int] - minimum number of LEDs to fade
        // “twink_max”, [int] - maximum number of LEDs to fade
        // “boost_thr”, [int] - number of LEDs to boost intermittently*/}
        </div>
    );
}

export default Flicker;