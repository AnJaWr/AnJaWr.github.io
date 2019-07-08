import React, { Component } from "react";
import { Col } from 'react-grid-system';

class SetK100 extends Component {


    render() {
        return (
            <Col xs={6} md={3} lg={1}>
                <form >
                    <input type="radio" id="k100" value="100" ref={inputk100 => this.refk100 = inputk100} onChange={() => {
                        this.props.setType(parseInt(this.refk100.value))
                    }} />
                    <label className="dice k100_vik" htmlFor="k100"> </label>

                </form>
            </Col>
        )
    }
}

export default SetK100;