import React, {FC, useState} from "react";
import {Divider} from "@mui/material";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLink} from "@fortawesome/free-solid-svg-icons"

type propType = {
    label: string,
    id: string
    children: React.ReactNode
}
const Section = (props: propType) => {
    const [isHovering, setIsHovering] = useState(false);

    return (
        <section className={"sectionContainer"} id={props.id}>
            <div className={"sectionTitleContainer"}
                 onMouseOut={() => setIsHovering(false)}
                 onMouseOver={() => setIsHovering(true)} >
                <div className={"sectionTitleEmbedder"}></div>
                    <h2>{props.label}</h2>
                    {
                        isHovering && <div className={"sectionLinkContainer"}>
                            <a href={"/#" + props.id}>
                                <FontAwesomeIcon icon={faLink} size={'xl'} />
                            </a>
                        </div>
                    }

                </div>
            <Divider
                orientation={"horizontal"}
                variant={"fullWidth"}
                light={true}
            />

            {/* Content here */}
            {props.children}

        </section>
    )
}

export default Section;