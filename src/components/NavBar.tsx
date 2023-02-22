import { Squash as Hamburger } from 'hamburger-react';
import { Link } from 'react-router-dom';
import { NavElement } from '../common/types';

export default function NavBar(
    { showNavFullscreen, toggleNavFullscreen, navElements }:
        { showNavFullscreen: boolean, toggleNavFullscreen: () => void, navElements: Array<NavElement> }) {

    return (
        <div className={"flex flex-col w-full justify-items-center pl-10 pr-10 text-2xl transition-colors z-50 sticky top-0 "
            + (showNavFullscreen ? 'text-black bg-none' : 'text-black bg-white')}>
            <div className="flex justify-between sm:grid sm:grid-cols-2 mt-6 mb-2">
                <div className="flex justify-start gap-12 items-center">
                    <Link to='/' className="nav-element hover:underline active:scale-95">August Dominik</Link>
                </div>
                <div className="flex justify-end gap-8">
                    {navElements.map((navElement, idx) =>
                        <Link
                            className='nav-element origin-bottom hidden sm:block hover:underline active:scale-95' 
                            to={navElement.path}
                            key={idx}
                        >
                            {navElement.name}
                        </Link>
                    )}
                    <div className='flex items-center justify-center cursor-pointer sm:hidden'
                        onClick={() => toggleNavFullscreen()}>
                        <Hamburger toggled={showNavFullscreen} />
                    </div>
                </div>
            </div>
            <hr className={"border-t-2 transition-colors " + (showNavFullscreen ? 'border-black' : 'border-black')} />
        </div>
    )
}
