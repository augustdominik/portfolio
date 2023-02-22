import { Link } from "react-router-dom";
import { NavElement } from "../common/types";

export default function NavFullscreen(
    { showNavFullscreen, setShowNavFullscreen, navElements }:
        { showNavFullscreen: boolean, setShowNavFullscreen: Function, navElements: Array<NavElement> }) {

    return (
        <div className={'w-full fixed z-50 left-0 top-0 bg-white overflow-hidden transition-height '
            + (showNavFullscreen ? 'h-full' : 'h-0')
            + ' pl-10'}>
            <ul className={"text-black mt-28 [&>*]:mb-4 [&>*]:text-xl transition-all "
                + (showNavFullscreen ? 'opacity-100' : 'opacity-0')}>

                {navElements.map((navElement, idx) =>
                    <Link
                        to={navElement.path}
                        key={idx}
                    >
                        <li onClick={() => setShowNavFullscreen(false)} className="nav-full-element my-8 text-3xl">
                            {navElement.name}
                        </li>
                    </Link>
                )}

            </ul>
        </div>
    );
}
