import { TbArrowUpRight } from 'react-icons/tb';

export default function LinkExternalWithText({ link }: { link: string }) {
    return (
        <div>
            <a href={link}>
                <TbArrowUpRight className='hover' size={24} />
            </a>
        </div>
    );
}
