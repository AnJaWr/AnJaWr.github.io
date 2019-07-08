import React, { Component } from "react";
import { Col } from 'react-grid-system';
import { Form, FormGroup, Label, Input } from 'reactstrap';


class Setting extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };
        console.log(this.state.value);
    }

    // changeSetting(e, props) {
    // let value = e.target.value;
    // props.changeSetting(value)}


    render() {

        return (
            <Col xs={12} md={12}>
                <Form>
                    <FormGroup>
                        <Label for="dicesSetting" />
                        <Input type="select" name="select" id="dicesSetting"
                            onChange={
                                (e) => {
                                    let value = e.target.value;
                                    this.props.changeSetting(value)
                                }}

                        >
                            <option value="classic">Kości klasyczne</option>
                            <option value="elvish">Kości elfickie</option>
                            <option value="cyberpunk">Kości cyberpunk</option>
                            <option value="vik">Kości wikińskie</option>
                            <option value="galaxy">Kości galaktyka</option>
                        </Input>
                    </FormGroup>
                </Form>
            </Col>)

    };
}


export default Setting;
