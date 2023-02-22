import { AiOutlineMail } from 'react-icons/ai';
import { AiOutlineGithub } from 'react-icons/ai';

export default function Footer(){
    return(
        <div className='h-10 px-10 w-full self-end'>
            <hr className={"border-t-2 border-black transition-colors mb-4"} />
            <div className='flex gap-4 pb-6'>
                <AiOutlineGithub size={32}/>
                <AiOutlineMail size={32}/>
            </div>
        </div>
    )
}
