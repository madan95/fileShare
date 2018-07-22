import React from 'react';
import ReactDOM from 'react-dom';
import LoginForm from './LoginForm';
import UploadForm from "./form/UploadForm";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

const root = document.getElementById('root');

ReactDOM.render((
    <BrowserRouter>
        <App />
    </BrowserRouter>
), root);
/*

ReactDOM.render(
    <div>
        <UploadForm />
    </div>,
    root
);

*/
/*
ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render(
    <h1>Hello, m8</h1>,
    document.getElementById('root')
);

const name = 'madan';
const element = <h1>Forbidden, {name}</h1>;

ReactDOM.render(
    element,
    document.getElementById('root')
);


function tick(){
    const timeUI = (
        <div>
            <h1> Time </h1>
            <h2>It is {new Date().toLocaleTimeString()}. </h2>
        </div>
    );
    ReactDOM.render(timeUI, root);
}
*/
//setInterval(tick, 1000);
