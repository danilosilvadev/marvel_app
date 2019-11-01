import React from 'react';
import { Text, TouchableHighlight, StyleSheet } from 'react-native';
import { connect } from 'react-redux'
import { actions, initialState } from '../../redux'
import { globalStyle, genPagination } from '../../utils';

const CircleButton = ({ value, active, dispatchSearch, searchResults, setActivePage, setPages }) => {
    let isBtnActive = { backgroundColor: (active ? globalStyle.mainColor : 'white') }
    let isTextActive = { backgroundColor: (active ? globalStyle.mainColor : 'white') }

    const _handlePress = () => {
        setActivePage(value)
        setPages(genPagination(searchResults.total, value))
        if (value === 1) {
            dispatchSearch(searchResults.query, value)
        } else {
            dispatchSearch(searchResults.query, value + (3 * value - 1))
        }
    }

    return (
        <TouchableHighlight 
            underlayColor={globalStyle.mainColor} 
            onPress={_handlePress}
            style={[styles.circleButton, isBtnActive ]}
        >
            <Text style={{color: active ? 'white' : globalStyle.mainColor }}>{value}</Text>
        </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
  circleButton: {
      alignItems: 'center',
      borderRadius: 25,
      borderColor: globalStyle.mainColor,
      borderWidth: 1,
      justifyContent: 'center',
      marginVertical: 2,
      marginHorizontal: 10,
      height: 40,
      width: 40,
  },
});

const mapDispatchToProps = dispatch => ({
    dispatchSearch: (term, page) => dispatch(actions.searchResults(term, page))
})

const mapStateToProps = state => ({
    searchResults: state.searchReducer.search || initialState.search
})

export default connect(mapStateToProps, mapDispatchToProps)(CircleButton);