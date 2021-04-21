import React from "react";
import {ReviewsEntityT} from "../../../api/api";
import {Container} from "../../../component/_layout/Container";
import {SectionTitle} from "../../../component/_layout/SectionTitle";
import {Swiper, SwiperSlide} from "swiper/react";
import {SectionWrapper} from "../../../component/_layout/SectionWrapper";
import styled from "styled-components/macro";
import {Review} from "../../../component/_typography/Review";
import {SectionAnchor} from "../../../component/_layout/SectionAnchor";

export const Reviews: React.FC<PropsType> = (props) => {

    const {
        reviews
    } = props

    return (
        <SectionWrapper id={'reviews'}>
            <SectionAnchor />
            <Container>
                <SectionTitle title={'Reviews'} subtitle={'Words from our clients'}/>
                <StyledSwiper
                    navigation
                    pagination={{ clickable: true }}
                    loop={true}
                >
                    {reviews.map((item: ReviewsEntityT) => (
                        <SwiperSlide key={item._id}>
                            <Review fullName={item.fullName} pictureUrl={item.picture.url} review={item.review}/>
                        </SwiperSlide>))}
                </StyledSwiper>
            </Container>
        </SectionWrapper>
    )
}

// Styles
const StyledSwiper = styled(Swiper)`
  height: 12rem;
  width: 100%;

  @media (max-width: ${({theme}) => theme.mediaQuery.tabletMax}) {
    height: 13rem;
  }

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
    reviews: Array<ReviewsEntityT>
}