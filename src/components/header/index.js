import React from 'react'
import { View, Text, Dimensions } from 'react-native'
import { globalStyle } from '../../utils'

export default function () {
  return <View><Text style={styles.mainText}><Text style={styles.boldText}>BUSCA MARVEL </Text>TESTE FRONT-END</Text></View>
}

const { height, width } = Dimensions.get('window');

const styles = {
  mainText: {
    color: globalStyle.mainColor
  },
  boldText: {
    fontWeight: 'bold',
    borderBottomWidth: 1,
    borderBottomColor: globalStyle.mainColor
  }
}