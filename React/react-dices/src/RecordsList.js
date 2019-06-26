import React from "react";


const RecordsList = (props) => {

    if (props.amount > 0
        && props.dicesType > 0
    ) {
        for (let i = 0; i < props.amount; i++) {
            return (
                <div className="records">
                    <input type="submit" value="Rzucaj!" />
                    <div className="one-record">
                        {/* {console.log("Wynik")} */}
                        <h1>Ilość kości: {props.amount}</h1>
                        <h1> Typ kości: {props.dicesType}</h1>
                    </div></div>)

        }
    } else {
        return (
            <div className="records">
                <p>Wybierz kości {props.dicesType}i określ ich ilość {props.amount}</p>
            </div>)

    }

}
export default RecordsList;

