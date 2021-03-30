import styled, {keyframes, StyledComponentProps} from "styled-components/macro";
import {Container} from "../_layout/Container";
import {Burger} from "./Burger";
import {useState} from "react";
import logo from '../../assets/img/logo.png'
import {NavLink} from "react-router-dom";
import {ThemeType} from "../../style/theme";

export const Header = () => {

    const [isOpen, setIsOpen] = useState(false)

    const openBurgerMenu = () => {
        setIsOpen(!isOpen)
    }

    return (
        <HeaderMain>
            <Container>
                <HeaderInner>

                    <NavLink exact to={'/'}>
                        <Logo src={logo} alt=""/>
                    </NavLink>

                    <Nav isOpen={isOpen}>
                        <NavItems>
                            <NavLinkStyled to={'about'} activeClassName={'active'}>About us</NavLinkStyled>
                            <NavLinkStyled to={'services'} activeClassName={'active'}>Services</NavLinkStyled>
                            <NavLinkStyled to={'cases'} activeClassName={'active'}>Cases</NavLinkStyled>
                            <NavLinkStyled to={'reviews'} activeClassName={'active'}>Reviews</NavLinkStyled>
                            <NavLinkStyled to={'work'} activeClassName={'active'}>How we work</NavLinkStyled>
                            <NavLinkStyled to={'contacts'} activeClassName={'active'}>Contact us</NavLinkStyled>
                        </NavItems>
                    </Nav>
                    <StyledBurger onClick={openBurgerMenu} isOpen={isOpen}/>

                </HeaderInner>
            </Container>
        </HeaderMain>
    )
}

const HeaderMain = styled.header`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: ${({theme}) => theme.variable.headerHeight};

  z-index: 100;
`

const StyledBurger = styled(Burger)`
  display: none;
  z-index: 101;

  @media (max-width: ${({theme}) => theme.mediaQuery.laptop}) {
    display: block;
  }
`

const HeaderInner = styled.div<StyledComponentProps<any, any, any, any>>`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: ${({theme}) => theme.variable.headerHeight};

  transition: all ease-in .2s;
`

const Logo = styled.img`
  max-width: 170px;
`

const LinkFade = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
`
// ...Animation

const NavLinkStyled = styled(NavLink)`
  display: inline-block;
  padding: 0 1em;

  white-space: nowrap;

  opacity: 1;
  transition: all .2s;

  &.active {
    color: ${({theme}) => theme.color.primary.main};
  }
  
  &:hover {
    color: ${({theme}) => theme.color.secondary.main};
  }
`

const NavItems = styled.ul`
  display: flex;
  justify-content: space-between;
`

const Nav = styled.nav<StyledComponentProps<any, ThemeType, any, any>>`

  @media (max-width: ${({theme}) => theme.mediaQuery.laptop}) {
    position: absolute;
    right: 0;
    top: 0;

    height: 100vh;
    width: 100vw;

    background-color: ${({theme}) => theme.color.black};

    transform: ${({isOpen}) => !isOpen && 'translateX(100%)'};
    transition:transform .5s ease-in;
    
    ${NavItems} {
      flex-direction: column;
      justify-content: space-around;
      align-items: center;

      height: inherit;
      margin: 0;
      padding: 150px 20px;

      font-size: 1.1rem;
    }

    ${NavLinkStyled} {
      animation: ${({isOpen}) => isOpen && LinkFade} 3s ease forwards;
    }
  }
`



