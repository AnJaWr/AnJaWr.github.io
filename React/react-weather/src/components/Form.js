import React from "react";


const Form = props => (

    <form className="form" onSubmit={props.getWeather}>
        <input type="text" name="city" placeholder="Miejscowość..." />
        <button>Sprawdź pogodę </button>
    </form>
);


export default Form;