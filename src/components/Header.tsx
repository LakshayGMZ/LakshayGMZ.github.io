import React, {FC, useContext, useReducer} from "react";
import {Container, Nav, Navbar} from "react-bootstrap";
import IconButton from "@mui/material/IconButton";
import {DarkMode, LightMode} from "@mui/icons-material";
import {SetThemeContext, ThemeContext} from "../context/ThemeContext.tsx";

const Header: FC = () => {
    const theme = useContext(ThemeContext);
    const setTheme = useContext(SetThemeContext);

    function handleThemeSwitch(e: { preventDefault: () => void; }) {
        e.preventDefault();
        // @ts-ignore
        setTheme(prevTheme => (
            prevTheme === "light" ? "dark" : "light"
        ))
    }

    return (
        <Navbar bg={theme} data-bs-theme={theme} sticky={"top"}>
            <Container>
                <Navbar.Brand href="/">Lakshay's Portfolio</Navbar.Brand>

                <Nav className="ml-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                    <IconButton onClick={handleThemeSwitch}>
                        {
                            theme === "light" ? <LightMode /> :
                            theme === "dark" ? <DarkMode />:
                            null
                        }
                    </IconButton>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Header;