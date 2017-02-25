import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from '../reducers';
import createLogger from 'redux-logger';

const logger = createLogger();

export default function genStore(state) {
  return applyMiddleware(ReduxThunk, logger)(createStore)(reducers, state)
}
