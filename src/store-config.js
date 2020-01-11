import {createStore, applyMiddleware} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import thunk from 'redux-thunk';
import reducer from './reducer';

const persistConfig = {
  key: 'medication',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, reducer);

// export default () => {
//   let store = createStore(persistedReducer, applyMiddleware(thunk));
//   let persistor = persistStore(store);
//   return {store, persistor};
// };

export let store = createStore(persistedReducer, applyMiddleware(thunk));
export let persistor = persistStore(store);
