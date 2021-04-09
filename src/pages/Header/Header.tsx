import styled, {keyframes, StyledComponentProps} from "styled-components/macro";
import {Container} from "../../component/_layout/Container";
import {Burger} from "./Burger";
import {useState} from "react";
import {NavLink} from "react-router-dom";
import {ThemeType} from "../../style/theme";
import {Logo} from "../../component/_common/Logo";
import {Link as LinkScroll} from "react-scroll/modules";
import {Link as LinkRouter} from "react-router-dom";

export const Header = () => {

    const [isOpen, setIsOpen] = useState(false)

    const openBurgerMenu = () => {
        setIsOpen(!isOpen)
    }

    return (
        <HeaderMain>
            <Container>
                <HeaderInner>

                    <LinkRouter to={'/'}>
                        <Logo/>
                    </LinkRouter>

                    <Nav isOpen={isOpen}>
                        <NavItems>
                            <LinkStyled to={'about'} activeClass={'active'} spy={true}>About us</LinkStyled>
                            <LinkStyled to={'services'} activeClass={'active'} spy={true}>Services</LinkStyled>
                            <LinkStyled to={'cases'} activeClass={'active'} spy={true}>Cases</LinkStyled>
                            <LinkStyled to={'workProcess'} activeClass={'active'} spy={true}>How we work</LinkStyled>
                            <LinkStyled to={'reviews'} activeClass={'active'} spy={true}>Reviews</LinkStyled>
                            <LinkStyled to={'contacts'} activeClass={'active'} spy={true}>Contact us</LinkStyled>
                        </NavItems>
                    </Nav>
                    <StyledBurger onClick={openBurgerMenu} isOpen={isOpen}/>

                </HeaderInner>
            </Container>
        </HeaderMain>
    )
}

const HeaderMain = styled.header`
  position: fixed;
  top: 0;
  left: 0;

  width: 100%;
  height: ${({theme}) => theme.variable.headerHeight};

  z-index: 100;
  
  background-color: ${({theme}) => theme.color.black};
`

const StyledBurger = styled(Burger)`
  display: none;
  z-index: 101;

  @media (max-width: ${({theme}) => theme.mediaQuery.tabletMax}) {
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

const LinkStyled = styled(LinkScroll)`
  display: inline-block;
  padding: 0 1em;

  white-space: nowrap;

  opacity: 1;
  transition: all .2s;

  font-size: ${({theme}) => theme.font.size.b1};
  
  cursor: pointer;

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

  @media (max-width: ${({theme}) => theme.mediaQuery.tabletMax}) {
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

    ${LinkStyled} {
      animation: ${({isOpen}) => isOpen && LinkFade} 3s ease forwards;
    }
  }
`



