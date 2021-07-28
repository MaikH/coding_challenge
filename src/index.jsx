import React from "react";
import ReactDOM from "react-dom";
import createSagaMiddleware from "redux-saga";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";

import rootReducer from "./store/reducers";
import rootSaga from "./store/saga";

import App from "./components/App";

import reportWebVitals from "./reportWebVitals";
import "./index.scss";

const initialState = {};

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

const enhancerList = [applyMiddleware(...middlewares)];

if (window.__REDUX_DEVTOOLS_EXTENSION__) {
  enhancerList.push(window.__REDUX_DEVTOOLS_EXTENSION__());
}

const enhancer = compose(...enhancerList);

const store = createStore(rootReducer, initialState, enhancer);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
); // If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

reportWebVitals();
