import {SectionWrapper} from "../../../component/_layout/SectionWrapper";
import {Container} from "../../../component/_layout/Container";
import {SectionTitle} from "../../../component/_layout/SectionTitle";
import {Swiper, SwiperSlide} from "swiper/react";
import SwiperCore, {Navigation} from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import {Case} from "../../../component/Case";
import styled from "styled-components/macro";
import {CasesEntityType} from "../../../api/api";
import React from "react";
import {SectionAnchor} from "../../../component/_layout/SectionAnchor";

// install Swiper modules
SwiperCore.use([Navigation]);

export const Cases: React.FC<PropsType> = (props) => {

    const {
        cases
    } = props

    return (
        <SectionWrapper>
            <SectionAnchor id={'cases'}/>
            <Container>
                <SectionTitle title={'Cases'} subtitle={'Trusted by'}/>
                <StyledSwiper
                    breakpoints={{
                        0: {
                            slidesPerView: 1
                        },
                        900: {
                            slidesPerView: 2
                        },
                        1500: {
                            slidesPerView: 3
                        },
                    }}
                    navigation
                    loop={true}
                >
                    {cases.map((item: CasesEntityType) => (
                        <SwiperSlide key={item.id}>
                            <Case
                                companyName={item.companyName}
                                companyLogoUrl={`${process.env.REACT_APP_CMS_DOMAIN}${item.companyLogo.url}`}
                                backgroundUrl={`${process.env.REACT_APP_CMS_DOMAIN}${item.background.url}`}
                                improvement_1={item.improvement_1}
                                improvement_1_description={item.improvement_1_description}
                                improvement_2={item.improvement_2}
                                improvement_2_description={item.improvement_2_description}/>
                        </SwiperSlide>))}
                </StyledSwiper>
            </Container>
        </SectionWrapper>
    )
}

// Styles
const StyledSwiper = styled(Swiper)`
  height: 25rem;
  width: 100%;

  & .swiper-button-prev, .swiper-button-next {
    color: ${({theme}) => theme.color.secondary.main};

    &:hover {
      color: ${({theme}) => theme.color.primary.main};
    }
  }
`

// Types
type PropsType = {
    cases: Array<CasesEntityType>
}