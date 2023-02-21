import { HiOutlineMenu, HiX } from 'react-icons/hi';

export default function NavBar({showNavFullscreen, toggleNavFullscreen}:{showNavFullscreen:boolean, toggleNavFullscreen: () => void}) {
    return (
        <div className={"flex flex-col w-full justify-items-center pl-10 pr-10 text-2xl transition-colors z-50 sticky top-0 " 
            + (showNavFullscreen ? 'text-white bg-none' : 'text-black bg-white')}>
            <div className="flex justify-between sm:grid sm:grid-cols-2 mt-6 mb-2">
                <div className="flex justify-start gap-12">
                    <a className="nav-element">August Dominik</a>
                    <a className="nav-element hidden sm:block">Arbejde</a>
                </div>
                <div className="flex justify-end">
                    <a className="nav-element hidden sm:block">Info</a>
                    <div className='flex items-center justify-center cursor-pointer sm:hidden'
                        onClick={() => toggleNavFullscreen()}>
                        {showNavFullscreen 
                            ? <HiX/>
                            : <HiOutlineMenu/>}
                    </div>
                </div>
            </div>
            <hr className={"border-t-2 transition-colors " + (showNavFullscreen ? 'border-white' : 'border-black')} />
        </div>
    )
}
