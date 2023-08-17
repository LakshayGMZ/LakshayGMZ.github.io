import React, {FC} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faGoogle, faLinkedin, faStackOverflow} from "@fortawesome/free-brands-svg-icons";

const SocialLinks: FC = () => {

    return (
        <div className={"socialLinksContainer"}>
            <ul>
                <li>
                    <a href="javascript:void(0)">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </a>
                </li>
                <li>
                    <a className="github" href="#">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                </li>
                <li>
                    <a className="linkedin" href="#">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                </li>
                <li>
                    <a className="stackOverFlow" href="#">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <FontAwesomeIcon icon={faStackOverflow} />
                    </a>
                </li>
                <li>
                    <a className="google" href="#">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <FontAwesomeIcon icon={faGoogle} />
                    </a>
                </li>
                <li>
                    <a href="javascript:void(0)">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default SocialLinks;