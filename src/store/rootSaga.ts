import { all, fork } from 'redux-saga/effects'
import cocktailSaga from 'modules/CocktailDashboard/redux/saga'

export default function* rootSaga() {
  yield all([fork(cocktailSaga)])
}
