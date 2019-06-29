import React, { Component } from "react";
const API_KEY = "f525ab2b08b02345263cf7db59107bee"

class Popup extends React.Component {
    state = {
        city: this.props.city,
        // one
        icon: undefined,
        day: undefined,
        tempNight: undefined,
        tempDay: undefined,
        error: undefined,
        // two
        icon2: undefined,
        day2: undefined,
        tempNight2: undefined,
        tempDay2: undefined,
        // three
        icon3: undefined,
        day3: undefined,
        tempNight3: undefined,
        tempDay3: undefined,
        // four
        icon4: undefined,
        day4: undefined,
        tempNight4: undefined,
        tempDay4: undefined,
        // five
        icon5: undefined,
        day5: undefined,
        tempNight5: undefined,
        tempDay5: undefined,



    }
    setCity = (newCity) => {
        this.setState({ city: newCity })
    }

    getWeatherForSeven = async (e) => {
        const city = this.props.city
        const api_call = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`);


        const data = await api_call.json()
        if (city) {
            console.log(data);

            this.setState({
                icon: `http://openweathermap.org/img/wn/${data.list[4].weather[0].icon}@2x.png`,
                day: data.list[0].dt_txt,
                tempNight: data.list[0].main.temp,
                tempDay: data.list[4].main.temp,
                error: undefined,
                // two
                icon2: `http://openweathermap.org/img/wn/${data.list[12].weather[0].icon}@2x.png`,
                day2: data.list[8].dt_txt,
                tempNight2: data.list[8].main.temp,
                tempDay2: data.list[12].main.temp,


                // three
                icon3: `http://openweathermap.org/img/wn/${data.list[20].weather[0].icon}@2x.png`,
                day3: data.list[16].dt_txt,
                tempNight3: data.list[16].main.temp,
                tempDay3: data.list[20].main.temp,

                // four
                icon4: `http://openweathermap.org/img/wn/${data.list[28].weather[0].icon}@2x.png`,
                day4: data.list[24].dt_txt,
                tempNight4: data.list[24].main.temp,
                tempDay4: data.list[28].main.temp,

                //five
                icon5: `http://openweathermap.org/img/wn/${data.list[36].weather[0].icon}@2x.png`,
                day5: data.list[32].dt_txt,
                tempNight5: data.list[32].main.temp,
                tempDay5: data.list[36].main.temp,





            });
        }
    };

    componentDidMount() {
        this.getWeatherForSeven()

    }

    render() {
        return (
            <div className='popup' >
                <div className="main__popup">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-xs-12 panel-container">
                                <p>Lokacja: {this.props.city}</p>
                            </div>


                            <div className="col-md-3 col-xs-3 panel-container">
                                <div className="popup__inner">
                                    <p>Data:{this.state.day}</p>
                                    <p>{<img src={this.state.icon} alt="icona" />}</p>
                                    <p>Noc: {this.state.tempNight}*C</p>
                                    <p>Dzień: {this.state.tempDay}*C</p>
                                </div>
                            </div>

                            <div className="col-md-3 col-xs-3 panel-container">
                                <div className="popup__inner">
                                    <p>Data:{this.state.day2}</p>
                                    <p>{<img src={this.state.icon2} alt="icona" />}</p>
                                    <p>Noc:{this.state.tempNight2}*C</p>
                                    <p>Dzień:{this.state.tempDay2}*C</p>
                                </div>
                            </div>

                            <div className="col-md-3 col-xs-3 panel-container">
                                <div className="popup__inner">
                                    <p>Data:{this.state.day3}</p>
                                    <p>{<img src={this.state.icon3} alt="icona" />}</p>
                                    <p>Noc:{this.state.tempNight3}*C</p>
                                    <p>Dzień: {this.state.tempDay3}*C</p>
                                </div>
                            </div>

                            <div className="col-md-3 col-xs-3 panel-container">
                                <div className="popup__inner">
                                    <p>Data:{this.state.day4}</p>
                                    <p>{<img src={this.state.icon4} alt="icona" />}</p>
                                    <p>Noc:{this.state.tempNight4}*C</p>
                                    <p>Dzień: {this.state.tempDay4}*C</p>
                                </div>
                            </div>

                            <div className="col-md-3 col-xs-3 panel-container">
                                <div className="popup__inner">
                                    <p>Data:{this.state.day5}</p>
                                    <p>{<img src={this.state.icon5} alt="icona" />}</p>
                                    <p>Noc:{this.state.tempNight5}*C</p>
                                    <p>Dzień: {this.state.tempDay5}*C</p>
                                </div>
                            </div>


                        </div></div>
                </div>
                <button onClick={this.props.closePopup}>X</button>

            </div>



        );
    }
}
//...........................................................................



class SevenDays extends Component {
    state = {
        city: this.props.city,
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
                <button onClick={this.togglePopup}> Pogoda na 7 dni</button>
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
export default SevenDays