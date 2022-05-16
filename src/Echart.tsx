import { createElement, useMemo } from "react";
import { EchartContainerProps } from "../typings/EchartProps";
import { ValueStatus } from "mendix";

export default function (props: EchartContainerProps) {
    console.log(eval("{a:1}"));
    const value = useMemo(() => {
        if (props.attribute && props.attribute.status === ValueStatus.Available) {
            return props.attribute.value;
        }
    }, [props.attribute]);

    return (
        <div>
            hello {props.sampleText} and your value is {value}
        </div>
    );
}
