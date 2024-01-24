/**
 * This file was generated from TcAceEditor.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { CSSProperties } from "react";
import { EditableValue } from "mendix";

export type LanguageEnum = "html" | "sql" | "javascript" | "json";

export interface TcAceEditorContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    language: LanguageEnum;
    editorValue: EditableValue<string>;
}

export interface TcAceEditorPreviewProps {
    /**
     * @deprecated Deprecated since version 9.18.0. Please use class property instead.
     */
    className: string;
    class: string;
    style: string;
    styleObject?: CSSProperties;
    readOnly: boolean;
    language: LanguageEnum;
    editorValue: string;
    onChange: {} | null;
}
