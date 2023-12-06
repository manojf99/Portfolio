import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import Routes from './src/componant/Routes';
import { Provider } from 'react-redux';
import store from './src/redux/store';


 const App=()=> {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
    <Routes/>
    </Provider>




  
)}
export default App;

