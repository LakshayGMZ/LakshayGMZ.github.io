import React, {FC} from "react";
import ToolEntity from "../components/ToolEntity.tsx";
import {
    ArrowCircleUp,
    SettingsBrightnessOutlined,
    TextRotationAngledownOutlined,
    WheelchairPickupRounded
} from "@mui/icons-material";

const Experience: FC = () => {

    return (
        <div className={"toolEntityListContainer"}>
            {/*<ToolEntity icon={"/icons/python.svg"} type={"TOOL"} reference={"jbjdw"} expLevel={"Expert"} />*/}
            {/*<ToolEntity icon={<img src={"/icons/react.svg"} style={{backgroundColor: "red"}} />} type={"TOOL"} reference={"jbjdw"} expLevel={"Expert"} />*/}

            <ToolEntity icon={<ArrowCircleUp fontSize={"inherit"}/>} type={"TOOL"} reference={"jbjdw"} expLevel={"Expert"} />
            <ToolEntity icon={<WheelchairPickupRounded fontSize={"inherit"} />} type={"TOOL"} reference={"https://"} expLevel={"Proficient"} />
            <ToolEntity icon={<TextRotationAngledownOutlined fontSize={"inherit"} />} type={"FRAMEWORK"} reference={"yyooyoy"} expLevel={"Beginner"} />
            <ToolEntity icon={<SettingsBrightnessOutlined fontSize={"inherit"} />} type={"TOOL"} reference={"zak"} expLevel={"Intermediate"} />
        </div>

    )
}

export default Experience;