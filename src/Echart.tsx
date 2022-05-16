import { createElement, useMemo } from "react";
import { EchartContainerProps } from "../typings/EchartProps";
import { ValueStatus } from "mendix";
import ReactECharts from 'echarts-for-react';

export default function (props: EchartContainerProps) {
    const options = useMemo(() => JSON.parse(props.optionString), []);

    const scores = useMemo(() => {
        if (props.Score.status === ValueStatus.Available) {
            return props.Score.items!.map(d => props.ScoreValue!.get(d).value!.toNumber());
        }
        return [];
    }, [props.Score]);

    console.log(scores);

    return (
        <div>
            hello v3
            <ReactECharts option={options} />
        </div>
    );
}
