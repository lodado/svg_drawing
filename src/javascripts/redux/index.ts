import { createStore, combineReducers } from 'redux';
import shapeReducer from '@Redux/shape/reducer';

export const rootReducer = combineReducers({
  shapeReducer,
});

const rootStore = createStore(rootReducer);
export type RootStoreType = ReturnType<typeof rootStore.getState>;
export default rootStore;
