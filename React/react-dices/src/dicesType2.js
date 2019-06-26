import React, { Component } from 'react';
import './App.css';

class SetDicesType extends Component {

    getInitialState = () => {
        return {
            diceType: 0
        };
    }

    onTypeChanged = (e) => {
        this.setState({
            diceType: e.currentTarget.value
        });
    }


    render () {
    var dices = this.props.data.map(function (result) {
        return (
            <input type="radio"
                name="dices"
                value={result.DICE_TYPE}
                checked={this.state.dicesType === result.DICE_TYPE}
                onChange={this.onTypeChanged} /> 
            <label htmlFor={result.DICE_TYPE}></label>
               
        );
}, this);
return (
    <table className="table">
        <thead>
            <tr>
                <th>Name</th>
                <th>Address</th>
            </tr>
        </thead>
        {resultRows}
        <tfoot>
            <tr>
                <td>chosen site name {this.state.site} </td>
                <td>chosen address {this.state.address} </td>
            </tr>
        </tfoot>
    </table>
);
}
    });

var App = React.createClass({
    render: function () {
        return <div><SearchResult data={[
            { SITE_NAME: 'google.com', ADDRESS: 'Mountain View, CA' },
            { SITE_NAME: 'example.com', ADDRESS: 'Example Place, CA' }
        ]} /></div>
    }
});

React.render(<App />, document.body);