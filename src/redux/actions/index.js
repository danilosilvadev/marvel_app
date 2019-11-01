import {fetchSearch} from '../../services'
import actionTypes from '../actionTypes'

const searchSuccess = (payload) => ({
  type: actionTypes.SEARCH_SUCCESS,
  search: payload,
  loading: false,
  requestError: false
})

const searchFailed = () => ({
  type: actionTypes.SEARCH_FAILED,
  requestError: true,
  loading: false
})

const startLoading = () => ({
  type: actionTypes.LOADING,
  loading: true,
  requestError: false
})

const searchResults = (term, page) => {
  return dispatch => {
    dispatch(startLoading())
    fetchSearch(term, page).then(data => {
    if (!data) {
      return dispatch(searchFailed())
    }
    return dispatch(searchSuccess(data))
  })}
}


const loading = () => {
  
}

const actions = {
  searchResults
}

export default actions