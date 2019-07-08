import React, { Component } from "react";
import './App.css';



class Rolling extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dicesAmount: 0,
            dicesType: 0,
            diceList: [],
            color: "",
        };

        this.setType = this.setType.bind(this);

    }
    
  

    setAmount = newAmount => {
        try {
        console.log(newAmount);
        this.setState({ dicesAmount: newAmount });
        this.setState({ diceList: Array(newAmount).fill("item") });}
        catch (error) {
            this.setState({
               dicesAmount: 0

            });}
    };

    setType(curDicesType) {
        console.log(curDicesType);
        this.setState({ dicesType: curDicesType });
    }

setColor = () => {
        var h1 = document.querySelectorAll("h1")
        var number = Number(h1.innerText);
        console.log(number);
        if (number === this.state.type) {
           h1.class="green"
        } else if (number === 1) {
    h1.class="red"
        }
    }
 

    render() {
        return (
            <div className="dices-container">
                <div className="left">
                    <SetDicesType setType={this.setType} />
                    <SetAmount setCounter={this.setAmount}
                    />
                </div>
                <div className="right">
                    <RecordsList
                        color={this.state.color}
                        amount={this.state.dicesAmount}
                        type={this.state.dicesType}
                        diceList={this.state.diceList}
            
                    />

                </div>

            
            </div>
        );
    }
}

export default Rolling;