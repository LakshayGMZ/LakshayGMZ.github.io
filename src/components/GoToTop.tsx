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
                    <IconButton aria-label={'scroll to top'}>
                        <ArrowCircleUpIcon fontSize={"inherit"} style={{zoom: 2.5}}/>
                    </IconButton>
                </Tooltip>
            }
        </div>
    )
}

export default GoToTop;