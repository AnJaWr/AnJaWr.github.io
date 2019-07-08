import React, { Component } from "react";
import { Col } from 'react-grid-system';

class SetK10 extends Component {


    render() {
        return (
            <Col xs={6} md={3} lg={1}>
                <form >
                    <input type="radio" id="k10" value="10" ref={inputk10 => this.refk10 = inputk10} onChange={() => {
                        this.props.setType(parseInt(this.refk10.value))
                    }} />
                    <label className="dice k10_vik" htmlFor="k10"> </label>

                </form>
            </Col>
        )
    }
}

export default SetK10;