import React from 'react'
import { Col } from 'react-grid-system';
import { Form, FormGroup, Label, Input} from 'reactstrap';




const Settings = (props) => {


    return (
        <Col xs={12} md={12}>
            <Form>
                <FormGroup>
                    <Label for="dicesSetting"/>
                    <Input type="select" name="select" id="dicesSetting">
                        <option>Kości klasyczne</option>
                        <option>Kości elfickie</option>
                        <option>Kości cyberpunk</option>
                        <option>Kości wikińskie</option>
                        <option>Kości galaktyka</option>
                    </Input>
                </FormGroup>
            </Form>
        </Col>)

};



export default Settings;
