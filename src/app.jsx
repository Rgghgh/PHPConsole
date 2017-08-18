import React from 'react';
import brace from 'brace';
import AceEditor from 'react-ace';

import 'brace/mode/php';
import 'brace/theme/github';

function onChange(newValue) {
    console.log('change',newValue);
}

export class App extends React.Component {
    render() {
        return <h1>Hello</h1>
    }
}