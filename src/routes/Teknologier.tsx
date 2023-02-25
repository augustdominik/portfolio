import { motion } from "framer-motion";

interface TechnologyIcon {
    name: string,
    iconSrc: string,
    tooltip: string
}

const technologyIcons: Array<TechnologyIcon> = [
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
        name: 'ReactJS/React Native',
        iconSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
        tooltip: 'ReactJS / React Native'
    },
    {
        name: 'Tailwind CSS',
        iconSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg',
        tooltip: 'Tailwind CSS'
    },
    {
        name: 'CSS3',
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
    {
        name: 'Docker',
        iconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
        tooltip: 'Docker'
    },
    {
        name: 'Python',
        iconSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
        tooltip: 'Python'
    },
    {
        name: 'NodeJS',
        iconSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
        tooltip: 'NodeJS'
    },
    {
        name: 'Git',
        iconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
        tooltip: 'Git'
    },
    {
        name: 'Vim',
        iconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vim/vim-original.svg",
        tooltip: 'Vim :)'
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

];




function TechnologyIconElement({ technologyIcon }: { technologyIcon: TechnologyIcon }) {
    return (
        <div className="group cursor-pointer flex flex-col items-center justify-center">
            <img src={technologyIcon.iconSrc} 
                className='group-hover:scale-110
                transition-transform duration-75'>
            </img>
            <div className=" scale-0 group-hover:scale-100 active:scale-100 
                transition-all duration-75 min-w-max
                bg-white border-b-2 border-black
                origin-left
                ">
                {technologyIcon.tooltip}
            </div>
        </div>
    )
}


export default function Teknologier() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}>
            <div>
                <h1 className='text-3xl mb-4'>Teknologier</h1>
                <p className='mb-4'>Jeg har erfaring med en bred vifte af teknologier, og er altid nysgerrig på at gå i dybden
                og lære nye at kende. Nedenfor ses en samling af teknologier, jeg har brugt til at bygge alt fra
                spil til webapplikationer.</p>
                <div className='grid grid-cols-3 sm:grid-cols-6 gap-8 '>
                    {technologyIcons.map((technologyIcon, idx) =>
                    <TechnologyIconElement key={idx} technologyIcon={technologyIcon} />
                                        )}
                </div>
                <p className='mb-20'> Hvis mine erfaringer vækker interesse, send mig gerne en email: <span className='underline decoration-cyan-500 cursor-pointer'>augustdrp@gmail.com</span></p>
            </div>
        </motion.div>
    );
}
