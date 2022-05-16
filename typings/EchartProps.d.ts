/**
 * This file was generated from Echart.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix UI Content Team
 */
import { CSSProperties } from "react";
import { ListValue, ListAttributeValue } from "mendix";
import { Big } from "big.js";

export interface EchartContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    optionString: string;
    Score: ListValue;
    ScoreValue?: ListAttributeValue<Big>;
}

export interface EchartPreviewProps {
    className: string;
    style: string;
    styleObject?: CSSProperties;
    readOnly: boolean;
    optionString: string;
    Score: {} | { type: string } | null;
    ScoreValue: string;
}
