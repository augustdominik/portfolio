
export default function NavFullscreen({ showNavFullscreen, setShowNavFullscreen }: { showNavFullscreen: boolean, setShowNavFullscreen: Function }) {

    return (
        <div className={'w-full fixed z-50 left-0 top-0 bg-black overflow-hidden transition-height '
            + (showNavFullscreen ? 'h-full' : 'h-0')
            + ' pl-10'}>
            <ul className={"text-white mt-24 [&>*]:mb-4 [&>*]:text-xl " 
                + (showNavFullscreen ? 'opacity-100' : 'opacity-0')}>
                <li className="nav-full-element">Hjem</li>
                <li className="nav-full-element">Projekter</li>
                <li className="nav-full-element">Teknologier</li>
            </ul>
        </div>
    );
}
