import React, {FC, memo} from "react";
import {Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineSeparator} from "@mui/lab";
import {Chrono} from "react-chrono";

// https://github.com/prabhuignoto/react-chrono

const data = [
    {
        "title": "2 August 23",
        "cardTitle": "quis e",
        "url": "https://bettie.info",
        "cardSubtitle": "dolore reprehenderit mollit",
        "cardSubtitleText": "cillum ipsum cillum non",
        "media": {
            "type": "IMAGE",
            "source": {
                "url": "https://theodora.name"
            }
        }
    },
    {
        "title": "2 October 23",
        "cardTitle": "labore",
        "url": "http://madelynn.net",
        "cardSubtitle": "velit sint est ut officia eu magna ut nisi",
        "cardSubtitleText": "elit incididunt aliquip aliquip eu aute sit cupidatat laborum voluptate non amet",
        "media": {
            "type": "IMAGE",
            "source": {
                "url": "http://tiana.name"
            }
        }
    },
    {
        "title": "1 November 23",
        "cardTitle": "cillum ull",
        "url": "http://kelli.net",
        "cardSubtitle": "duis aliquip aliquip aliqua commodo nisi duis commodo",
        "cardSubtitleText": "officia et aute nostrud esse commodo deserunt ullamco aliquip eiusmod esse occaecat eu minim quis",
        "media": {
            "type": "IMAGE",
            "source": {
                "url": "http://adan.info"
            }
        }
    },
    {
        "title": "1 January 24",
        "cardTitle": "proid",
        "url": "http://minerva.info",
        "cardSubtitle": "ea irure sint tempor fugiat tempor sint non amet sint minim anim duis anim exercitation ipsum esse irure dolor",
        "cardSubtitleText": "",
        "media": {
            "type": "IMAGE",
            "source": {
                "url": "https://bridget.com"
            }
        }
    },
    {
        "title": "1 April 24",
        "cardTitle": "sit null",
        "url": "http://garrett.net",
        "cardSubtitle": "aute ipsum aute cupidatat anim amet aliquip officia laboris",
        "cardSubtitleText": "adipisicing tempor laborum exercitation do occaecat mollit sint labore reprehenderit consequat anim ea irure exercitation esse culpa id sint amet",
        "media": {
            "type": "IMAGE",
            "source": {
                "url": "http://fidel.org"
            }
        }
    },
    {
        "title": "1 June 24",
        "cardTitle": "quis o",
        "url": "http://myrtie.net",
        "cardSubtitle": "esse laborum incididunt minim ea cupidatat dolore minim velit reprehenderit dolore ipsum labore veniam",
        "cardSubtitleText": "mollit quis eu nulla amet cillum et et nostrud duis fugiat",
        "media": {
            "type": "IMAGE",
            "source": {
                "url": "https://gabe.org"
            }
        }
    },
    {
        "title": "2 July 24",
        "cardTitle": "ex eni",
        "url": "https://bart.name",
        "cardSubtitle": "cupidatat incididunt magna eiusmod sunt ullamco id fugiat dolore eu Lorem fugiat dolore esse ad laborum enim laboris",
        "cardSubtitleText": "magna Lorem est nostrud et occaecat mollit et proident do cillum enim laborum voluptate voluptate reprehenderit duis anim ullamco",
        "media": {
            "type": "IMAGE",
            "source": {
                "url": "https://santino.net"
            }
        }
    },
    {
        "title": "31 August 24",
        "cardTitle": "paria",
        "url": "http://laurine.org",
        "cardSubtitle": "nisi velit esse",
        "cardSubtitleText": "et quis ullamco",
        "media": {
            "type": "IMAGE",
            "source": {
                "url": "https://deion.name"
            }
        }
    },
    {
        "title": "1 December 24",
        "cardTitle": "aliqua ",
        "url": "http://emilie.info",
        "cardSubtitle": "eu proident ad exercitation",
        "cardSubtitleText": "elit ad",
        "media": {
            "type": "IMAGE",
            "source": {
                "url": "http://mozelle.com"
            }
        }
    },
    {
        "title": "31 December 24",
        "cardTitle": "est de",
        "url": "http://therese.org",
        "cardSubtitle": "aute",
        "cardSubtitleText": "nisi non laborum consectetur non ullamco non ex mollit et",
        "media": {
            "type": "IMAGE",
            "source": {
                "url": "http://queen.name"
            }
        }
    }
]

const ProjectTimelineItem = (props: {children: string, lastElement?: boolean}) => {
    return (
        <TimelineItem>
            <TimelineSeparator>
                <TimelineDot/>
                {!props.lastElement && <TimelineConnector/>}
            </TimelineSeparator>
            <TimelineContent>{props.children}</TimelineContent>
        </TimelineItem>
    )
}


const AlternateTimeline = () => {

    return (
        // <Timeline position="alternate" >
        //
        //     <ProjectTimelineItem>eat</ProjectTimelineItem>
        //
        //     <ProjectTimelineItem>code</ProjectTimelineItem>
        //
        //     <ProjectTimelineItem>eat</ProjectTimelineItem>
        //
        //     <ProjectTimelineItem>code</ProjectTimelineItem>
        //
        //     <ProjectTimelineItem>eat</ProjectTimelineItem>
        //
        //     <ProjectTimelineItem>code</ProjectTimelineItem>
        //
        //     <ProjectTimelineItem>eat</ProjectTimelineItem>
        //
        //     <ProjectTimelineItem>code</ProjectTimelineItem>
        //
        //     <ProjectTimelineItem lastElement={true}>repeat</ProjectTimelineItem>
        //
        // </Timeline>
        <div style={{ width: "80%", alignSelf: "center" }}>
            <Chrono items={data}
                    mode="VERTICAL"
                    slideShow
            />
        </div>
    )
}

export default memo(AlternateTimeline);