import { Action } from "../constants";

export const fetchList = (data) => {
   return {
      type: Action.FETCH_DATA,
      payload: data
   };
};
export const storeListData = (result) => {
   return {
      type: Action.LIST_FETCHED,
      data: result,
   };
};
export const apiCalled = () => {
   return {
      type: Action.API_CALLED,
   };
};
export const fetchError = (error) => {
   return {
      type: Action.FETCH_ERROR,
      error: error
   };
}