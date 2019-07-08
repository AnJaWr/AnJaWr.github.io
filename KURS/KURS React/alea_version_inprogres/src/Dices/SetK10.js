import React, { Component } from "react";
import { Col } from 'react-grid-system';
import NumericInput from 'react-numeric-input';
import { Form, FormGroup, Label, Input } from 'reactstrap';



class SetK10 extends Component {
    constructor() {
        super();
        this.state = {
            k4: false,
        };
    }

    // setAmK4 = () => {

    //     this.props.setAmK4()

    // }

    render() {
        return (
            <Col xs={6} md={3} lg={1} >
                <Form >
                    <FormGroup check className="col__main">
                        <Input type="checkbox" id="k10" />{' '}
                        <Label className="dice k10 vik" htmlFor="k10" check> </Label>
                        <NumericInput min={0} max={100} mobile={true} size={3} value={this.state.value}

                            onChange={
                                value => {
                                    this.setState({ value })
                                    this.props.setAmK10(value)

                                }}
                        />

                    </FormGroup>
                </Form>

            </Col>
        )
    }
}

export default SetK10 