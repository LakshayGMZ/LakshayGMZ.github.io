import React, {FC} from "react";
import {IconProps, LinearProgress} from "@mui/material";
import {SvgIconComponent} from "@mui/icons-material";

interface ToolInterface {
    icon: any
    type : "LANGUAGE" | "TOOL" | "FRAMEWORK",
    reference: String,
    expLevel: "Beginner" | "Intermediate" | "Proficient" | "Expert"
}
const colorMapping = {
    Beginner: {color: "success", value: 25},
    Intermediate: {color: "info", value: 50},
    Proficient: {color: "warning", value: 75},
    Expert: {color: "error", value: 100}
}
const ToolEntity = (props: ToolInterface) => {

    return (
        <div className={"toolEntityContainer"}>
            <div className={"toolLabelContainer"}>
                {props.expLevel}
            </div>

            <div className={"toolIconContainer"}>
                {<img className={"icon"} style={{
                    backgroundColor: 'red',
                    WebkitMaskImage: `url("${props.icon}")`,
                    maskImage: `url("${props.icon}")`}} />}
            </div>

            <br />

            <div className={"progressBarContainer"}>
                <LinearProgress
                    variant="determinate"
                    value={colorMapping[props.expLevel].value}
                    color={colorMapping[props.expLevel].color}
                />
            </div>
        </div>
    )
}

export default ToolEntity;