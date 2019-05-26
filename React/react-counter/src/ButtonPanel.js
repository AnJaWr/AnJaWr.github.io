import React from "react";

// to nie jest element klasowy!

const ButtonPanel = props => {
  console.log(props);

  return (
    <div className="button-panel">
      <button onClick={props.changeCounterValue}>Dodaj jeden </button>
      <button onClick={props.clearCounter}>Zeruj </button>
      <button onClick={props.minusOne}>Odejmij jeden </button>
      <button onClick={props.initState}> Stan pierwotny </button>
      {/* logowanie tu: ()=> console.log('...'); */}
    </div>
  );
};

export default ButtonPanel;
