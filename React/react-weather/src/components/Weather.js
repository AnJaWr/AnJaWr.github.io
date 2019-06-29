import React from "react";
import SevenDays from "./SevenDays"


const Weather = props => (

    <div className="weather__info">
        {
            props.city && <p className="weather__key"> Lokalizacja:

                <span className="weather__value">  {props.city}</span>

            </p>
        }
        {
            props.temperature && <p className="weather__key"> Temperatura:

                <span className="weather__value">  {props.temperature}</span>
            </p>
        }
        {
            props.pressure && <p className="weather__key"> Ciśnienie:

                <span className="weather__value">  {props.pressure}</span>

            </p>
        }
        {

            props.sunrise && <p className="weather__key"> Wschód słońca o:
               <span className="weather__value">   {props.sunrise}</span>
            </p>
        }
        {
            props.sunset && <p className="weather__key"> Zachód słońca o:
      <span className="weather__value">  {props.sunset}</span>

            </p>
        }
        {
            props.sunrise && <p className="weather__key"> Prędkość wiatru:
                <span className="weather__value">  {props.wind}</span>

            </p>
        }
        {
            props.description && <p className="weather__key"> Warunki pogodowe:
                     <span className="weather__value">  {props.description}</span>
            </p>
        }
        {
            props.error && <p className="weather__error">
                {props.error}</p>}

        {props.city && <SevenDays city={props.city} />}
    </div>

);


export default Weather;