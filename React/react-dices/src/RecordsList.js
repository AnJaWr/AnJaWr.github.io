import React from "react";


const RecordsList = (props) => {
    if (props.amount > 0
        && props.type > 0
    ) {
        for (let i = 0; i < props.amount; i++) {
            return (
                <div className="records">
                    <p>Ilość kości: {props.amount}</p>
                    <p> Typ kości: {props.type}</p>
                    <input type="button" value="Rzucaj!" onClick={()=>console.log(props.amount)}/></div>)

        }
    } else {
        return (
            <div className="records">
                <p>Wybierz kości i określ ich ilość. </p>
                <p> Ilość: {props.amount}</p>
                <p>Typ kości: {props.type}</p>

            </div>)

    }

}
export default RecordsList;

