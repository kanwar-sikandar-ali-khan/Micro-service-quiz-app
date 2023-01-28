// import auth_reducer from "./reducer/auth_reducer";
import reducer from './reducer'
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger'

const persistConfig = {
  key: "root",
  storage,
};
const middleware = [];
const logger = createLogger({ collapsed: false })
const persistedReducer = persistReducer(persistConfig, reducer);
const show_logger_console = false
if (show_logger_console) {
  middleware.push(logger)
}
const store = createStore(persistedReducer, composeWithDevTools(
  applyMiddleware(thunk, ...middleware),
));



const persistor = persistStore(store);

export { store, persistor };
