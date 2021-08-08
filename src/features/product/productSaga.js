import { takeLatest, put, call } from "redux-saga/effects";
import productApi from "../../api/productApi";
import { REQUEST, SUCCESS, FAILURE } from "../../app/store/actionType";
import { productAction } from "./productConstant";
function* fetchProducts(action) {
  try {
    let startAt = new Date().getTime();
    const res = yield call(productApi.getAll, action.payload.params);
    yield put({
      type: SUCCESS(productAction.FETCH_LIST),
      payload: {
        data: res.data,
        total: res.total,
        searchTime: new Date().getTime() - startAt,
      },
    });
  } catch (error) {
    yield put({
      type: FAILURE(productAction.FETCH_LIST),
      payload: { message: "Data error" },
    });
  }
}

export default function* productSaga() {
  yield takeLatest(REQUEST(productAction.FETCH_LIST), fetchProducts);
}
