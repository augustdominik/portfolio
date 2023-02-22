import { motion } from "framer-motion";
import ProfilePicture from '../assets/ProfilePicture.jpg';

export default function Kontakt(){
    return(
        <div>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
            >
                <div style={{gridTemplateColumns: '1fr 2fr', gap:'12px'}}
                className=' flex flex-col sm:grid'>
                    <img width='150px' src={ProfilePicture} className='rounded-2xl border-2 border-black'></img>
                    <div className="">
                        <h1 className='text-3xl mb-4'>Kontakt</h1>
                            <p className='mb-4'>Skriv mig en email. Jeg svarer hurtigst muligt.</p>
                        <p className='mb-20'><span className='underline decoration-cyan-500 cursor-pointer'>augustdrp@gmail.com</span></p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
