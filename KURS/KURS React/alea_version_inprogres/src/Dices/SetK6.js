import React, { Component } from "react";
import { Col } from 'react-grid-system';

class SetK4 extends Component {

    render() {
        return (
            <Col xs={6} md={3} lg={1}>
                <form >
                    <input type="checkbox" id="k6" value="6" ref={inputk6 => this.refk6 = inputk6} 
                    // onChange={() => {
                    //     this.props.setType(parseInt(this.refk6.value))
                    // }} 
                    />
                    <label className="dice k6_vik" htmlFor="k6"> </label>

                </form>
            </Col>
        )
    }
}

export default SetK4;