import Config from '../Config'
import React from 'react';

export const HOTEL_DETAIL_AVAILABLE = 'HOTEL_DETAIL_AVAILABLE';


export function fetchHotelDetailsById(id){
    return (dispatch) => {
        console.log('service call ',`http://${Config.apiServer}:${Config.port}/hotel-details?hotel_id=${id}`)
        fetch(`http://${Config.apiServer}:${Config.port}/hotel-details?hotel_id=${id}`)
        .then((response) => response.json())
        .then((responseJson) => dispatch({type: HOTEL_DETAIL_AVAILABLE, details:responseJson.data[0]}))
        .catch(e => console.error('Error fetching hotels ',e)); 
    };
}

