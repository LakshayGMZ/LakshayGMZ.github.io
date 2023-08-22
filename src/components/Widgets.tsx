import React, {useContext} from "react";
import {ThemeContext} from "../context/ThemeContext.tsx";

const Widgets = () => {
    const theme = useContext(ThemeContext);
    const themeName = "vue" + (theme == "dark" && '-dark');
    return (
        <div>
            <img src={`https://github-readme-stats.vercel.app/api?username=lakshayGMZ&theme=${themeName}&show_icons=true`}  alt={"github"}/>
        </div>
    );
}

export default Widgets;