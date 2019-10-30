import React, { useState } from 'react'
import { View, Text, TextInput  } from 'react-native'
import { connect } from 'react-redux'
import { actions } from '../../redux'

 function SearchComponent (props) {
  const [term, setTerm] = useState('')
  console.log(props.searchResults, 'minha props')
  return (
    <View>
      <Text>Nome do Personagem</Text>
      <TextInput style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        clearButtonMode="always"
        onChangeText={data => {
          setTerm(data)
          props.searchResults(data, 1)}
        }
        value={term}
        placeholder='friends'            
        testID="explorer_search" 
      />
    </View>
  )
}

const styles = {
  input: {}
}

export default connect(() => ({}), () => actions)(SearchComponent)