import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';


// SAGA to POST
function* setItem(action) {
    try {
      const response = yield axios.post('/api/shelf', action.payload);
      console.log(response);
    //   yield put({ type: 'SET_ITEM' });
    } catch (error) {
      console.log('User get request failed', error);
    }
  }

function* addSaga() {
  yield takeEvery('POST_ITEM', setItem);
}

export default addSaga;