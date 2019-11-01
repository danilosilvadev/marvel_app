import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { globalStyle } from '../../utils'

export default function () {
  return (
  <View style={styles.wrapper}>
    <View style={styles.customBorder}>
      <Text style={[styles.boldText, styles.primaryColor]}>
        BUSCA 
      </Text>
      </View>
      <Text style={styles.primaryColor}>
      <Text style={styles.boldText}> MARVEL</Text> TESTE FRONT-END
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    marginLeft: 20,
    marginTop: 10
  },
  primaryColor: {
    color: globalStyle.mainColor
  },
  customBorder: {
    borderBottomColor: globalStyle.mainColor,
    borderBottomWidth: 1.5,
  },
  boldText: {
    fontWeight: 'bold',
    borderBottomWidth: 1,
    borderBottomColor: globalStyle.mainColor
  }
})