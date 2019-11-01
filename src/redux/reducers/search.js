import actionType from '../actionTypes'
import initialState from '../initialState'

export default function (state = initialState, payload = {}) {
  switch (payload.type) {
    case actionType.SEARCH_SUCCESS:
      return {
        ...state,
        ...payload,
      }
    case actionType.SEARCH_FAILED:
      return {
        ...state,
        ...payload,
      }
    case actionType.LOADING:
      return {
        ...state,
        ...payload,
      }
    default:
      return state
  }
}