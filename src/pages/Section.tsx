import React, {FC} from "react";
import {Divider} from "@mui/material";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLink} from "@fortawesome/free-solid-svg-icons"

type propType = {
    label: String,
    children: React.ReactNode
}
const Section = (props: propType) => {

    return (
        <section className={"sectionContainer"}>
            <div className={"sectionTitleContainer"}>
                <div className={"sectionTitleEmbedder"}></div>
                    <h2>{props.label}</h2>
                    <FontAwesomeIcon icon={faLink} size={'xl'} />
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