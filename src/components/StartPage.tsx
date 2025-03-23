import React, {useState} from 'react';
import FirstInputCity from "./FirstInputCity";
import CurrentWeather from "./CurrentWeather";

const StartPage = ({city, setCity, queryCity, setQueryCity}: any) => {


    return (
        <div className='App'>
            <div className='App-container'>
                <h1 className='App-header'>WHAT'S YOUR CITY?</h1>
                <FirstInputCity city={city} setCity={setCity} setQueryCity={setQueryCity} queryCity={queryCity}/>
                {/*<CurrentWeather queryCity={queryCity} />*/}
            </div>
        </div>
    );
};

export default StartPage;