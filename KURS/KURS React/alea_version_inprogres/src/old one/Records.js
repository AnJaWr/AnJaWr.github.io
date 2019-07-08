import React from "react";


const Records = (props) => {
    if (props.amount > 0
        && props.type > 0
    ) {
        for (let i = 0; i < props.amount; i++) {

            return (
                <div>
                    <input type="button" value="Rzucaj!" />

                </div>
            )
        }
    }
    else {
        return (

            <div></div>)

    }
}
export default Records;