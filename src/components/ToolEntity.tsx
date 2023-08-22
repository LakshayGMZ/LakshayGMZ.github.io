import React, {ReactNode, useContext} from "react";
import {LinearProgress, Popover} from "@mui/material";
import {ThemeContext} from "../context/ThemeContext.tsx";

type types = "LANGUAGE" | "TOOL" | "FRAMEWORK";
type levels = "Beginner" | "Intermediate" | "Proficient" | "Expert";

interface ToolInterface {
    id: number
    icon: string,
    type: types,
    reference: string,
    expLevel: levels
}

const colorMapping = {
    Beginner: {color: "success", value: 25},
    Intermediate: {color: "info", value: 50},
    Proficient: {color: "warning", value: 75},
    Expert: {color: "error", value: 100}
}

const Popper = (props: { children: ReactNode, expLevel: string }) => {

    const theme = useContext(ThemeContext);
    const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);

    const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handlePopoverClose = () => {
        setAnchorEl(null);
    };
    const open = Boolean(anchorEl);

    return (
        <div>
            <div
                onMouseOver={handlePopoverOpen}
                onMouseOut={handlePopoverClose}>
                {props.children}
            </div>
            <Popover
                open={open}
                anchorEl={anchorEl}
                sx={{
                    pointerEvents: 'none',
                }}
                disableRestoreFocus
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                onClose={handlePopoverClose}
            >
                <div className={"progressBarLabel"}><b>{props.expLevel}</b></div>
                <div className={"progressBarContainer"}>

                    <LinearProgress
                        variant="determinate"
                        value={colorMapping[props.expLevel as levels].value}
                        color={colorMapping[props.expLevel as levels].color as "success" | "info" | "warning" | "error" | "inherit" | "primary" | "secondary"}


                        sx={{height: 10,
                            borderRadius: 5,
                            backgroundColor: theme === "light" ? "#BEBEBE" : "#414141"
                    }}
                    />
                </div>
            </Popover>

        </div>
    )


}

const ToolEntity = (props: ToolInterface) => {

    return (
        <>
            <div className={"toolEntityContainer"}>
                <Popper expLevel={props.expLevel}>

                    <div className={"toolLabelContainer"}>
                        {props.icon}
                    </div>

                    <div className={"toolIconContainer"}>

                    </div>

                    <br/>


                </Popper>
            </div>
        </>
    )
}

export default ToolEntity;