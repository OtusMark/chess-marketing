import React from 'react';
import {Header} from "./component/_layout/Header/Header";
import {OverflowWrapper} from './component/_layout/OverflowWrapper';
import {HomePage} from './pages/home/HomePage';
import SwiperCore, {Navigation, Pagination} from "swiper";
// import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';

// install Swiper modules
SwiperCore.use([Navigation, Pagination]);

function App() {

    return (
        <>
            <OverflowWrapper>
                <Header/>
                <HomePage/>
            </OverflowWrapper>
        </>
    );
}

export default App;
