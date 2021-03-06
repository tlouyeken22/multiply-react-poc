import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import * as serviceWorker from './serviceWorker'


import { createStore, applyMiddleware, compose } from "redux"
import rootReducer from "./store/reducers/rootReducer"
import { Provider } from "react-redux";
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase'
import { reduxFirestore, getFirestore } from 'redux-firestore'
import thunk from 'redux-thunk'
import firebase from './config/firebase'

const store = createStore(rootReducer,
    compose(
        applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
        reactReduxFirebase(firebase, { userProfile: 'users', useFirestoreForProfile: true, attachAuthIsReady: true }),
        reduxFirestore(firebase)
    ));

// const styleLink = document.createElement("link");
// styleLink.rel = "stylesheet";
// styleLink.href = "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
// document.head.appendChild(styleLink);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
