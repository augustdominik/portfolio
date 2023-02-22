import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from "./components/NavBar"
import NavFullscreen from './components/NavFullscreen';

function App() {

    const [showNavFullscreen, setShowNavFullscreen] = useState(false);

    const toggleNavFullscreen = () => {
        console.log(showNavFullscreen);
        setShowNavFullscreen(!showNavFullscreen);
    }

    return (
        <div className="App flex flex-col items-center">
            <NavFullscreen showNavFullscreen={showNavFullscreen} setShowNavFullscreen={setShowNavFullscreen} />
            <NavBar showNavFullscreen={showNavFullscreen} toggleNavFullscreen={toggleNavFullscreen} />
            <Outlet/>
        </div>
    )
}

export default App
