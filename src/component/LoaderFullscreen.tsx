import styled from "styled-components/macro";
import {ReactComponent as Preloader} from "../assets/svg/preloader.svg";

export const LoaderFullscreen = () => {
    return (
        <LoaderWrapper>
            <Preloader/>
        </LoaderWrapper>
    )
}

// Styles
const LoaderWrapper = styled.div`
  position: fixed;
  z-index: 1000;
  
  display: flex;
  align-items: center;
  justify-content: center;
  
  width: 100vw;
  height: 100vh;
  
  background: ${({theme}) => theme.color.primary.main};;
`