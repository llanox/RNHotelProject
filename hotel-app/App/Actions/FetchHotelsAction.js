import Config from '../Config'
import React from 'react';

export const HOTEL_LIST_AVAILABLE = 'HOTEL_LIST_AVAILABLE';

 
export function fetchHotels(){
    return (dispatch) => {
        fetch(`http://${Config.apiServer}:${Config.port}/hotels`)
        .then((response) => response.json())
        .then((responseJson) => dispatch({type: HOTEL_LIST_AVAILABLE, data:responseJson.data}))
        .catch(e => console.error('Error fetching hotels ',e));
 
    };
}

