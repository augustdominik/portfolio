import { Posts } from '../components/Posts';
import { motion } from 'framer-motion';

export default function Projekter() {
    return (
        <div>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
            >
                <h1 className='text-3xl mb-4'>Hej!</h1>
                <p className='mb-4'>Mit navn er <span className='underline decoration-rose-400'>August Dominik Raaschou-Pedersen</span>.
                    Velkommen til mit portefølje.</p>
                <p className='mb-20'><span className='underline decoration-cyan-500 cursor-pointer'>augustdrp@gmail.com</span></p>
            </motion.div>
            {Posts}
        </div>
    );
}
