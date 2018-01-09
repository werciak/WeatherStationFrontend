import { FETCH_WEATHERS,FETCH_WEATHER ,FETCH_WEATHERSID} from '../action/types';

export default function (state = {}, action) {

  switch (action.type) {
    
    case FETCH_WEATHERS:
      return [...action.payload.data];
    case FETCH_WEATHER:
      return action.payload.data;
    case FETCH_WEATHERSID:
    return [...action.payload.data];


  
    default:
      return state;
  }
}
