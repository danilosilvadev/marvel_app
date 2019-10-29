import React from 'react'
import {
  View,
  Text
} from 'react-native'

export default function (props) {
  return (
      <View >
        <Text style={style}> 
          {props.hero && props.hero.name}
        </Text>
      </View>
    )
  }
  
const style = {
        color: 'black'
}