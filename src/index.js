import React from 'react';
import {render} from 'react-dom';
import brace from 'brace';
import AceEditor from 'react-ace';

import 'brace/mode/php';
import 'brace/theme/github';

function onChange(newValue) {
    console.log('change', newValue);
}

class App extends React.Component {
    render() {
        return <AceEditor
            mode="php"
            theme="github"
            onChange={onChange}
            name="code"
            editorProps={{$blockScrolling: true, $enableBasicAutocompletion: true, $enableLiveAutocompletion:true}}
        />
    }
}

render(
    <App/>,
    document.getElementById('root')
);