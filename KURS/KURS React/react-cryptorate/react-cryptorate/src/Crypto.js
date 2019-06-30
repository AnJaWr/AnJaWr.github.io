import React, { Component } from "react";
import CryptoList from "./CryptoList";
import axios from 'axios';
import { objectTypeAnnotation } from "@babel/types";

class Crypto extends Component {
    // constructor(props) {
    //     super(props);

    state = {
        cryptoList: []

    }

    componentDidMount() {
        // odpal tę funkję od razu
        this.getData();

        setInterval(() => {
            if (this.filterValue.value === '') {


                this.getData();
            }

        }, 3000);


    }

    getData = () => {
        axios.get(`https://blockchain.info/pl/ticker`)
            .then(response => {
                let data = response.data;
                let newCryptoList = [];
                let oldCryptoList = this.state.cryptoList
                console.log(data);

                Object.keys(data).map(waluta => {
                    // wyrzuci tablię z nazwami walut
                    let newObject = {
                        waluta: waluta,
                        // tu chcemy dać klucz waluty i przypisać jej dane, by było to powiązane
                        lastRate: data[waluta].last,
                        symbol: data[waluta].symbol
                    };

                    let oldObject = oldCryptoList.find(oldObject => {
                        if (oldObject.waluta === newObject.waluta) return oldObject;
                    });

                    if (oldObject !== undefined) {
                        if (oldObject.lastRate < newObject.lastRate) {
                            newObject.class = 'green'
                        } else if (oldObject.lastRate > newObject.lastRate) {
                            newObject.class = 'red';
                        }
                        else {
                            newObject.class = 'blue';
                        }
                    }

                    newCryptoList.push(newObject);
                    // wpychamy obiekt do listy
                });


                this.setState({ cryptoList: newCryptoList })
                console.log(this.state.cryptoList)
            }
            )
            .catch(function (error) {
                // handle error
                console.log(error);
            })




    }
    onFilter = () => {
        // 
        let value = this.filterValue.value.toUpperCase();
        value = value.trim();
        // trim wyrzuca spaje
        let cryptoList = this.state.cryptoList;

        cryptoList = cryptoList.filter(currentWaluta => {
            return currentWaluta.waluta.search(value) !== -1;
        });

        this.setState({ cryptoList: cryptoList });

    }
    render() {
        return (
            <div>
                <input placeholder="Filter..."
                    type="text"
                    ref={input => this.filterValue = input}
                    onChange={this.onFilter}
                />
                <CryptoList rates={this.state.cryptoList} />

            </div>
        );
    }
}



export default Crypto;