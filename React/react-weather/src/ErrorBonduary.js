import React, { Component } from "react";

class ErrorBonduary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,

        }
    }

    componentDidCatch(error) {
        this.setState({
            error: error

        });


    }

    render() {
        if (this.state.error) {
            return (
                <div>
                    <h2>Niestety, baza nie zawiera takiego miasta.</h2>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBonduary