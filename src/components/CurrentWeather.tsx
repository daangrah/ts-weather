import React from 'react';
import {weatherAPI} from "../services/WeatherService";
import {FetchBaseQueryError} from "@reduxjs/toolkit/query/react";
import {SerializedError} from "@reduxjs/toolkit";
import {useNavigate} from "react-router-dom";

const CurrentWeather = ({queryCity, city, setCity, setQueryCity}: any) => {


    const {data, error, isLoading} = weatherAPI.useFetchCurrentWeatherQuery(queryCity);
    const navigate = useNavigate();
    const backHandler = () => {
        navigate(`/`);
    }
    if (isLoading) return <div className='App'><h1>Загрузка...</h1></div>;
    if (error) {
        if ("status" in error) {
            const errData = (error as FetchBaseQueryError).data as { error?: { message?: string } };
            return <div className="App">
                <h1>Ошибка: {errData?.error?.message || "Неизвестная ошибка"}</h1>
                <button onClick={backHandler}>🔙</button>
            </div>;
        } else {
            return <div className='App'>
                <h1>Ошибка запроса: {(error as SerializedError).message || "Неизвестная ошибка"}</h1>
                <button onClick={backHandler}>🔙</button>
                </div>
        }
    }

    return (
        <div className='App'>
            <div className='App-container'>
                <button onClick={backHandler}>🔙</button>
                <h2>Погода в {data?.location.name}, {data?.location.country}</h2>
                <p>Температура: {data?.current.temp_c}°C</p>
                <p>
                    <img src={data?.current.condition.icon} alt={data?.current.condition.text}/>
                    {data?.current.condition.text}
                </p>
            </div>
        </div>
    );
};

export default CurrentWeather;