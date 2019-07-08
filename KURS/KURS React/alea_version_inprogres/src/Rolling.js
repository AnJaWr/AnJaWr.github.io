import React, { Component } from "react";
import './App.css';

import { Container, Row, Col } from 'react-grid-system';

import Setting from "./Setting"

import SetK4 from "./Dices/SetK4"
import SetK6 from "./Dices/SetK6"
import SetK8 from "./Dices/SetK8"
import SetK10 from "./Dices/SetK10"
import SetK12 from "./Dices/SetK12"
import SetK20 from "./Dices/SetK20"
import SetK100 from "./Dices/SetK100"



class Rolling extends Component {
    constructor(props) {
        super(props);
        this.state = {
            choseSet: undefined,

            setK4: undefined,
            setK6: undefined,
            setK8: undefined,
            setK10: undefined,
            setK12: undefined,
            setK20: undefined,
            setK100: undefined,

            setK4Amount: 0,
            setK6Amount: 0,
            setK8Amount: 0,
            setK10Amount: 0,
            setK12Amount: 0,
            setK20Amount: 0,
            setK100Amount: 0,


            k4List: [],
        };
    }

    setAmK4 = newAmount => {
                try {
                    console.log(newAmount);
                    this.setState({ setK4Amount: newAmount });
                    this.setState({ k4List: Array(newAmount).fill("k4") });
                }
                catch (error) {
                    this.setState({
                        setK4Amount: 0
                    });
                }
            };



    render() {
        return (
            <Container>
                <Row>
                    <Col>

                        <Setting />
                    </Col>
                </Row>

                <Row>
                    <Col>

                        <SetK4
                            setAmK4={this.setAmK4}

                        />

                    </Col>
                    <Col>
                        <SetK6 />
                    </Col>
                    <Col>


                        <SetK8 />
                    </Col>
                    <Col>



                        <SetK10 />
                    </Col>
                    <Col>


                        <SetK12 />
                    </Col>
                    <Col>


                        <SetK20 />
                    </Col>
                    <Col>

                        <SetK100 />
                    </Col>

                </Row>

            </Container>
        )
    }
}
export default Rolling