import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from "./components/NavBar"
import NavFullscreen from './components/NavFullscreen';
import { NavElement } from './common/types';
import Footer from './components/Footer';

function App() {

    const [showNavFullscreen, setShowNavFullscreen] = useState(false);

    const toggleNavFullscreen = () => {
        setShowNavFullscreen(!showNavFullscreen);
    }

    const navElements: Array<NavElement> = [
        { name: 'Projekter', path: '/' },
        { name: 'Teknologier', path: 'teknologier' },
        { name: 'Kontakt', path: 'kontakt' }
    ]

    return (
        <div className="App flex flex-col items-center">
            <NavFullscreen showNavFullscreen={showNavFullscreen}
                setShowNavFullscreen={setShowNavFullscreen}
                navElements={navElements}
            />
            <NavBar
                showNavFullscreen={showNavFullscreen}
                toggleNavFullscreen={toggleNavFullscreen}
                navElements={navElements}
            />
            <div className='content px-10 max-w-3xl'>
                <div className='pt-5'>
                    <Outlet />
                </div>
            <Footer/>
            </div>
        </div>
    )
}

export default App
