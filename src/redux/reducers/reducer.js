import { Action } from "../constants";

const initialState = {
   isLoading: false,
   moveList: null,
   error: null
}

export const mainReducer = (state = initialState, action) => {
   switch (action.type) {
      case Action.FETCH_DATA:
         return {
            ...state,
            isLoading: true
         };
      case Action.LIST_FETCHED:
         return {
            ...state,
            moveList: action.data
         };
      case Action.API_CALLED:
         return {
            ...state,
            isLoading: false
         };
      case Action.FETCH_ERROR:
         return {
            ...state,
            isLoading: false,
            error: action.error
         };
      default:
         return false;
   }
}