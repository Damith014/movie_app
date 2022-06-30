import { call, put, takeLatest } from 'redux-saga/effects';
import { Action } from '../constants';
import { storeListData, apiCalled, fetchError } from '../actions';
import axios from 'axios';
import { API } from '../../constants';

function* getMoveList(action) {
   try {

      const response = yield call(
         axios.get,
         API.list + action.payload
      );
      if (response.status == 200) {
         yield put(storeListData(response.data));
      } else {
         yield put(fetchError(response));
      }
   } catch (error) {
      yield put(fetchError(error.response.data));
   } finally {
      yield put(apiCalled());
   }
}
function* appSaga() {
   yield takeLatest(Action.FETCH_DATA, getMoveList);
}

export default appSaga;