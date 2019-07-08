import React, { Component } from "react";
import { Col } from 'react-grid-system';

class SetK12 extends Component {


    render() {
        return (
            <Col xs={6} md={3} lg={1}>
                <form >
                    <input type="radio" id="k12" value="12" ref={inputk12 => this.refk12 = inputk12} onChange={() => {
                        this.props.setType(parseInt(this.refk12.value))
                    }} />
                    <label className="dice k12_vik" htmlFor="k12"> </label>

                </form>
            </Col>
        )
    }
}

export default SetK12;