import React from 'react';
import {FaBars} from 'react-icons/fa';
import { Nav,NavbarContainer,NavLogo,MobileIcon, NavMenu,NavItem,NavLinks,NavBtn,NavBtnLink } from './NavbarElement'

const Navbar = () => {
    return (
        <>
            <Nav>
                 <NavbarContainer>
                   <NavLogo to="/">tutor</NavLogo>
                     <MobileIcon>
                        <FaBars/>
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="findtutor">Find Tutor</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="howitwork">How It Works</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="about">About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="becometutor">Become Tutor</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to="/login">LogIn</NavBtnLink>
                        <NavBtnLink to="/signup">SignUp</NavBtnLink>
                    </NavBtn>
                </NavbarContainer> 
            </Nav>
        </>
    )
};

export default Navbar
