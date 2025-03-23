import React from 'react';
import map from '../assets/map.png'
import hum from '../assets/hum.png'
import wind from '../assets/wind-direction-icon.png'
import {format} from "date-fns";
import FirstInputCity from "./FirstInputCity";

const CurrentCard = ({data, queryCity, setQueryCity, city, setCity}: any) => {
    const today = new Date();
    const day = format(today, "do"); // Добавляет "st", "nd", "rd", "th"
    const month = format(today, "MMM");
    const year = format(today, "''yy");
    const weekday = format(today, "eeee");
    return (
        <div className={'current-card'}>
            <div className={'current-card-info'}>
                <div className="card-location">
                    <img src={map} alt="location"/>
                    {data?.location.name}, {data?.location.country}
                </div>
                <img src={data?.current.condition.icon} alt={data?.current.condition.text} className={'img-weather'}/>
                <div className='card-temp'>
                    <p className={'temp-size'}>{data?.current.temp_c}</p>
                    <p>°C</p>
                </div>
                <div style={{marginTop: '30px', fontSize: '0.75em'}}>
                    {`${day} ${month} ${year}`}
                    <div>{weekday}</div>
                </div>
                <div className={'info-current'}>
                    <p><img src={hum} alt="humidity"/>
                    {data?.current.humidity} %
                    </p>
                    <p>|</p>
                    <p>
                        <img src={wind} alt="wind"/>
                        {data?.current.wind_kph} km/h
                    </p>
                </div>
            </div>
            <div className={'current-card-input'}>
            <FirstInputCity city={city} setCity={setCity} setQueryCity={setQueryCity} queryCity={queryCity}/>
            </div>
        </div>
    );
};

export default CurrentCard;