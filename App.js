import React from 'react';
import RootNavigator from './src/navigations/RootNavigator';
import NavigationService from './src/navigations/NavigtionService';
import { Provider } from 'react-redux';
import Store from './src/reducers/Store';



const App = () => {
  return (
    <Provider store={Store}>
      <RootNavigator
        ref={navigatorRef => {
          console.disableYellowBox = true;
          // BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
          NavigationService.setTopLevelNavigator(navigatorRef);
        }} />
    </Provider>
  );
}



export default App;