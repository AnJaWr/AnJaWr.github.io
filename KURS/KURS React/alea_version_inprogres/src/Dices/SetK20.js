import React, { Component } from "react";
import { Col } from 'react-grid-system';

class SetK20 extends Component {


    render() {
        return (
            <Col xs={6} md={3} lg={1}>
                <form >
                    <input type="radio" id="k20" value="20" ref={inputk20 => this.refk20 = inputk20} onChange={() => {
                        this.props.setType(parseInt(this.refk20.value))
                    }} />
                    <label className="dice k20_vik" htmlFor="k20"> </label>

                </form>
            </Col>
        )
    }
}

export default SetK20;