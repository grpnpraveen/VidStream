//npm install react-router-dom@5 axios redux-thunk flv.js (rtmpserver node-media-server)
import React from "react";
import ReactDOM from "react-dom/client";
//Redux
import {createStore, applyMiddleware, compose} from "redux";
import {Provider} from "react-redux";
//redux thunk
import thunk from "redux-thunk";
//Components
import App from "./components/App";
import reducers from "./reducers";

const root = ReactDOM.createRoot(document.getElementById("root"));
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store=createStore(reducers,composeEnhancers(applyMiddleware(thunk)));
root.render(
    <Provider store={store}>
            <App/>

    </Provider>
);