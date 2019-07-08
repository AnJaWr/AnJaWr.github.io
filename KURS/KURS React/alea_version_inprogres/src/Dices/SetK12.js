import React, { Component } from "react";
import { Col } from 'react-grid-system';
import NumericInput from 'react-numeric-input';
import { Form, FormGroup, Label, Input } from 'reactstrap';



class SetK12 extends Component {
    constructor() {
        super();
        this.state = {
            SetK12: false,
        };
    }

    render() {
        return (
            <Col xs={6} md={3} lg={1} >
                <Form >
                    <FormGroup check className="col__main">
                        <Input type="checkbox" id="k12" />{' '}
                        <Label className="dice k12 vik" htmlFor="k12" check> </Label>
                        <NumericInput min={0} max={100} mobile={true} size={3} value={this.state.value}

                            onChange={
                                value => {
                                    this.setState({ value })
                                    this.props.setAmK12(value)

                                }}
                        />

                    </FormGroup>
                </Form>

            </Col>
        )
    }
}

export default SetK12  