import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HashRouter } from 'react-router-dom';
import { Provider } from "react-redux";
import { createStore } from "redux";
import { Actions } from "./components/Reducer";
import {data} from './components/Data';

const root = ReactDOM.createRoot(document.getElementById('root'));
const initialState = {
  total: 0,
  amount: 0,
  data: data,
  modal: false,
  nav: false,
  cart: false,
  orderModal: false,
};
const store = createStore(Actions, initialState);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter hashType="slash">
        <App />
      </HashRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
