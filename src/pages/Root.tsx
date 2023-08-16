import React, {FC, JSX} from "react";
import Header from "../components/Header.tsx";
import GoToTop from "../components/GoToTop.tsx";
import Footer from "../components/Footer.tsx";


const RootPage = (props: {children: JSX.Element[]}) => {

    return (
        <div>
            <GoToTop/>
            <Header/>
            {/* Page content here */}
            {props.children}
            <Footer/>
        </div>
    )
}

export default RootPage;