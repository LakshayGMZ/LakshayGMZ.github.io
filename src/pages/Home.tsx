import React, {FC} from "react";
import Section from "./Section.tsx";
import Experience from "./Experience.tsx";
import RootPage from "./Root.tsx";
import AlternateTimeline from "../components/ProjectTimeline.tsx";
import Intro from "./Intro.tsx";
import SocialLinks from "../components/SocialLinks.tsx";

const HomePage: FC = () => {

    return (
        <div>
            {/*<Intro />*/}
            <RootPage>
                <Section label={"About me"} id={'about'} >
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis congue gravida magna, vel auctor magna facilisis posuere. Mauris pharetra consectetur commodo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Curabitur ipsum ante, lobortis et suscipit vitae, vehicula et sapien. Morbi a magna malesuada, elementum elit ac, interdum leo. Mauris quis condimentum leo. Nullam at metus vel libero rhoncus ornare et vel mauris. Maecenas ut malesuada tellus, in molestie nunc. Suspendisse a magna neque. Donec quam ante, rhoncus id rutrum eu, auctor ac libero. Pellentesque luctus molestie sollicitudin. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean ac arcu sit amet ligula scelerisque dignissim id in enim. Praesent venenatis dui id vehicula pharetra.</p>
                </Section>

                <Section label={"Tools and Frameworks"} id={'tools'} >
                    <Experience />
                </Section>

                <Section label={"Projects and Achievements"} id={'timeline'} >
                    <AlternateTimeline />
                </Section>

                <Section label={"Connect with me!"} id={'contact'} >
                    <SocialLinks />
                </Section>

            </RootPage>
        </div>
    )
}

export default HomePage;