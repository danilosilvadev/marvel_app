import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { View, StyleSheet, TouchableHighlight, Text, Dimensions } from 'react-native'
import { ItemHero, Pagination, Spinner } from '../../components'
import { genPagination, globalStyle } from '../../utils'
import { initialState, actions } from '../../redux'

function SearchPage ({ heroes, loading, dispatchSearch, requestError, searchTerm }) {
  const [pages, setPages] = useState(genPagination(heroes.total, 1))
  const [activePage, setActivePage] = useState(1)

  useEffect(() => {
    setPages(genPagination(heroes.total, activePage))
  }, [heroes])

  const _handleClickFirst = () => {
    setActivePage(1)
    setPages(genPagination(heroes.total, 1))
    dispatchSearch(heroes.query, 1)
  }

  const _handleClickLast = () => {
    const lastPage = Math.floor(heroes.total / 4)
    setActivePage(lastPage)
    setPages(genPagination(heroes.total, lastPage))
    dispatchSearch(heroes.query, lastPage)
  }

  return (
    <View>
      {loading ? <Spinner /> : (
        <View>
          <Text style={styles.header}>
              {handleMessage(searchTerm, requestError)}
          </Text>
          {searchTerm === '' ? null : (
            <View>
            {heroes.results.map(item => <ItemHero key={item.name} hero={item}/>)}
            <View style={styles.paginationSection}>
            <TouchableHighlight
              style={styles.buttons}
              underlayColor={globalStyle.mainColor}
              onPress={_handleClickFirst}
            >   
                <View style={styles.row}>
                 <View style={styles.arrowLeft} />
                </View>
              </TouchableHighlight>
              <View style={styles.pages}>
                {pages.map(item => (
                  <Pagination
                    active={activePage === item}
                    setActivePage={setActivePage}
                    setPages={setPages}
                    value={item}
                    key={item}
                  />
                ))}
              </View>
              <TouchableHighlight
                underlayColor={globalStyle.mainColor}
                style={styles.buttons}
                onPress={_handleClickLast}
              >
                <View style={styles.row}>
                  <View style={styles.arrowRight} />
                </View>
              </TouchableHighlight>
            </View>
            </View>
          )}
        </View>
      )}
    </View>
  )
}

const handleMessage = (searchTerm, requestError) => {
  switch (true) {
    case !!requestError:
        return 'Algo deu errado'
    case searchTerm === '':
        return 'Realize uma pesquisa'
    default:
      return 'Nome'
  }
}

const { height, width } = Dimensions.get('window');

const arrowsStyle = {
  width: 0,
  height: 0,
  borderTopWidth: 15,
  borderTopColor: 'transparent',
  borderBottomWidth: 15,
  borderBottomColor: 'transparent',
}

const styles = StyleSheet.create({
  paginationSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20
  },
  row: {
    flexDirection: 'row',
  },
  pages: {
    flexDirection: 'row',
  },
  buttons: {
    justifyContent: 'center',
  },
  whiteColor: {
    color: 'white'
  },
  header: {
    backgroundColor: globalStyle.mainColor,
    paddingTop: height * 0.01,
    paddingBottom: height * 0.01,
    paddingLeft: 20,
    color: 'white',
    justifyContent: 'center',
    width
  },
  arrowRight: {
      ...arrowsStyle,
      borderLeftWidth: 15,
      borderLeftColor: globalStyle.mainColor,
      marginRight: 20,
    },
    arrowLeft: {
      ...arrowsStyle,
      borderRightWidth: 15,
      borderRightColor: globalStyle.mainColor,
      marginLeft: 20,
    },
})

const mapDispatchToProps = dispatch => ({
  dispatchSearch: (term, page) => dispatch(actions.searchResults(term, page))
})

const mapStateToProps = state => ({
  heroes: state.searchReducer.search || initialState.search,
  loading: state.searchReducer.loading || initialState.loading,
  requestError: state.requestError || initialState.requestError
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage)