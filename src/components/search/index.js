import React from 'react'
import { View, Text, TextInput  } from 'react-native'

export default function () {
  return <View><Text style={style}>Nome do Personagem</Text><TextInput style={{
    backgroundColor: 'white',
    paddingLeft: 20,
    height: 35,
  }}
  autoCapitalize="none"
  autoCorrect={false}
  clearButtonMode="always"
  onChangeText={(data) => {}}
  placeholder='friends'            
  testID="explorer_search" /></View>
}

const style = {
  color: 'black'
}