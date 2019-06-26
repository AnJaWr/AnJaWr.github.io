import React from "react";



const Divs = (props) => {
    return (
        <div className="records">
            {props.list.map(newDiv =>
                <div className="one-record">
                    {Math.floor(Math.random() * (props.type - 1 + 1)) + 1}
                </div>)}
        </div>
    )
};



export default Divs;
