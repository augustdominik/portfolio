import IconTypescript from 'react-devicon/typescript/plain';

interface TechnologyIcon {
    name: string,
    iconSrc: string,
    tooltip: string
}

const technologiIcons: Array<TechnologyIcon> = [
    {
        name: 'TypeScript',
        iconSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
        tooltip: 'TypeScript'
    },
    {
        name: 'JavaScript',
        iconSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
        tooltip: 'JavaScript'
    },
    {
        name: 'Tailwind CSS',
        iconSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg',
        tooltip: 'Tailwind CSS'
    },
    {
        name: 'C#',
        iconSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg',
        tooltip: 'C#'
    },
    {
        name: 'Unity3D',
        iconSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg',
        tooltip: 'Unity3D'
    },
    {
        name: 'Python',
        iconSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
        tooltip: 'Python'
    },
    {
        name: 'NodeJS',
        iconSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
        tooltip: 'Unity3D'
    },
    {
        name: 'Git',
        iconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
        tooltip: 'Git'
    },
    {
        name: 'Vim',
        iconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vim/vim-original.svg",
        tooltip: 'Vim'
    },
    {
        name: 'CSS',
        iconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        tooltip: 'CSS'
    },
    {
        name: 'HTML5',
        iconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        tooltip: 'HTML5'
    },
    {
        name: 'Sass',
        iconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
        tooltip: 'Sass'
    },
    {
        name: 'Firebase',
        iconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
        tooltip: 'Firebase'
    },
    {
        name: 'FastAPI',
        iconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
        tooltip: 'FastAPI'
    },
    
]


export default function Teknologier() {
    return (
        <div>
            <h1 className='text-3xl mb-4'>Teknologier</h1>
            <p className='mb-4'>Nedenfor ses de teknologier jeg har erfaring med.</p>
            <div className='grid grid-cols-6 gap-8'>
                {technologiIcons.map((technologiIcon) =>
                    <img src={technologiIcon.iconSrc}></img>
                )}
            </div>
            <p className='mb-20'> Hvis mine erfaringer vækker interesse, send mig gerne en email: <span className='underline decoration-cyan-500 cursor-pointer'>augustdrp@gmail.com</span></p>
        </div>
    );
}
