import React, { Component } from "react";

class CryptoList extends Component {
    render() {

        return (
            <div>
                {this.props.rates.map(currentWaluta =>
                    <p key={currentWaluta.waluta}>
                        <strong>Last rate: </strong>
                        <span className={currentWaluta.class}>{currentWaluta.lastRate}&nbsp;</span>
                        <span>{currentWaluta.waluta}&nbsp;</span>
                        <span>[{currentWaluta.symbol}]</span>
                    </p>
                )}
            </div>)
    }
}

export default CryptoList