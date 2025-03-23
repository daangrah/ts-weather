import React, {useState} from 'react';
import './App.css';
import CurrentWeather from "./components/CurrentWeather";
import StartPage from "./components/StartPage";
import {Route, Routes} from "react-router-dom";

function App() {
    const [city, setCity] = useState('');
    const [queryCity, setQueryCity] = useState(city);
    return (
        <Routes>
                <Route path="/" element={<StartPage city={city} queryCity={queryCity} setCity={setCity}
                                                    setQueryCity={setQueryCity}/>}/>
                <Route path="/current/:city"
                       element={<CurrentWeather queryCity={queryCity} setQueryCity={setQueryCity} city={city} setCity={setCity}/>}/>
        </Routes>
    );
}

export default App;
