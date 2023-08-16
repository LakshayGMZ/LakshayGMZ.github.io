import React, {FC, useState} from "react";
import IconButton from '@mui/material/IconButton';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import {Tooltip} from "@mui/material";
const GoToTop: FC = () => {
    
    const [topReached, setTopReached] = useState(false)

    return (
        <div className={"scrollToTopButton"}>
            {!topReached &&
                <Tooltip title={"Scroll to Top"}>
                    <IconButton aria-label={'scroll to top'} size={"large"}>
                        <ArrowCircleUpIcon fontSize={"inherit"}/>
                    </IconButton>
                </Tooltip>
            }
        </div>
    )
}

export default GoToTop;