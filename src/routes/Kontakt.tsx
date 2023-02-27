import { motion } from "framer-motion";
import ProfilePicture from '../assets/profilbillede_grayscale.jpg';
import { AiOutlineLinkedin } from 'react-icons/ai';
import { AiOutlineGithub } from 'react-icons/ai';
import { AiOutlineYoutube } from 'react-icons/ai';

const iconSize = 36;

export default function Kontakt() {
    return (
        <div>
            <motion.div
                className="flex flex-col"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 0.4,
                    ease: [0, 0.71, 0.2, 1.01]
                }}
            >
                <div style={{ gridTemplateColumns: '1fr 2fr', gap: '12px' }}
                    className=' flex flex-col sm:grid mb-10'>
                    <img width='150px' src={ProfilePicture} className='rounded-2xl border-2 border-black'></img>
                    <div className="">
                        <h1 className='text-3xl mb-4'>Kontakt</h1>
                        <p className='mb-4'>Kan du se mig være en del af dit hold, eller har du nogle spørgsmål,
                            så skriv mig endelig en mail. Jeg svarer hurtigst muligt.</p>
                        <p className='mb-4'><span className='underline decoration-cyan-500 cursor-pointer'>augustdrp@gmail.com
                        </span></p>
                    </div>
                </div>
                <div>
                    <h1 className='text-3xl mb-4'>Links</h1>
                    <div className='flex gap-4 pb-6'>
                        <div className="link-icon">
                            <a href="https://www.youtube.com/guciodevs" target="_blank">
                                <AiOutlineYoutube size={iconSize + 4} />
                            </a>
                        </div>
                        <div className="link-icon">
                            <a href="https://github.com/GucioDevs" target="_blank">
                                <AiOutlineGithub size={iconSize} />
                            </a>
                        </div>
                        <div className="link-icon">
                            <a href="https://www.linkedin.com/in/august-dominik-raaschou-pedersen" target="_blank">
                                <AiOutlineLinkedin size={iconSize} />
                            </a>
                        </div>
                    </div>
                </div>


            </motion.div>
        </div>
    );
}
