import { call, put, takeLatest } from 'redux-saga/effects'
import { cocktailSliceActions } from 'modules/CocktailDashboard/redux/cocktailSlice'
import { cocktailGetRequest } from 'services/cocktailService'

export function* cocktailGetData(
  action: ReturnType<typeof cocktailSliceActions.cocktailGetRequest>
) {
  try {
    const { data } = yield call(cocktailGetRequest, action.payload)
    yield put(
      cocktailSliceActions.cocktailGetSuccess({
        cocktailCode: action.payload,
        cocktailFetchedData: data,
      })
    )
  } catch (error) {
    yield put(cocktailSliceActions.cocktailGetError())
    alert(error)
  }
}

function* cocktailSaga() {
  yield takeLatest(cocktailSliceActions.cocktailGetRequest, cocktailGetData)
}

export default cocktailSaga
