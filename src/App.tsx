import React, {useEffect, useState} from 'react';
import {Header} from "./pages/Header/Header";
import { OverflowWrapper } from './component/_layout/OverflowWrapper';
import {HomePage} from './pages/home/HomePage';

function App() {

    const [screenWidth, setScreenWidth] = useState(window.innerWidth)

    // Check for window width...
    useEffect(() => {
        function handleResize() {
            setScreenWidth(window.innerWidth)
        }
        window.addEventListener('resize', handleResize)
    }, [])

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
