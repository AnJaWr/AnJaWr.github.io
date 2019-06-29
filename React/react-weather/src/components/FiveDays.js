import React, { Component } from "react";
const API_KEY = "f525ab2b08b02345263cf7db59107bee"

class Popup extends React.Component {
    state = {
        city: this.props.city,
        hour: undefined,

        // one
        icon1: undefined,
        day1: undefined,
        temp1: undefined,
        // two
        icon2: undefined,
        day2: undefined,
        temp2: undefined,
        // three
        icon3: undefined,
        day3: undefined,
        temp3: undefined,
        // four
        icon4: undefined,
        day4: undefined,
        temp4: undefined,
        // five
        icon5: undefined,
        day5: undefined,
        temp5: undefined,
    }

    setCity = (newCity) => {
        this.setState({ city: newCity })
    }

    setData = () => {
        var data1 = this.state.day1;
        console.log(data1);
        var newdata1 = data1.slice(0, 10);
        this.setState({ day1: newdata1 })

        var data2 = this.state.day2;
        var newdata2 = data2.slice(0, 10);
        this.setState({ day2: newdata2 })

        var data3 = this.state.day3;
        var newdata3 = data3.slice(0, 10);
        this.setState({ day3: newdata3 })

        var data4 = this.state.day4;
        var newdata4 = data4.slice(0, 10);
        this.setState({ day4: newdata4 })

        var data5 = this.state.day5;
        var newdata5 = data5.slice(0, 10);
        this.setState({ day5: newdata5 })

        var hour = this.state.hour
        console.log(hour);
        var newhour = hour.slice(11, 16);
        this.setState({ hour: newhour })
        console.log(newhour);
    }

    getWeatherForSeven = async (e) => {
        const city = this.props.city
        const api_call = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`);

        const data = await api_call.json()
        if (city) {
            console.log(data);

            this.setState({
                hour: data.list[0].dt_txt,
                // one
                icon1: `http://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png`,
                day1: data.list[0].dt_txt,
                temp1: data.list[0].main.temp,
                // two
                icon2: `http://openweathermap.org/img/wn/${data.list[8].weather[0].icon}@2x.png`,
                day2: data.list[8].dt_txt,
                temp2: data.list[8].main.temp,
                // three
                icon3: `http://openweathermap.org/img/wn/${data.list[16].weather[0].icon}@2x.png`,
                day3: data.list[16].dt_txt,
                temp3: data.list[16].main.temp,
                // four
                icon4: `http://openweathermap.org/img/wn/${data.list[24].weather[0].icon}@2x.png`,
                day4: data.list[24].dt_txt,
                temp4: data.list[24].main.temp,
                //five
                icon5: `http://openweathermap.org/img/wn/${data.list[32].weather[0].icon}@2x.png`,
                day5: data.list[32].dt_txt,
                temp5: data.list[32].main.temp,

            });
        }
        this.setData()
    };

    componentDidMount() {
        this.getWeatherForSeven()
    }

    render() {
        return (
            <div className='popup' >
                <div className="main__popup">
                    <div className="container__popup">
                        <div className="row__popup">
                            <div className="col-md-12 col-xs-12 container">
                                <h1 className="title__popup">{this.props.city}</h1>

                                <h2 className="title__popup"><span>Godzina:{this.state.hour}</span></h2>
                                <button className="button__popup" onClick={this.props.closePopup}>X</button>
                            </div>


                            <div className="col-md-4 col-xs-4 panel-container">
                                <div className="popup__inner">

                                    <p>{this.state.day1}</p>
                                    <p>{<img src={this.state.icon1} alt="icona" />}</p>
                                    <p>{this.state.temp1}&deg;C</p>

                                </div>
                            </div>

                            <div className="col-md-4 col-xs-4 panel-container">
                                <div className="popup__inner">
                                    <p>{this.state.day2}</p>
                                    <p>{<img src={this.state.icon2} alt="icona" />}</p>
                                    <p>{this.state.temp2}&deg;C</p>
                                </div>
                            </div>

                            <div className="col-md-4 col-xs-4 panel-container">
                                <div className="popup__inner">
                                    <p>{this.state.day3}</p>
                                    <p>{<img src={this.state.icon3} alt="icona" />}</p>
                                    <p>{this.state.temp3}&deg;C</p>
                                </div>
                            </div>

                            <div className="col-md-4 col-xs-4 panel-container">
                                <div className="popup__inner">
                                    <p>{this.state.day4}</p>
                                    <p>{<img src={this.state.icon4} alt="icona" />}</p>
                                    <p>{this.state.temp4}&deg;C</p>
                                </div>
                            </div>

                            <div className="col-md-4 col-xs-4 panel-container">
                                <div className="popup__inner">
                                    <p>{this.state.day5}</p>
                                    <p>{<img src={this.state.icon5} alt="icona" />}</p>
                                    <p>{this.state.temp5}&deg;C</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
/*========================FiveDaysComponent======================== */



class FiveDays extends Component {
    state = {
        city: this.props.city,
        showPopup: false
    }

    togglePopup = () => {
        this.setState({
            showPopup: !this.state.showPopup,
            city: this.props.city
        });
    }


    render() {
        return (

            <div >
                <button onClick={this.togglePopup}> Pogoda na 5 dni</button>
                {this.state.showPopup ?
                    <Popup
                        closePopup={this.togglePopup}
                        city={this.state.city}
                    />
                    : null
                }
            </div>

        )
    }
}
export default FiveDays