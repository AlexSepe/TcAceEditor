import { Component, ReactNode, createElement } from "react";
import { TcAceEditorContainerProps } from "typings/TcAceEditorProps";

export class preview extends Component<TcAceEditorContainerProps> {
    render(): ReactNode {
        return <div>ACE EDITOR</div>;
    }
}

export function getPreviewCss(): string {
    return require("./ui/TcAceEditor.css");
}
