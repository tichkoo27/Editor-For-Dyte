import React from 'react';
import "codemirror/lib/codemirror.css";
import "codemirror/mode/xml/xml";
import { Controlled as ControlledEditor } from "react-codemirror2";

export default function Editor(props) {
    const {
        language,
        value,
        onChange
    } = props;
    

    function handleChange(editor, data, value){
        onChange(value);
    }

    return (
        <div>
            <h1>Code Editor</h1>
            <ControlledEditor
                onBeforeChange = {handleChange}
                value = {value}
                className="code-mirror-wrapper"
                options = {{
                    lineWrapping : true,
                    lint : true,
                    mode : language,
                    theme : "material",
                    lineNumbers : true
                }}
            />
        </div>
    )
}
