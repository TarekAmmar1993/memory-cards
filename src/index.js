import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'
import {JobPrepContextProvider} from "./context/context";

ReactDOM.render(
    <JobPrepContextProvider>
        <React.StrictMode>
            <App/>
        </React.StrictMode>
    </JobPrepContextProvider>,
    document.getElementById('root')
);