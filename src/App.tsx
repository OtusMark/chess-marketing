import React from 'react';
import {Header} from "./pages/Header/Header";
import {OverflowWrapper} from './component/_layout/OverflowWrapper';
import {HomePage} from './pages/home/HomePage';

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
