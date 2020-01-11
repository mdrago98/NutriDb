import * as React from 'react';
import {Provider as PaperProvider, DefaultTheme} from 'react-native-paper';
import {Provider} from 'react-redux';
import App from './src/index';
import 'react-native-gesture-handler';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import SearchDetail from './src/pages/search-detail';
import MedicationView from './src/pages/medication-entry';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './src/store-config';

let RootStack = createStackNavigator(
  {
    Search: App,
    Details: SearchDetail,
    MedicationView: MedicationView,
  },
  {
    mode: 'modal',
    initialRouteName: 'Search',
    headerMode: 'none',
    /* The header config from HomeScreen is now here */
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: DefaultTheme.colors.primary,
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  },
);

const theme = {
  ...DefaultTheme,
  roundness: 6,
  colors: {
    ...DefaultTheme.colors,
  },
};

let AppContainer = createAppContainer(RootStack);

export default function Main() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <PaperProvider theme={theme}>
          {/* <StatusBar barStyle="light-content" backgroundColor="#6a51ae" /> */}
          <AppContainer />
        </PaperProvider>
      </PersistGate>
    </Provider>
  );
}
