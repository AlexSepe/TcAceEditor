import { Component, ReactNode, createElement } from "react";
import { TcAceEditorContainerProps } from "../typings/TcAceEditorProps";

import "./ui/TcAceEditor.css";
import { Editor } from "./components/Editor";

export class TcAceEditor extends Component<TcAceEditorContainerProps> {
    private readonly onChangeEditorHandle = this.onChangeEditor.bind(this);

    private onChangeEditor(e: any): void {
        console.log("changed -> ", e);
        this.props.editorValue.setValue(e);
    }

    render(): ReactNode {
        const value = this.props.editorValue.value || "";
        return (
            <Editor
                mode={this.props.language || ""}
                dark={false}
                onChange={this.onChangeEditorHandle}
                value={value}
                style={this.props.style}
                className={this.props.class}
            />
        );
    }
}
