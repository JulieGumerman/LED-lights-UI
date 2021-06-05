import React, { useState } from "react"
import { Donut } from 'react-dial-knob';
import { Slider, Handles, Tracks } from 'react-compound-slider';

function Flicker ({handleChange}) {
    const [colorCountValue, setColorCountValue] = useState(1);
    const [boostRateValue, setBoostRateValue] = useState(1);
    const [seedAmtValue, setSeedAmtValue] = useState(1);
    const [fadeRateValue, setFadeRateValue] = useState(1);
    return (
        <div>
            <div className="box-of-donuts">
                <div className="donut">
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
                    <p>sets the number of colors to use from the palette</p>
                </Donut>
                </div>

                <div className="donut">
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
                <p>frequency at which boosting occurs</p>
            </Donut>
                </div>
                <div className="donut">
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
                <label id={'my-label'}>Seed Amount</label>
                <p>number of “sparks” to seed the array</p>
            </Donut>
            </div>
            
            <div className="donut">
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
                    <label id={'my-label'}>Fade Rate</label>
                    <p>decay rate of the lit LEDs on the array</p>
                </Donut>
            </div>
        </div>
        {/* // “max_iter”, [int] - number of iterations/frames to render before resetting the palette - can be between 1 and 100000 (arbitrarily large)
        // “twink_min”, [int] - minimum number of LEDs to fade
        // “twink_max”, [int] - maximum number of LEDs to fade
        // “boost_thr”, [int] - number of LEDs to boost intermittently*/}
        </div>
    );
}

export default Flicker;