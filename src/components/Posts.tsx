import { ImgHTMLAttributes } from "react";
import { motion } from "framer-motion";
import MyBreakLogo from '../assets/MyBreakLogo.png';
import LinkExternalWithText from "./LinkExternalWithText";

interface BlogPost {
    title: string,
    description: string,
    imageLink: Array<string>,
    link: string
}

interface BlogPosts extends Array<BlogPost> { };

const blogPosts: BlogPosts = [
    {
        title: 'MyBreak',
        description: 'MyBreak er daglig inspiration til sjove Brain Breaks og små aktive pauser.',
        imageLink: [MyBreakLogo],
        link: 'https://www.mybreak.dk/',
    },
    {
        title: 'Where2Play',
        description: 'MyBreak er daglig inspiration til sjove Brain Breaks og små aktive pauser.',
        imageLink: [MyBreakLogo],
        link: 'https://www.mybreak.dk/',
    },
    {
        title: 'Hørelære-app - en progressive web app',
        description: 'En app til at øve sige på at høre akkorder. Lavet til mit hørelærehold på Københavns Musikskole.',
        imageLink: [MyBreakLogo],
        link: 'https://www.mybreak.dk/',
    },
    {
        title: 'Denne webside',
        description: 'En app til at øve sige på at høre akkorder. Lavet til mit hørelærehold på Københavns Musikskole.',
        imageLink: [MyBreakLogo],
        link: 'https://www.mybreak.dk/',
    },
    {
        title: 'YouTube-Kanal: GucioDevs',
        description: 'Min YouTube-Kanal, hvor jeg har undervist...',
        imageLink: [MyBreakLogo],
        link: 'https://www.mybreak.dk/',
    },
    {
        title: 'Submarino - Vinder af DM i spiludvikling 2018',
        description: 'Et spil jeg har lavet',
        imageLink: [MyBreakLogo],
        link: 'https://www.mybreak.dk/',
    },
    {
        title: 'Vinder af DM i spiludvikling 2017',
        description: 'endnu et spil jeg havde lavet',
        imageLink: [MyBreakLogo],
        link: 'https://www.mybreak.dk/',
    },
];

function Post({ blogPost }: { blogPost: BlogPost }) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}>
            <div className="w-full border-black bg-gray-100 rounded-md pt-4 px-4 mb-4 items-center justify-center">
                <img src={blogPost.imageLink[0]}></img>
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
