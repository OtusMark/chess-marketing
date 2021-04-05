import {Container} from "../../../component/_layout/Container";
import {SectionWrapper} from "../../../component/_layout/SectionWrapper";
import styled from "styled-components/macro";
import {SectionTitle} from "../../../component/_layout/SectionTitle";
import {ITD} from "../../../component/_common/ITD";
import {ReactComponent as SvgIcon} from '../../../assets/svg/branding.svg'

export const Services = () => {

    return (
        <SectionWrapper>
            <Container>
                <SectionTitle title={'Our services'} subtitle={'Powerful and affordable'}/>
                <ServicesInner>
                    <ITDWrapper>
                        <ITD color={'primary'} title={'Social media marketing'} description={'We are a full service marketing agency in Toronto and San Diego that puts you first. From brand development, website design, social media management'} icon={<SvgIcon/>}/>
                    </ITDWrapper>
                    <ITDWrapper>
                        <ITD color={'primary'} title={'Social media marketing'} description={'We are a full service marketing agency in Toronto and San Diego that puts you first. From brand development, website design, social media management'} icon={<SvgIcon/>}/>
                    </ITDWrapper>
                    <ITDWrapper>
                        <ITD color={'primary'} title={'Social media marketing'} description={'We are a full service marketing agency in Toronto and San Diego that puts you first. From brand development, website design, social media management'} icon={<SvgIcon/>}/>
                    </ITDWrapper>
                </ServicesInner>
            </Container>
        </SectionWrapper>
    )
}

// Styles
const ServicesInner = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  
  @media (max-width: ${({theme}) => theme.mediaQuery.tabletMax}) {
    flex-direction: column;
  }
`

const ITDWrapper = styled.div`
  width: 45%;
  margin-bottom: 4rem;

  @media (max-width: ${({theme}) => theme.mediaQuery.tabletMax}) {
    width: 100%;
  }
`