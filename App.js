/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Dimensions
} from 'react-native';
import { Header, Search, ItemHero } from './src/components'
import { globalStyle } from './src/utils'

const App: () => React$Node = () => {
  const mockHeroes = [{name: 'batman', image: 'https://www.sideshow.com/storage/product-images/904599/iron-man-mark-lxxxv__silo.png'}, { name: 'shazam', image: 'https://www.sideshow.com/storage/product-images/904599/iron-man-mark-lxxxv__silo.png'}]
  return (
    <>
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />
          <Search />
          <Text style={styles.listHeader}>Nome</Text>
          <View>
            {mockHeroes.map(item => <ItemHero key={item.name} hero={item}/>)}
          </View>
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text>Engine: Hermes</Text>
            </View>
          )}
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'white',
  },
  listHeader: {
    backgroundColor: globalStyle.mainColor,
    color: 'white',
    paddingTop: height * 0.01,
    paddingBottom: height * 0.01,
    paddingLeft: width * 0.25
  },
  engine: {
    position: 'absolute',
    right: 0,
  }
});

export default App;
