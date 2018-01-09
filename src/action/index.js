import axios from 'axios';

import {
  
  FETCH_WEATHERS,
  FETCH_WEATHER,
  FETCH_WEATHERSID
} from './types';



export function getAllMeasurements() {
  return async (dispatch) => {
    axios({
      method: 'get',
      mode: 'no-cors',

      url: 'http://localhost:8181/api/weather',
      

    })
      .then(response => {
        dispatch({ 
          type: FETCH_WEATHERS,
          payload: response });


      })
      .catch(e => {
        console.log(e);
      });
  };
}

export function getMeasurement(value) {
  return async (dispatch) => {
    axios({
      method: 'get',
      mode: 'no-cors',

      url: 'http://localhost:8181/api/weather/' + value,
      

    })
      .then(response => {
        dispatch({ 
          type: FETCH_WEATHER,
          payload: response });


      })
      .catch(e => {
        console.log(e);
      });
  };
}



export function pierwsza(value) {
  return async (dispatch) => {
    axios({
      method: 'get',
      mode: 'no-cors',

      url: 'http://localhost:8181/api/weather/rpi/' + value,
      

    })
      .then(response => {
        dispatch({ 
          type: FETCH_WEATHERSID,
          payload: response });


      })
      .catch(e => {
        console.log(e);
      });
  };
}
