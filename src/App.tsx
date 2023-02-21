import { useState } from 'react';
import Card from './components/Card';
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
            <div className='content px-10 max-w-3xl'>
                <div className='pt-5'>
                    <h1 className='text-3xl'>Hej!</h1>
                    <p className='mb-10'>Mit navn er <span className='underline decoration-blue-600'>August Dominik Raaschou-Pedersen</span>.
                        Velkommen til min portefølje-webside.</p>
                </div>
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    )
}

export default App
