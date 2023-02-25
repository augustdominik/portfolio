import { ImgHTMLAttributes } from "react";
import { motion } from "framer-motion";
import MyBreakLogo from '../assets/MyBreakLogo.png';
import LinkExternalWithText from "./LinkExternalWithText";
import VideoPortals from '../assets/Portals.mp4';
import VideoGucioDevs from '../assets/Guciodevs youtube page handbraked.mp4';
import VideoDenneWebside from '../assets/DenneWebside.mp4';
import VideoEartraining from '../assets/Hørelæreapp.mp4';
import GifPlaneGame from '../assets/plane_game.gif';
import GifSubmarino from '../assets/submarino.gif';

interface BlogPost {
    title: string,
    description: string,
    imageLink: Array<string>,
    videoLink?: string,
    link: string
}

interface BlogPosts extends Array<BlogPost> { };

const blogPosts: BlogPosts = [
    {
        title: 'Startups ved Science & Innovation Hub, Københavns Universitet: MyBreak og Where2Play',
        description: 'MyBreak er en gratis app som hjælper skolelærere med at inkorporere leg og bevægelse i undervisningen.',
        imageLink: [MyBreakLogo],
        link: 'https://www.mybreak.dk/',
    },
    // {
    //     title: 'Startup: Where2Play',
    //     description: 'MyBreak er daglig inspiration til sjove Brain Breaks og små aktive pauser.',
    //     imageLink: [MyBreakLogo],
    //     link: 'https://www.mybreak.dk/',
    // },
    {
        title: 'Bliv Hørechef - En Progressive Web App',
        description: 'En musikalsk hørelære-app. Brug den til at styrke din evne til at høre akkorder. Lavet til mit hørelærehold på musikskolen MGK Helsingør.',
        videoLink: VideoEartraining,
        imageLink: [MyBreakLogo],
        link: 'https://guciodevs.github.io/eartraining-pwa/',
    },
    {
        title: 'Denne webside',
        description: 'Jeg har programmeret denne side med React, TypeScript, og CSS frameworket TailwindCSS. Kildekoden kan tilgås på min websides github-repository. ',
        videoLink: VideoDenneWebside,
        imageLink: [MyBreakLogo],
        link: 'https://www.mybreak.dk/',
    },
    {
        title: 'YouTube-Kanal: GucioDevs',
        description: 'Min YouTube kanal med 20.000 abonnementer, hvor jeg primært har delt ud af de ting, jeg har lært på min vej som spiludvikler. Unity3D og C#.',
        videoLink: VideoGucioDevs,
        imageLink: [MyBreakLogo],
        link: 'https://www.mybreak.dk/',
    },
    {
        title: 'Vinder af DM i spiludvikling 2018 med spillet Submarino',
        description: 'I 2018 deltog jeg i DM i spiludvikling for unge i Aalborg, og vandt denne gang publikumsprisen med mit spil Submarino.',
        imageLink: [GifSubmarino],
        link: '#',
    },
    {
        title: 'Vinder af DM i spiludvikling 2017 med spillet Portals',
        description: 'I 2017 deltog jeg i DM i spiludvikling for unge i Aalborg, og endte med at vinde dommerprisen med mit spil Portals.',
        imageLink: [],
        videoLink: VideoPortals,
        link: 'https://www.mybreak.dk/',
    },
    // {
    //     title: 'En masse andre små spil',
    //     description: '',
    //     imageLink: [GifPlaneGame],
    //     link: 'https://www.mybreak.dk/',
    // },
];

function Post({ blogPost }: { blogPost: BlogPost }) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}>
            <div className="w-full border-black border-2 rounded-md mb-4 items-center justify-center">
                {blogPost.videoLink
                    ? <video
                        style={{ maxHeight: '70vh' }}
                        className="self-center m-auto"
                        src={blogPost.videoLink}
                        autoPlay
                        muted
                        loop />
                    : <img className="w-full" src={blogPost.imageLink[0]}></img>}
            </div>
            <div className="flex justify-between items-center">
                <div className="text-xl">{blogPost.title}</div>
                <LinkExternalWithText link={blogPost.link} />
            </div>
            <div className="mb-20 text-gray-500">{blogPost.description}</div>
        </motion.div>
    );
}

export const Posts = blogPosts.map((blogPost, idx) =>
    <Post blogPost={blogPost} key={idx} />
);
