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
            setting: "classic",

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
            k6List: [],
            k8List: [],
            k10List: [],
            k12List: [],
            k20List: [],
            k100List: [],
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


    setAmK6 = newAmount => {
        try {
            this.setState({ setK6Amount: newAmount });
            this.setState({ k6List: Array(newAmount).fill("k6") });
        }
        catch (error) {
            this.setState({
                setK6Amount: 0
            });
        }
    };

    setAmK8 = newAmount => {
        try {
            this.setState({ setK8Amount: newAmount });
            this.setState({ k8List: Array(newAmount).fill("k8") });
        }
        catch (error) {
            this.setState({
                setK8Amount: 0
            });
        }
    };

    setAmK10 = newAmount => {
        try {
            this.setState({ setK10Amount: newAmount });
            this.setState({ k6List: Array(newAmount).fill("k10") });
        }
        catch (error) {
            this.setState({
                setK10Amount: 0
            });
        }
    };



    setAmK12 = newAmount => {
        try {
            this.setState({ setK12Amount: newAmount });
            this.setState({ k12List: Array(newAmount).fill("k12") });
        }
        catch (error) {
            this.setState({
                setK12Amount: 0
            });
        }
    };

    setAmK20 = newAmount => {
        try {
            this.setState({ setK20Amount: newAmount });
            this.setState({ k20List: Array(newAmount).fill("k20") });
        }
        catch (error) {
            this.setState({
                setK20Amount: 0
            });
        }
    };


    setAmK100 = newAmount => {
        try {
            this.setState({ setK100Amount: newAmount });
            this.setState({ k100List: Array(newAmount).fill("k100") });
        }
        catch (error) {
            this.setState({
                setK100Amount: 0
            });
        }
    };


    changeSetting = newSetting => {
        try {
            this.setState({ setting: newSetting });
            console.log(newSetting);
        }
        catch (error) {
            this.setState({
                setting: "classic"
            });
        }
    }


















    render() {
        return (
            <Container>
                <Row>
                    <Col>

                        <Setting
                            changeSetting={this.changeSetting} />
                    </Col>
                </Row>

                <Row>
                    <Col>

                        <SetK4
                            setAmK4={this.setAmK4}
                        />

                    </Col>
                    <Col>
                        <SetK6
                            setAmK6={this.setAmK6}
                        />
                    </Col>
                    <Col>
                        <SetK8
                            setAmK8={this.setAmK8}
                        />
                    </Col>
                    <Col>



                        <SetK10
                            setAmK10={this.setAmK10}
                        />
                    </Col>
                    <Col>


                        <SetK12 setAmK12={this.setAmK12}
                        />
                    </Col>
                    <Col>


                        <SetK20 setAmK20={this.setAmK20}
                        />
                    </Col>
                    <Col>

                        <SetK100 setAmK100={this.setAmK100} />
                    </Col>

                </Row>

            </Container>
        )
    }
}
export default Rolling