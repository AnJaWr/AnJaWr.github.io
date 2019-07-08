import React, { Component } from "react";
import { Col } from 'react-grid-system';


class SetK8 extends Component {

    render() {
        return (
            <Col xs={6} md={3} lg={1}>
                <form >
                    <input type="radio" id="k8" value="8" ref={inputk8 => this.refk8 = inputk8} onChange={() => {
                        this.props.setType(parseInt(this.refk8.value))
                    }} />
                    <label className="dice k8_vik" htmlFor="k8"> </label>

                </form>
            </Col>
        )
    }
}

export default SetK8;