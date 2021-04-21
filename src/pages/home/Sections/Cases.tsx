import {SectionWrapper} from "../../../component/_layout/SectionWrapper";
import {Container} from "../../../component/_layout/Container";
import {SectionTitle} from "../../../component/_layout/SectionTitle";
import {Swiper, SwiperSlide} from "swiper/react";
import {Case} from "../../../component/Case";
import styled from "styled-components/macro";
import {CasesEntityT} from "../../../api/api";
import React from "react";
import {SectionAnchor} from "../../../component/_layout/SectionAnchor";

export const Cases: React.FC<PropsType> = (props) => {

    const {
        cases
    } = props

    return (
        <SectionWrapper id={'cases'}>
            <SectionAnchor />
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
                    pagination={{ clickable: true }}
                    loop={true}
                >
                    {cases.map((item: CasesEntityT) => (
                        <SwiperSlide key={item._id}>
                            <Case
                                companyName={item.companyName}
                                companyLogoUrl={item.companyLogo.url}
                                backgroundUrl={item.background.url}
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
  height: 30rem;
  width: 100%;

  & .swiper-button-prev, .swiper-button-next {
    color: ${({theme}) => theme.color.secondary.main};

    &:hover {
      color: ${({theme}) => theme.color.primary.main};
    }

    @media (max-width: ${({theme}) => theme.mediaQuery.tabletMax}) {
      display: none;
    }
  }
  
  & .swiper-pagination-bullet {
    border-radius: 0;
    background-color: ${({theme}) => theme.color.primary.main};
    opacity: 80%;
    &-active {
      background-color: ${({theme}) => theme.color.secondary.main};
      opacity: 100%;
    }
  }
`

// Types
type PropsType = {
    cases: Array<CasesEntityT>
}