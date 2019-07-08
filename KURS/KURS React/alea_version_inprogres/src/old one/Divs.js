import React from "react";



const Divs = (props) => {
    return (
        <div className="records">
            {props.diceList.map(() =>
                <div className={`one-record k`+props.type}>
                   <h2 > {Math.floor(Math.random() * (props.type - 1 + 1)) + 1}</h2>
                </div>)}
        </div>
    )
};



export default Divs;
