import React, {FC, useRef, useState} from "react";
import IconButton from '@mui/material/IconButton';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import {Tooltip} from "@mui/material";
const GoToTop: FC = () => {
    
    const [topReached, setTopReached] = useState(false)
    const ref = useRef<HTMLDivElement>(null);


    return (
        <>
            <div ref={ref} />
            <div className={"scrollToTopButton"}>
                {!topReached &&
                    <Tooltip title={"Scroll to Top"}>
                        <IconButton
                            aria-label={'scroll to top'}
                            onClick={() => ref.current?.scrollIntoView({ behavior: 'smooth' })} >
                            <ArrowCircleUpIcon fontSize={"inherit"} style={{zoom: 2.5}} />
                        </IconButton>
                    </Tooltip>
                }
            </div>
        </>

    )
}

export default GoToTop;