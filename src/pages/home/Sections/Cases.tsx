import {SectionWrapper} from "../../../component/_layout/SectionWrapper";
import {Container} from "../../../component/_layout/Container";
import {SectionTitle} from "../../../component/_layout/SectionTitle";
import {Swiper, SwiperSlide} from "swiper/react";
import SwiperCore, {Navigation} from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import {Case} from "../../../component/Case";
import styled from "styled-components/macro";


export const Cases = () => {

    // install Swiper modules
    SwiperCore.use([Navigation]);

    return (
        <SectionWrapper>
            <Container>
                <SectionTitle title={'Cases'} subtitle={'Trusted by'}/>
                <StyledSwiper
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },
                        425: {
                            slidesPerView: 2,
                        },
                        1300: {
                            slidesPerView: 3,
                        },
                    }}
                    navigation
                    loop={true}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide><Case/></SwiperSlide>
                    <SwiperSlide><Case/></SwiperSlide>
                    <SwiperSlide><Case/></SwiperSlide>
                    <SwiperSlide><Case/></SwiperSlide>
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