import { parseStyle } from "./piw-utils-internal";
import { createElement } from "react";
import { EchartPreviewProps } from "../typings/EchartProps";

declare function require(name: string): string;

export function preview(props: EchartPreviewProps) {
    return <div style={parseStyle(props.style)}></div>;
}

export function getPreviewCss(): string {
    return require("./ui/index.scss");
}
