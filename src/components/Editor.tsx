import { Component, CSSProperties, ReactNode, createElement } from "react";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/theme-chaos";
import "ace-builds/src-noconflict/theme-xcode";
import "ace-builds/src-noconflict/ext-language_tools.js";
import "ace-builds/src-noconflict/mode-sql";
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-json";

// const ace = require("ace-builds/src-noconflict/ace");
// ace.config.set(
//     "basePath",
//     "https://cdn.jsdelivr.net/npm/ace-builds@1.4.3/src-noconflict/"
// );
// ace.config.setModuleUrl(
//     "ace/mode/javascript_worker",
//     "https://cdn.jsdelivr.net/npm/ace-builds@1.4.3/src-noconflict/worker-javascript.js"
// );

export interface EditorProps {
    mode: string;
    dark: boolean;
    onChange?: (value: any) => void;
    onBlur?: (value: any) => void;
    value?: string;
    style?: CSSProperties;
    className?: string;
}

export class Editor extends Component<EditorProps> {
    private readonly handleChange = this.onChange.bind(this);
    showPrintMargin = false;
    showGutter = true;
    highlightActiveLine = true;
    wrapEnabled = true;

    private onChange(newValue: string): void {
        if (this.props.onChange) {
            this.props.onChange(newValue);
        }
    }

    render(): ReactNode {
        return (
            <AceEditor
                className={this.props.className}
                style={this.props.style}
                mode={this.props.mode}
                width="100%"
                theme={this.props.dark ? "chaos" : "xcode"}
                onChange={this.handleChange}
                fontSize={14}
                showPrintMargin={this.showPrintMargin}
                showGutter={this.showGutter}
                highlightActiveLine={this.highlightActiveLine}
                value={this.props.value}
                wrapEnabled={this.wrapEnabled}
                setOptions={{
                    useWorker: false,
                    enableBasicAutocompletion: true,
                    enableLiveAutocompletion: true,
                    enableSnippets: true,
                    showLineNumbers: true,
                    tabSize: 2
                }}
            />
        );
    }
}
