import React, { Component } from "react";
import ButtonPanel from "./ButtonPanel";
import SetValuePanel from "./SetValuePanel";

class Counter extends Component {
  // tu ! nazwa klasy

  constructor(props) {
    super(props);
    // pociagnij własciwości konstruktora z klasy wyżej

    this.state = { counterValue: this.props.initValue };
    // this.state- słowo zarezerowwane
    // state to obiekt = {}
    // zmiana stanu to refresh koponentu!
  }

  // ponizej definkiujemy metode

  clearValue = () => {
    this.setState({ counterValue: 0 });
  };

  changeValue = () => {
    console.log("wywołanie metody changevalue");
    this.setState(prevValue => {
      return {
        counterValue: prevValue.counterValue + 1
      };
    });
    // setSatate -przekazemy funkje
  };

  initialValue = () => {
    console.log("wartość pierwsza");
    this.setState({ counterValue: this.props.initValue });
  };

  setValue = newValue => {
    console.log(newValue);
    this.setState({ counterValue: newValue });
  };

  valueMinusOne = () => {
    console.log("Odejmij jeden");
    this.setState(prevValue => {
      return {
        counterValue: prevValue.counterValue - 1
      };
    });
  };

  render() {
    console.log(this);
    return (
      <div className="counter">
        Licznik: {this.state.counterValue}
        <ButtonPanel
          changeCounterValue={this.changeValue}
          clearCounter={this.clearValue}
          minusOne={this.valueMinusOne}
          initState={this.initialValue}
        />
        <SetValuePanel setCounter={this.setValue} />
      </div>
    );
    // classNaame!
    // torzymy instanję obiektu, zatem używamy this! obiekt ma kilka własciwości, zatem mówimy, że
    // chodzi o konkretne props-> init Value
  }
}

export default Counter;
