import React, { Component } from "react";
import './App.css';
import SetDicesType from "./SetDicesType"
import SetAmount from './setAmount';
import RecordsList from './RecordsList'

import Divs from './Divs'


class Rolling extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dicesAmount: 0,
            dicesType: 0,

        };

        this.setType = this.setType.bind(this);
    }

    setAmount = newAmount => {
        console.log(newAmount);
        this.setState({ dicesAmount: newAmount });
    };

    setType(curDicesType) {
        console.log(curDicesType);
        this.setState({ dicesType: curDicesType });

    }
    setDivs = () => {
       Array(this.state.dicesAmount).fill(<Divs />)
        console.log("Klik obslugiwany");
    }

    render() {
        return (
            <div className="dices-container">
                <div className="left">
                    <SetDicesType setType={this.setType} />
                    <SetAmount setCounter={this.setAmount} />
                </div>
                <div className="right">
                    <RecordsList
                        amount={this.state.dicesAmount}
                        type={this.state.dicesType}
                        setDivs={this.setDivs} />
                </div>

                <footer className="App-footer"> Napisano w ReactJS </footer>
            </div>
        );
    }
}

export default Rolling;