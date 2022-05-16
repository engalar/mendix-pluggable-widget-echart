import { Properties, StructurePreviewProps, transformGroupsIntoTabs } from "./piw-utils-internal";
import { EchartPreviewProps } from "../typings/EchartProps";

export function getProperties(
    values: EchartPreviewProps,
    defaultProperties: Properties,
    platform: "web" | "desktop"
): Properties {
    console.log(values);
    if (platform === "web") {
        transformGroupsIntoTabs(defaultProperties);
    }
    return defaultProperties;
}
export function getPreview(values: EchartPreviewProps): StructurePreviewProps | null {
    console.log(values);
    return null;
}
