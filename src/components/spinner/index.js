import React from 'react';
import { ActivityIndicator, View, StyleSheet, Dimensions } from 'react-native';
import { globalStyle } from '../../utils';

const Spinner = () => {
    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" color={globalStyle.mainColor} />
        </View>
    )
}

const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
      flex: 1,
      marginTop: height / 4,
  }
});

export default Spinner;