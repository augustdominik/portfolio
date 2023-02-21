
interface BlogPost {
    title:string,
    description:string,
    imageLink:string,
    link:string
}

interface BlogPosts extends Array<BlogPost>{};

const blogPosts:BlogPosts = [
    {
        title:'YouTube',
        description:'Yeet',
        imageLink:'link',
        link:'https://google.com'
    },
];

function Post(){
    return(
        <div></div>
    );
}

export default function Posts(){
    return(
        <div></div>
    );
}
