// store.js

import { createStore } from 'redux';
import counterReducer from '../Reducer/Reducer';


// Create the Redux store
const store = createStore(counterReducer);

export default store;
