import fetchSearch from '../../services'

const searchSuccess = (payload) => ({
  type: actionTypes.SEARCH_SUCCESS,
  search: payload,
  loading: false
})

const searchFailed = () => ({
  type: actionTypes.SEARCH_FAILED,
  errorMessage: 'Requisição falhou',
  loading: false
})

const searchResults = (term, page) => {
  return dispatch => {
    fetchSearch(term, page).then(data => {
    console.log('termo assim')
    if (!data) {
      return dispatch(searchFailed())
    }
    return dispatch(successSearch(data))
  })}
}


const loading = () => {
  
}

const actions = {
  searchResults
}

export default actions