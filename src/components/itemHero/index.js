import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image
} from 'react-native'
import { globalStyle } from '../../utils';

export default function (props) {
  return (
      <View style={styles.wrapper}>
        <Image
          style={{width: 50, height: 50}}
          source={{uri: props.hero && props.hero.image}}
        />
        <Text style={styles.name}>
          {props.hero && props.hero.name}
        </Text>
      </View>
    )
  }

  const { height, width } = Dimensions.get('window');

  
  const styles = StyleSheet.create({
    wrapper: {
      paddingLeft: width * 0.05,
      paddingTop: height * 0.03,
      paddingBottom: height * 0.03,
      borderBottomColor: globalStyle.mainColor,
      borderBottomWidth: 1,
      flexDirection: 'row',
      alignItems: 'center'
    },
    image: {
      width: 50,
      height: 50,
      borderRadius: 50
    },
    name: {
      marginLeft: width * 0.07,
    }
  });