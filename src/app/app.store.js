import { createStore, compose, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import appReducer from './app.reducer';

const persisConfig = {
	key: 'state',
	storage,
};

const persistedReducer = persistReducer(persisConfig, appReducer);

const composeEnhancers =
	process.env.NODE_ENV === 'development' ? composeWithDevTools : compose;

export const store = createStore(
	persistedReducer,
	composeEnhancers(applyMiddleware(thunkMiddleware)),
);

export const persistor = persistStore(store);
