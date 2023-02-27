import { AiOutlineMail } from 'react-icons/ai';
import { AiOutlineGithub } from 'react-icons/ai';
import { AiOutlineYoutube } from 'react-icons/ai';

export default function Footer(){
    return(
        <div className='h-10 px-10 w-full bottom-0'>
            <hr className={"border-t-2 border-black transition-colors mb-4"} />
            <div className='flex gap-4 pb-6'>
                <AiOutlineGithub size={33}/>
                <AiOutlineMail size={33}/>
            </div>
        </div>
    )
}
