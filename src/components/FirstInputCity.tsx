import React, {useState} from 'react';
import {weatherAPI} from "../services/WeatherService";
import {Navigate, useNavigate} from "react-router-dom";

const FirstInputCity = ({city, setCity, setQueryCity, queryCity}: any) => {

    const navigate = useNavigate();
    const enterHandler = (e: any) => {
        if (e.key === 'Enter' && city.trim()) {
            setQueryCity(city);
            setCity('');
            navigate(`/current/${city}`, queryCity);
        }
    }
    return (
        <div>
            <input className='App-input'
                   onChange={(e) => setCity(e.target.value)}
                   placeholder='Your city'
                   value={city}
                   onKeyDown={enterHandler}/>
        </div>
    );
};

export default FirstInputCity;