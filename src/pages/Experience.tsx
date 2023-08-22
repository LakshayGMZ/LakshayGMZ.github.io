import React, {FC, useState} from "react";
import ToolEntity from "../components/ToolEntity.tsx";
import {Tab, Tabs} from "@mui/material";

const data = [{
    "id": 1,
    "type": "FRAMEWORK",
    "refernce": "https://google.com.hk/luctus/cum/sociis/natoque/penatibus/et/magnis.js",
    "expLevel": "Intermediate",
    "icon": "Span"
}, {
    "id": 2,
    "type": "LANGUAGE",
    "refernce": "http://imageshack.us/pellentesque.json",
    "expLevel": "Proficient",
    "icon": "Zoolab"
}, {
    "id": 3,
    "type": "FRAMEWORK",
    "refernce": "http://wsj.com/porttitor/lacus/at/turpis.jsp",
    "expLevel": "Expert",
    "icon": "Lotstring"
}, {
    "id": 4,
    "type": "TOOL",
    "refernce": "http://reuters.com/nisi/eu.js",
    "expLevel": "Expert",
    "icon": "Konklux"
}, {
    "id": 5,
    "type": "FRAMEWORK",
    "refernce": "http://e-recht24.de/dolor/sit.json",
    "expLevel": "Expert",
    "icon": "Y-Solowarm"
}, {
    "id": 6,
    "type": "TOOL",
    "refernce": "http://symantec.com/augue/vestibulum/rutrum.jsp",
    "expLevel": "Beginner",
    "icon": "Cardguard"
}, {
    "id": 7,
    "type": "TOOL",
    "refernce": "http://patch.com/erat/vestibulum/sed.aspx",
    "expLevel": "Intermediate",
    "icon": "Trippledex"
}, {
    "id": 8,
    "type": "TOOL",
    "refernce": "https://infoseek.co.jp/nisl.jpg",
    "expLevel": "Intermediate",
    "icon": "Aerified"
}, {
    "id": 9,
    "type": "TOOL",
    "refernce": "https://list-manage.com/molestie.js",
    "expLevel": "Intermediate",
    "icon": "Otcom"
}, {
    "id": 10,
    "type": "LANGUAGE",
    "refernce": "http://spiegel.de/turpis.aspx",
    "expLevel": "Proficient",
    "icon": "Konklab"
}, {
    "id": 11,
    "type": "LANGUAGE",
    "refernce": "http://google.com.br/in/tempus/sit/amet/sem/fusce/consequat.xml",
    "expLevel": "Intermediate",
    "icon": "Konklab"
}, {
    "id": 12,
    "type": "FRAMEWORK",
    "refernce": "https://posterous.com/egestas/metus/aenean/fermentum/donec.json",
    "expLevel": "Expert",
    "icon": "Stringtough"
}, {
    "id": 13,
    "type": "TOOL",
    "refernce": "http://hatena.ne.jp/vel/dapibus/at/diam/nam/tristique.png",
    "expLevel": "Intermediate",
    "icon": "Andalax"
}, {
    "id": 14,
    "type": "TOOL",
    "refernce": "https://lulu.com/ut/dolor/morbi/vel/lectus/in/quam.jsp",
    "expLevel": "Expert",
    "icon": "Solarbreeze"
}, {
    "id": 15,
    "type": "LANGUAGE",
    "refernce": "http://newyorker.com/pulvinar/lobortis/est/phasellus/sit/amet/erat.json",
    "expLevel": "Beginner",
    "icon": "Stim"
}, {
    "id": 16,
    "type": "FRAMEWORK",
    "refernce": "https://bloomberg.com/blandit/mi.js",
    "expLevel": "Beginner",
    "icon": "Bamity"
}, {
    "id": 17,
    "type": "LANGUAGE",
    "refernce": "https://twitpic.com/nulla/nunc/purus/phasellus/in/felis/donec.jpg",
    "expLevel": "Expert",
    "icon": "Redhold"
}, {
    "id": 18,
    "type": "TOOL",
    "refernce": "http://foxnews.com/in/magna/bibendum/imperdiet/nullam/orci.html",
    "expLevel": "Beginner",
    "icon": "Bitchip"
}, {
    "id": 19,
    "type": "FRAMEWORK",
    "refernce": "http://slate.com/tortor/risus/dapibus/augue.aspx",
    "expLevel": "Beginner",
    "icon": "It"
}, {
    "id": 20,
    "type": "LANGUAGE",
    "refernce": "https://issuu.com/est/risus/auctor.jsp",
    "expLevel": "Expert",
    "icon": "Temp"
}, {
    "id": 21,
    "type": "LANGUAGE",
    "refernce": "https://loc.gov/nisi/eu/orci.js",
    "expLevel": "Proficient",
    "icon": "Stronghold"
}, {
    "id": 22,
    "type": "TOOL",
    "refernce": "http://microsoft.com/lacus/curabitur/at.png",
    "expLevel": "Proficient",
    "icon": "Daltfresh"
}, {
    "id": 23,
    "type": "TOOL",
    "refernce": "http://wikia.com/cursus/urna/ut/tellus/nulla.jsp",
    "expLevel": "Expert",
    "icon": "Rank"
}, {
    "id": 24,
    "type": "FRAMEWORK",
    "refernce": "http://china.com.cn/mauris/laoreet/ut/rhoncus/aliquet.js",
    "expLevel": "Beginner",
    "icon": "Duobam"
}, {
    "id": 25,
    "type": "LANGUAGE",
    "refernce": "https://slate.com/rhoncus/sed/vestibulum/sit/amet/cursus.png",
    "expLevel": "Beginner",
    "icon": "Solarbreeze"
}, {
    "id": 26,
    "type": "FRAMEWORK",
    "refernce": "http://sohu.com/consequat/varius/integer/ac/leo/pellentesque/ultrices.xml",
    "expLevel": "Beginner",
    "icon": "Home Ing"
}, {
    "id": 27,
    "type": "TOOL",
    "refernce": "http://mozilla.org/et/ultrices/posuere/cubilia/curae.js",
    "expLevel": "Beginner",
    "icon": "Keylex"
}, {
    "id": 28,
    "type": "TOOL",
    "refernce": "https://mtv.com/posuere/cubilia/curae/duis/faucibus.html",
    "expLevel": "Expert",
    "icon": "Quo Lux"
}, {
    "id": 29,
    "type": "FRAMEWORK",
    "refernce": "http://last.fm/augue/quam/sollicitudin/vitae.html",
    "expLevel": "Expert",
    "icon": "Bytecard"
}, {
    "id": 30,
    "type": "LANGUAGE",
    "refernce": "https://ox.ac.uk/placerat.js",
    "expLevel": "Expert",
    "icon": "Sonsing"
}, {
    "id": 31,
    "type": "TOOL",
    "refernce": "https://businessinsider.com/sed/accumsan/felis/ut/at.jpg",
    "expLevel": "Intermediate",
    "icon": "Konklux"
}, {
    "id": 32,
    "type": "LANGUAGE",
    "refernce": "http://themeforest.net/vel/augue/vestibulum.jsp",
    "expLevel": "Expert",
    "icon": "Otcom"
}, {
    "id": 33,
    "type": "TOOL",
    "refernce": "https://tmall.com/congue/vivamus/metus/arcu/adipiscing/molestie/hendrerit.js",
    "expLevel": "Beginner",
    "icon": "Zoolab"
}, {
    "id": 34,
    "type": "LANGUAGE",
    "refernce": "http://github.io/mauris/laoreet/ut/rhoncus.js",
    "expLevel": "Proficient",
    "icon": "Daltfresh"
}, {
    "id": 35,
    "type": "FRAMEWORK",
    "refernce": "https://nps.gov/risus/praesent/lectus/vestibulum/quam/sapien/varius.aspx",
    "expLevel": "Expert",
    "icon": "Greenlam"
}, {
    "id": 36,
    "type": "LANGUAGE",
    "refernce": "https://twitter.com/at/velit/eu/est/congue.json",
    "expLevel": "Proficient",
    "icon": "Tempsoft"
}, {
    "id": 37,
    "type": "FRAMEWORK",
    "refernce": "https://zimbio.com/metus.xml",
    "expLevel": "Beginner",
    "icon": "Temp"
}, {
    "id": 38,
    "type": "FRAMEWORK",
    "refernce": "https://gravatar.com/cursus/id/turpis/integer.js",
    "expLevel": "Expert",
    "icon": "Subin"
}, {
    "id": 39,
    "type": "TOOL",
    "refernce": "http://umich.edu/vitae/mattis/nibh/ligula/nec.html",
    "expLevel": "Expert",
    "icon": "Latlux"
}, {
    "id": 40,
    "type": "FRAMEWORK",
    "refernce": "https://webs.com/posuere/cubilia/curae/nulla/dapibus.json",
    "expLevel": "Proficient",
    "icon": "Bamity"
}, {
    "id": 41,
    "type": "FRAMEWORK",
    "refernce": "http://dagondesign.com/nascetur/ridiculus/mus/etiam/vel/augue.xml",
    "expLevel": "Beginner",
    "icon": "Bamity"
}, {
    "id": 42,
    "type": "FRAMEWORK",
    "refernce": "https://biblegateway.com/ac/consequat/metus/sapien.html",
    "expLevel": "Proficient",
    "icon": "Temp"
}, {
    "id": 43,
    "type": "TOOL",
    "refernce": "http://pbs.org/rhoncus.json",
    "expLevel": "Beginner",
    "icon": "Sonair"
}, {
    "id": 44,
    "type": "TOOL",
    "refernce": "http://google.com.au/sed/sagittis/nam/congue/risus.json",
    "expLevel": "Beginner",
    "icon": "Home Ing"
}, {
    "id": 45,
    "type": "FRAMEWORK",
    "refernce": "https://uiuc.edu/quisque/arcu/libero.jpg",
    "expLevel": "Intermediate",
    "icon": "Domainer"
}, {
    "id": 46,
    "type": "FRAMEWORK",
    "refernce": "https://livejournal.com/ultrices.aspx",
    "expLevel": "Beginner",
    "icon": "Daltfresh"
}, {
    "id": 47,
    "type": "TOOL",
    "refernce": "http://si.edu/vitae/consectetuer/eget/rutrum.aspx",
    "expLevel": "Proficient",
    "icon": "Asoka"
}, {
    "id": 48,
    "type": "TOOL",
    "refernce": "http://over-blog.com/ultrices/vel/augue/vestibulum.aspx",
    "expLevel": "Beginner",
    "icon": "Alphazap"
}, {
    "id": 49,
    "type": "FRAMEWORK",
    "refernce": "http://unesco.org/lacinia/sapien/quis/libero/nullam/sit.js",
    "expLevel": "Expert",
    "icon": "Ronstring"
}, {
    "id": 50,
    "type": "FRAMEWORK",
    "refernce": "http://yellowpages.com/id/ornare/imperdiet/sapien.html",
    "expLevel": "Proficient",
    "icon": "Voyatouch"
}]


const Experience: FC = () => {

    const lang = data.filter(i => i.type == "LANGUAGE")
    const frame = data.filter(i => i.type == "FRAMEWORK")
    const tool = data.filter(i => i.type == "TOOL")

    const [value, setValue] = useState(0);

    function handleChange(_e: React.SyntheticEvent, val: number) {
        setValue(val);
    }

    return (
        <>
            <Tabs value={value} onChange={handleChange} aria-label="frameworks and tools">
                <Tab label="LANGUAGES"/>
                <Tab label="FRAMEWORKS"/>
                <Tab label="TOOLS"/>
            </Tabs>
            <div className={"toolEntityListContainer"}>

                {
                    value == 0 &&
                    lang.map(i =>
                        <ToolEntity
                            id={i.id}
                            icon={i.icon}
                            type={i.type as "LANGUAGE" | "TOOL" | "FRAMEWORK"}
                            reference={i.refernce}
                            expLevel={i.expLevel as "Beginner" | "Intermediate" | "Proficient" | "Expert"}
                            key={i.id}/>
                    )}
                {
                    value == 1 &&
                    frame.map(i =>
                        <ToolEntity
                            id={i.id}
                            icon={i.icon}
                            type={i.type as "LANGUAGE" | "TOOL" | "FRAMEWORK"}
                            reference={i.refernce}
                            expLevel={i.expLevel as "Beginner" | "Intermediate" | "Proficient" | "Expert"}
                            key={i.id}/>
                    )}
                {
                    value ==2 &&
                    tool.map(i =>
                        <ToolEntity
                            id={i.id}
                            icon={i.icon}
                            type={i.type as "LANGUAGE" | "TOOL" | "FRAMEWORK"}
                            reference={i.refernce}
                            expLevel={i.expLevel as "Beginner" | "Intermediate" | "Proficient" | "Expert"}
                            key={i.id}/>
                    )}


                {/*/!*<ToolEntity icon={"/icons/python.svg"} type={"TOOL"} reference={"jbjdw"} expLevel={"Expert"} />*!/*/}
                {/*/!*<ToolEntity icon={<img src={"/icons/react.svg"} style={{backgroundColor: "red"}} />} type={"TOOL"} reference={"jbjdw"} expLevel={"Expert"} />*!/*/}

                {/*<ToolEntity icon={<ArrowCircleUp fontSize={"inherit"}/>} type={"TOOL"} reference={"jbjdw"}*/}
                {/*            expLevel={"Expert"}/>*/}
                {/*<ToolEntity icon={<WheelchairPickupRounded fontSize={"inherit"}/>} type={"TOOL"} reference={"https://"}*/}
                {/*            expLevel={"Proficient"}/>*/}
                {/*<ToolEntity icon={<TextRotationAngledownOutlined fontSize={"inherit"}/>} type={"FRAMEWORK"}*/}
                {/*            reference={"yyooyoy"} expLevel={"Beginner"}/>*/}
                {/*<ToolEntity icon={<SettingsBrightnessOutlined fontSize={"inherit"}/>} type={"TOOL"} reference={"zak"}*/}
                {/*            expLevel={"Intermediate"}/>*/}
            </div>
        </>

    )
}

export default Experience;