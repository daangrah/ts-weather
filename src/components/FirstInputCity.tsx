import React from 'react';
import {useNavigate} from "react-router-dom";

const FirstInputCity = ({city, setCity, setQueryCity}: any) => {

    const navigate = useNavigate();
    const enterHandler = (e: any) => {
        if (e.key === 'Enter') {
            setQueryCity(city);
            navigate(`/current/${city}`, {state: {queryCity: city}});
            setCity('');
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