import React, { Component } from "react";
import ButtonNextStepPanel from "./ButtonNextStepPanel";
import SetValuePanel from "./SetValuePanel";
import SetStepPanel from "./SetStepPanel"

class StepCounter extends Component {
  // tu ! nazwa klasy

  constructor(props) {
    super(props);
    // pociagnij własciwości konstruktora z klasy wyżej

    this.state = { counterValue: this.props.initValue };
    this.state = { stepValue: this.props.stepValue };
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

  nextStep = () => {
    console.log("Zwiększ o X")
  }
  render() {
    console.log(this);
    return (
      <div className="counter">
        Licznik: {this.state.counterValue}
        <ButtonNextStepPanel
          changeCounterValue={this.changeValue}
          clearCounter={this.clearValue}
          initState={this.initialValue}
          nextStep={this.nextStep}
        />
        <SetValuePanel setCounter={this.setValue} />
        Krok: {this.state.stepValue}
        <SetStepPanel setStep={this.setStep} />
      </div>
    );
    // classNaame!
    // torzymy instanję obiektu, zatem używamy this! obiekt ma kilka własciwości, zatem mówimy, że
    // chodzi o konkretne props-> init Value
  }
}

export default Counter;
