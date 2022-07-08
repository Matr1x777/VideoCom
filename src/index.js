import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import {store} from "./redux/store";
import UserContext from "./Context/User/UserContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
        <UserContext.Provider value={{
            name:"Ivan",
            surname:"Smolyarchuk",
            photo:"https://i.pinimg.com/280x280_RS/84/dd/e4/84dde42e3978a55e770ad33784e9131e.jpg",
            liked:[],
            disLiked:[],
            history:[],
            comments:[],

        }}>
            <App/>
        </UserContext.Provider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
