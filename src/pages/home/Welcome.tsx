import styled, {keyframes} from "styled-components/macro";
import {Container} from "../../component/layout/Container";
import {ThemeType} from "../../style/theme";
// @ts-ignore
import bgVideo from '../../assets/video/intro_bg.mp4'
import {Button} from "../../component/common/Button";

export const Welcome = () => {
    return (
        <WelcomeMain id="Welcome">
            <BackgroundVideo autoPlay muted loop>
                <source src={bgVideo} type='video/mp4'/>
            </BackgroundVideo>
            <Container>
                <WelcomeInner>

                    <Title>
                        BE 50 STEPS AHEAD OF YOUR COMPETITION
                    </Title>

                    <Subtitle>
                        <span>Get new clients on a daily basis</span> with our lead generation
                    </Subtitle>

                    <Button>
                        Get a free consultation
                    </Button>
                </WelcomeInner>
            </Container>
        </WelcomeMain>
    )
}

const WelcomeMain = styled.main`
  height: 100vh;
  width: 100%;
  background: linear-gradient(to bottom, rgba(26, 26, 26, 1), rgba(26, 26, 26, .6));
  overflow: hidden;
  position: relative;
`

const BackgroundVideo = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;

  min-height: 100%;
  min-width: 100%;
`

const WelcomeInner = styled.div`
  margin-top: 120px;
  height: calc(100vh - 120px);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`

const Title = styled.h1`
  margin-bottom: 40px;

  font-weight: 700;
  font-size: 3rem;
  line-height: 1.2;
  text-transform: uppercase;
`

const Subtitle = styled.h2`
  margin-bottom: 70px;
  font-weight: 400;
  font-size: 1.5rem;

  & span {
    animation: ${({theme}) => changeColor(theme)} ease-in .5s 1s forwards;
  }
`

// Animation
const changeColor = (props: ThemeType) => keyframes`
  from {
    color: ${props.color.white};
  }

  to {
    color: ${props.color.primary.main};
  }
`

