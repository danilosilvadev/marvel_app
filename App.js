/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useState } from 'react';
import ReduxThunk from 'redux-thunk';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Dimensions
} from 'react-native';
import { Header, Search } from './src/components'
import { rootReducer } from './src/redux'
import { SearchPage } from './src/screens';

const middlewares = [ReduxThunk]
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(...middlewares))
);

const App = () => {

  const [searchTerm, setSearchTerm] = useState('')

  return (
    <Provider store={store}>
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View style={styles.headerWrapper}>
            <Header />
            <Search setSearchTerm={setSearchTerm} />
          </View>
          <View>
            <SearchPage searchTerm={searchTerm} />
            {global.HermesInternal == null ? null : (
              <View style={styles.engine}>
                <Text>Engine: Hermes</Text>
              </View>
            )}
          </View>
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
