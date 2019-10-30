import actionType from '../actionTypes'

export default function (state = {}, payload = {}) {
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