import React from "react";


// import SetStepPanel from "./SetStepPanel";

// to nie jest element klasowy!

const ButtonPanel = props => {
  console.log(props);

  return (
    <div className="button-panel">
      <button onClick={props.changeCounterValue}>Dodaj jeden </button>
      <button onClick={props.clearCounter}>Zeruj </button>
      <button onClick={props.minusOne}>Odejmij jeden </button>
      <button onClick={props.initState}> Stan pierwotny </button>
      <button onClick={props.nextStep}>Zwiększ o krok </button>
    </div>
  );
};

export default ButtonPanel;
