import React, { Component } from 'react';
import './App.css';

class Dices extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="dices-container">
                <div className="left">
        <div className="dices-types">
           <input type="radio" name='dice' id="thing1"/><label for="thing1"></label>
         <input type="radio" name='dice' id="thing2"/><label for="thing2"></label> 
           <input type="radio" name='dice' id="thing3"/><label for="thing3"></label> 
            <input type="radio" name='dice' id="thing4"/><label for="thing4"></label> 
            <input type="radio" name='dice' id="thing5"/><label for="thing5"></label>
         <input type="radio" name='dice' id="thing6"/><label for="thing6"></label> 
           <input type="radio" name='dice' id="thing7"/><label for="thing7"></label> 
        </div></div>
        <div className="right">
        <div className="dices-amount">
            <label for="number" > Ilość kości: </label>
            <input name="number" type="number" ref={input => this.objInput = input} min="1" max="12" placeholder="0"/>
           
          <input type="submit" onChange={console.log("działa")} value="Rzucaj!"/> 
         <div className="dices-display-record box"></div>
        </div>
        </div></div>
        );
    }
}
export default Dices;