import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import { createStore } from "redux";
import { Provider } from 'react-redux';
import PostListReducer from "./reducers/post-list-reducer";

const store = createStore(PostListReducer);

store.subscribe(() => console.log(store.getState()));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store = {store}>
    <App />
  </Provider>
);
