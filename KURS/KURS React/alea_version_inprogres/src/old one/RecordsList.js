import React from "react";
import Divs from "./Divs"



const RecordsList = (props) => {
    if (props.amount > 0
        && props.type > 0
    ) {

        return (
            <div className="records">
                <div className="par__records">
                    <p> Typ kości: k{props.type}</p>
                    <p>Ilość kości: {props.amount}</p>
                </div>
                <Divs amount={props.amount}
                    diceList={props.diceList}
                    type={props.type}
                />


            </div>
        )

    }
    else {
        return (
            <div
                className="records"
                id="records">
                <div className="par__records"><p className="warning">Wybierz kości i określ ich ilość, by móc rzucić</p></div>
                <div className="par__records">
                    <p> Ilość: {props.amount}</p>
                    <p>Typ kości: {props.type}</p></div>

            </div>)

    }

}
export default RecordsList;

