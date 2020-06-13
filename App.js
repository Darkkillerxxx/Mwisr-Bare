import * as React from 'react';
import { Platform, StyleSheet, Text, View, Button } from 'react-native';
import MainLayout from './Components/MainLayout'
import {createStore,combineReducers} from 'redux';
import {Provider} from 'react-redux'
import loginReducer from './store/Reducers/login'

const rootReducer=combineReducers({
  login:loginReducer
})

const store=createStore(rootReducer)


export default function App() {
  return (
    <Provider store={store}>
        <MainLayout />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
