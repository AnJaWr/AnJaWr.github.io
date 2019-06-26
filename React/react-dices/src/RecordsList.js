import React from "react";
import Divs from "./Divs"


const RecordsList = (props) => {
    if (props.amount > 0
        && props.type > 0
    ) {

        return (
            <div className="records">
                <p>Ilość kości: {props.amount}</p>
                <p> Typ kości: {props.type}</p>
                <input type="button" value="Rzucaj!"
                    // onClick={props.setDivs()} 
                    />


            </div>
        )

    }
    else {
        return (
            <div className="records">
                <p className="warning">Wybierz kości i określ ich ilość. </p>
                <p> Ilość: {props.amount}</p>
                <p>Typ kości: {props.type}</p>

            </div>)

    }

}
export default RecordsList;

