import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import rootReducer from './reducers';

export default function configureStore() {
	const middlewares = [thunk];
	const middlewareEnhancer = applyMiddleware(...middlewares);

	const enhancers = [middlewareEnhancer /* ... */];
	const composedEnhancers = composeWithDevTools(...enhancers);

	return createStore(rootReducer, composedEnhancers);
}
