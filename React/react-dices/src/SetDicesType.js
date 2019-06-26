import React, { Component } from "react";
import './App.css';


class SetDicesType extends Component {


    handleClick = () => {
        this.props.setType(parseInt(this.refdicestype.value))



    }


    // (this.setState({
    //     dicesType: this.refdicestype.value

    // }))





    render() {
        return (

            <div className="dices-types">
                <form>


                    <input type="radio" name="dice" id="k4" value="4" ref={inputk4 => this.refdicestype = inputk4} onClick={this.handleClick} />
                    <label htmlFor="k4"> </label>

                    <input type="radio" name="dice" id="k6" value="6" ref={inputk6 => this.refdicestype = inputk6} onClick={this.handleClick} />
                    <label htmlFor="k6"> </label>

                    <input type="radio" name="dice" id="k8" value="8" ref={inputk8 => this.refdicestype = inputk8} onClick={this.handleClick} />
                    <label htmlFor="k8"> </label>

                    <input type="radio" name="dice" id="k10" value="10" ref={inputk10 => this.refdicestype = inputk10} onClick={this.handleClick} />
                    <label htmlFor="k10"> </label>

                    <input type="radio" name="dice" id="k12" value="12" ref={inputk12 => this.refdicestype = inputk12} onClick={this.handleClick} />
                    <label htmlFor="k12"> </label>
                    <input type="radio" name="dice" id="k20" value="20" ref={inputk20 => this.refdicestype = inputk20} onClick={this.handleClick} />
                    <label htmlFor="k100"> </label>

                    {/* {/* 
<input type="radio"
name="dice"
id="k6"
value={6}
ref={() => this.dicesType = 4}
checked={this.props.setType}
// onClick={() => { this.setDicesType() }} 
/>
<label htmlFor="k6"></label> */}

                    {/* <input type="radio" name="dice" id="k8" value="8" ref={input => this.refdicestype = input} onChange={this.handleClick} />
                    <label htmlFor="k8"></label> */}


                    {/* 
<input type="radio" name='dice' id="k10" value={10} ref="10" onClick={() => {
// this.setState({ dicesType: 10 });
console.log(this.type.value);
}} /><label htmlFor="k10"></label>

<input type="radio" name='dice' id="k12" value="12" ref="12" onClick={() => {
this.setState({ dicesType: 12 });
}} /><label htmlFor="k12"></label>

<input type="radio" name='dice' id="k20" value="20"
ref="20" onClick={() => {
this.setState({ dicesType: 20 });
}} /><label htmlFor="k20"></label>

<input type="radio" name='dice' id="k100" value="100" ref="100" onClick={(e) => {
this.setState({ dicesType: 100 });
}} /><label htmlFor="k100"></label> */}

                    <button onClick={() => { console.log(this.state.dicesType) }}>klik test</button>
                </form>
            </div>

        );
    }

}
export default SetDicesType;










// import React, { Component } from 'react';
// import './App.css';

// class SetDicesType extends Component {

// setDicesType = (e) => {
// // this.props.setType(parseInt(this.dicesType.value))
// // };

// // onTypeChanged = (e) => {
// this.setState({
// dicesType: e.target.value
// });
// }

// // k4: this.refs.k4,
// // k6: this.refs.k6,
// // k8: this.refs.k8,
// // k10: this.refs.k10,
// // k12: this.refs.k12,
// // k20: this.refs.k20,
// // k100: this.refs.k100,

// // };
// // console.log(this.state.dice);
// // }
// // setDiceType = () => {
// // if (this.state.k4.checked === true) {
// // this.setState({ dice: 4 })
// // console.log(this.state.dice);
// // } else if (this.refs.k6.checked === true) {
// // this.setState({ dice: 6 })
// // console.log(this.state.dice);
// // }
// // else if (this.refs.k8.checked === true) {
// // this.setState({ dice: 8 })
// // }
// // else if (this.refs.k9.checked === true) {
// // this.setState({ dice: 8 })
// // }
// // else if (this.refs.k10.checked === true) {
// // this.setState({ dice: 10 })
// // }
// // else if (this.refs.k12.checked === true) {
// // this.setState({ dice: 12 })
// // }
// // else if (this.refs.k20.checked === true) {
// // this.setState({ dice: 20 })
// // } else if (this.refs.k100.checked === true) {
// // this.setState({ dice: 100 })
// // }
// // };



// render() {
// return (

// <div className="dices-types">
// <input type="radio" name='dice' id="k4" value="4"
// // ref={input => this.dicesType = input}
// onClick={() => {
// // this.setState({ dicesType: 4 });
// this.setDicesType()


// }} /><label htmlFor="k4"></label>

// <input type="radio" name='dice' id="k6" value="6"
// // ref={input => this.dicesType = input}
// onClick={() => {
// this.setDicesType()
// // this.setState({ dicesType: 6 });
// }} /><label htmlFor="k6"></label>

// <input type="radio" name='dice' id="k8" value="8" ref={input => this.dicesType = input} onClick={() => {
// this.setState({ dicesType: 8 })
// }} /><label htmlFor="k8"></label>

// <input type="radio" name='dice' id="k10" value="10" ref="10" onClick={() => {
// this.setState({ dicesType: 10 });
// }} /><label htmlFor="k10"></label>

// <input type="radio" name='dice' id="k12" value="12" ref="12" onClick={() => {
// this.setState({ dicesType: 12 });
// }} /><label htmlFor="k12"></label>

// <input type="radio" name='dice' id="k20" value="20"
// ref="20" onClick={() => {
// this.setState({ dicesType: 20 });
// }} /><label htmlFor="k20"></label>

// <input type="radio" name='dice' id="k100" value="100" ref="100" onClick={() => {
// this.setState({ dicesType: 100 });
// }} /><label htmlFor="k100"></label>

// <button onClick={() => { console.log(this.state.dicesType) }}>klik test</button>
// </div>

// );
// }

// }
// export default SetDicesType;



// onTypeChanged = (e) => {
// 
// });


// k4: this.refs.k4,
// k6: this.refs.k6,
// k8: this.refs.k8,
// k10: this.refs.k10,
// k12: this.refs.k12,
// k20: this.refs.k20,
// k100: this.refs.k100,

// };
// console.log(this.state.dice);
// }
// setDiceType = () => {
// if (this.state.k4.checked === true) {
// this.setState({ dice: 4 })
// console.log(this.state.dice);
// } else if (this.refs.k6.checked === true) {
// this.setState({ dice: 6 })
// console.log(this.state.dice);
// }
// else if (this.refs.k8.checked === true) {
// this.setState({ dice: 8 })
// }
// else if (this.refs.k9.checked === true) {
// this.setState({ dice: 8 })
// }
// else if (this.refs.k10.checked === true) {
// this.setState({ dice: 10 })
// }
// else if (this.refs.k12.checked === true) {
// this.setState({ dice: 12 })
// }
// else if (this.refs.k20.checked === true) {
// this.setState({ dice: 20 })
// } else if (this.refs.k100.checked === true) {
// this.setState({ dice: 100 })
// }
// };




    // setType = changeEvent => {
    //     this.setState({
    //         dicesType: changeEvent.target.value
    //     });


    // };

//    const setType = (props) => {

//         // console.log(this.type.value);
//         this.props.setType(this.dicesType);
//     }

    // setType = () => {
    //     this.state.dicesType(parseInt(this.dicesType))
    // };

    // onTypeChanged = (e) => {
    //     this.setState({
    //         dicesType: e.target.value
    //     });