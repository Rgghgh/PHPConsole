import React from 'react';
import {render} from 'react-dom';
import {CodeEditor} from "./CodeEditor";

class App extends React.Component {

    render() {
        return (<CodeEditor/>)
    }
}

render(
    <App/>,
    document.getElementById('root')
);