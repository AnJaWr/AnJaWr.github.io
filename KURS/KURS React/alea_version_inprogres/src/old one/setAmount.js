import React, { Component } from "react";



class SetAmount extends Component {


    setAmount = (e) => {

        this.props.setAmK4(parseInt(this.dicesAmount.value))

    }



    render() {
        return (
            <div>

                <label htmlFor="number" > Ilość kości:</label>
                <input name="number" type="number" ref={input => this.dicesAmount = input} min="1" max="20" placeholder="0" size="2" />
                <input type="submit" value="Rzucaj" onClick={() => { this.setAmount() }} />

            </div>)





    }
}

export default SetAmount;