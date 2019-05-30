import React, { Component } from "react";




class SetStepPanel extends Component {
    setNewStep = () => {
        this.props.setStep(parseInt(this.objInput.value))

    }

    render() {
        return (
            <div className="set-step-value-panel">
                <input type="number" step="5" ref={input => this.objInput = input} />
                <button onClick={() => { this.setNewStep() }}>Ustaw krok</button>
            </div>
        );
    }
};


export default SetStepPanel;



