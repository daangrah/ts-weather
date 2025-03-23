import { createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {IWeather} from "../models/IWeather";
const key = "dfb696639fae4ab8a3c131424252203";


export const weatherAPI = createApi({
    reducerPath: 'weatherAPI',
    baseQuery: fetchBaseQuery({baseUrl: 'http://api.weatherapi.com/v1'}),
    endpoints: (build) => ({
        fetchCurrentWeather: build.query<IWeather, string>({
            query: (city) => ({
                url: 'current.json',
                params: {
                    key,
                    q: city,
                    aqi: 'yes'
                }
            })
        })
    })
})