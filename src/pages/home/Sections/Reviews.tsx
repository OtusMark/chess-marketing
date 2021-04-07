import {useEffect, useState} from "react";
import {homepageAPI, ReviewsEntityType} from "../../../api/api";
import {Container} from "../../../component/_layout/Container";
import {SectionTitle} from "../../../component/_layout/SectionTitle";
import {Swiper, SwiperSlide} from "swiper/react";
import {SectionWrapper} from "../../../component/_layout/SectionWrapper";
import styled from "styled-components/macro";
import {Review} from "../../../component/_typography/Review";
import SwiperCore, {Navigation} from "swiper";

// install Swiper modules
SwiperCore.use([Navigation]);

export const Reviews = () => {

    const [reviews, setReviews] = useState<Array<ReviewsEntityType>>([])

    useEffect(() => {
        homepageAPI.getReviews()
            .then(res => setReviews(res.data))
    }, [])

    return (
        <SectionWrapper>
            <Container>
                <SectionTitle title={'Reviews'} subtitle={'Words from our clients'}/>
                <StyledSwiper
                    navigation
                    loop={true}
                >
                    {reviews.map((item: ReviewsEntityType) => (
                        <SwiperSlide key={item.id}>
                            <Review fullName={item.fullName} pictureUrl={`${process.env.REACT_APP_CMS_DOMAIN}${item.picture.url}`} review={item.review}/>
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

  & .swiper-button-prev, .swiper-button-next {
    color: ${({theme}) => theme.color.secondary.main};

    &:hover {
      color: ${({theme}) => theme.color.primary.main};
    }
  }
`