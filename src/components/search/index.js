import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet  } from 'react-native'
import { connect } from 'react-redux'
import { actions } from '../../redux'
import { globalStyle } from '../../utils'

 function SearchComponent ({ searchResults, setSearchTerm }) {
  const [term, setTerm] = useState('')

  const _handleChange = (data) => {
    setTerm(data)
    if (data === '') {
      setSearchTerm('')
      return
    }
    setSearchTerm(data)
    searchResults(data, 1)
  }

  return (
    <View style={styles.wrapper}>
      <Text style={styles.text}>Nome do Personagem</Text>
      <TextInput style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        clearButtonMode="always"
        onChangeText={_handleChange}
        value={term}
        placeholder=''            
        testID="explorer_search" 
      />
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: 'grey',
    height: 30,
    borderRadius: 3
  },
  wrapper: {
    margin: 20,
  },
  text: {
    color: globalStyle.mainColor
  }
})

const mapDispatchToProps = dispatch => 
  ({searchResults: (term, page) => dispatch(actions.searchResults(term, page))})


export default connect(() => ({}), mapDispatchToProps)(SearchComponent)