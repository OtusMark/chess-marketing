import {ReactComponent as ChessLogo} from "../../assets/svg/logo.svg";
import styled from "styled-components/macro";

export const Logo = () => {
    return (
           <StyledChessLogo/>
    )
}

const StyledChessLogo = styled(ChessLogo)`
  height: 3rem;
  width: auto;
`