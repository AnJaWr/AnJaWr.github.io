import React from "react";
import Heading from "./Heading";






const SetValuePanel = props => {
  console.log(props);

  return (

    <div className="set-value-panel">
      <button onClick={}>Dodaj jeden </button>
      <button onClick={}>Zeruj </button>
      <button onClick={}>Odejmij jeden </button>
      <button onClick={}> Stan pierwotny </button>
    </div>
  );
};











class Counter extends Component {


  constructor(props) {
    super(props);


    this.state = { counterValue: this.props.initValue };

  }

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

  };

  initialValue = () => {
    console.log("wartość pierwsza");
    this.setState({ counterValue: this.props.initValue });
  };

  valueMinusOne = () => {
    console.log("Odejmij jeden");
    this.setState(prevValue => {
      return {
        counterValue: prevValue.counterValue - 1
      };
    });
  };





const SetValuePanel = props => {
  console.log(props);

  return (
    <div className="value-panel">
      <Heading headingText="Ustaw sobie sam" />

      <input type="number" />
      <button onClick={props.initState}>Ustaw wartość</button>
    </div>
  );
};
}
export default SetValuePanel;
