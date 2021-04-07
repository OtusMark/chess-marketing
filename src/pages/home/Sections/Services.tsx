import {Container} from "../../../component/_layout/Container";
import {SectionWrapper} from "../../../component/_layout/SectionWrapper";
import styled from "styled-components/macro";
import {SectionTitle} from "../../../component/_layout/SectionTitle";
import {ITD, ITDType} from "../../../component/ITD";
import React, {useEffect, useState} from "react";
import {homepageAPI} from "../../../api/api";
import {SectionDescription} from "../../../component/_layout/SectionDescription";

export const Services: React.FC<PropsType> = (props) => {

    const {
        description
    } = props

    const [services, setServices] = useState([])

    useEffect(() => {
        homepageAPI.getServices()
            .then(res => setServices(res.data))
    }, [])

    return (
        <SectionWrapper>
            <Container>
                <SectionTitle title={'Our services'} subtitle={'Powerful and affordable'}/>
                <SectionDescriptionWrapper>
                    <SectionDescription description={description}/>
                </SectionDescriptionWrapper>
                <ServicesInner>
                    {services.map( (item: ITDType & {id: number, icon: {url: string}}) => (
                        <ITDWrapper key={item.id}>
                            <ITD color={'primary'} title={item.title} description={item.description} imgUrl={`${process.env.REACT_APP_CMS_DOMAIN}${item.icon.url}`}/>
                        </ITDWrapper>
                    ))}
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

const SectionDescriptionWrapper = styled.div`
  width: 50%;
  padding-bottom: 5.5rem;
`

const ITDWrapper = styled.div`
  width: 45%;
  margin-bottom: 5rem;

  @media (max-width: ${({theme}) => theme.mediaQuery.tabletMax}) {
    width: 100%;
  }
`

// Types
type PropsType = {
    description?: string
}