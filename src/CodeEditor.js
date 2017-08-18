import ReactAce from 'react-ace-editor';
import React, {Component} from 'react';

export class CodeEditor extends Component {
    constructor() {
        super();
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        this.ace.editor.insert("<?php\n\n");

        this.ace.editor.setOptions({
            enableBasicAutocompletion: true
        });
    }

    onChange(newValue, e) {
        console.log(newValue, e);

        const editor = this.ace.editor; // The editor object is from Ace's API
        console.log(editor.getValue()); // Outputs the value of the editor
    }

    render() {
        return (
            <ReactAce
                mode="javascript"
                theme="github"
                onChange={this.onChange}
                style={{height: '50vh', width: '100vw', fontSize: '16px'}}
                ref={instance => { this.ace = instance;}}
            />
        );
    }
}