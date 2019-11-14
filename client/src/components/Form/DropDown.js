import React from "react";

export function DropDown(props) {
    return (
        <div className="form-group">
            <select className="form-control custom-select position" id="positionInput" {...props}>
                <option value="nothing">Position</option>
                <option value="proStyleQB">proStyleQB</option>
                <option value="dualThreatQB">dualThreatQB</option>
                <option value="runningBack">runningBack</option>
                <option value="wideReceiver">wideReceiver</option>
                <option value="offensiveTackle">offensiveTackle</option>
                <option value="tightEnd">tightEnd</option>
                <option value="offensiveGuard">offensiveGuard</option>
                <option value="center">center</option>
                <option value="defensiveTackle">defensiveTackle</option>
                <option value="defensiveEnd">defensiveEnd</option>
                <option value="outsideLinebacker">outsideLinebacker</option>
                <option value="insideLinebacker">insideLinebacker</option>
                <option value="cornerback">cornerback</option>
                <option value="safety">safety</option>
                <option value="kicker">kicker</option>
            </select>
        </div>
    );
}