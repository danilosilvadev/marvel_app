/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import ReduxThunk from 'redux-thunk';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'
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
import { rootReducer } from './src/redux'

const middlewares = [ReduxThunk]
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(...middlewares))
);

const App: () => React$Node = () => {

  const mockHeroes = [{name: 'batman', image: 'https://www.sideshow.com/storage/product-images/904599/iron-man-mark-lxxxv__silo.png'}, { name: 'shazam', image: 'https://www.sideshow.com/storage/product-images/904599/iron-man-mark-lxxxv__silo.png'}]
  return (
    <Provider store={store}>
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View style={styles.headerWrapper}>
            <Header />
            <Search />
          </View>
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
    </Provider>
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
  },
  headerWrapper: {
    width,
    justifyContent: 'center',
    flex: 1
  },
});

export default App;
