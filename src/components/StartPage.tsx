import React from 'react';
import FirstInputCity from "./FirstInputCity";

const StartPage = ({city, setCity, queryCity, setQueryCity}: any) => {


    return (
        <div className='App'>
            <div className='App-container-intro'>
                <h1 className='App-header'>WHAT'S YOUR CITY?</h1>
                <FirstInputCity city={city} setCity={setCity} setQueryCity={setQueryCity} queryCity={queryCity}/>
            </div>
        </div>
    );
};

export default StartPage;