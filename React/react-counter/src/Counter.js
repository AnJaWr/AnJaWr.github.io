import React, { Component } from "react";
import ButtonPanel from "./ButtonPanel";
import SetValuePanel from "./SetValuePanel";
import SetStepPanel from "./SetStepPanel"

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

  setStepValue = newStep => {
    console.log(newStep);
    this.setState({ stepValue: newStep });
  }




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
    this.setState((prevValue, stepValue) => {
      return {
        counterValue: prevValue.counterValue + this.state.stepValue
      };
    });
  }


  render() {
    console.log(this);
    return (
      <div className="counter">
       <p> Licznik: {this.state.counterValue}</p>
        <ButtonPanel
          changeCounterValue={this.changeValue}
          clearCounter={this.clearValue}
          minusOne={this.valueMinusOne}
          initState={this.initialValue}
          nextStep={this.nextStep}
          setName={this.setName}
        />
        <SetValuePanel setCounter={this.setValue} />

        Krok: {this.state.stepValue}

        <SetStepPanel setStep={this.setStepValue} />
      </div>
    );
    // classNaame!
    // torzymy instanję obiektu, zatem używamy this! obiekt ma kilka własciwości, zatem mówimy, że
    // chodzi o konkretne props-> init Value
  }
}

export default Counter;
