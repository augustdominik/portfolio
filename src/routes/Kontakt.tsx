import { motion } from "framer-motion";
import ProfilePicture from '../assets/ProfilePicture.jpg';

export default function Kontakt() {
    return (
        <div>
            <motion.div
                className="flex flex-col"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
            >
                <div style={{ gridTemplateColumns: '1fr 2fr', gap: '12px' }}
                    className=' flex flex-col sm:grid'>
                    <img width='150px' src={ProfilePicture} className='rounded-2xl border-2 border-black'></img>
                    <div className="">
                        <h1 className='text-3xl mb-4'>Kontakt</h1>
                        <p className='mb-4'>Kan du se mig være en del af dit hold, eller har du nogle spørgsmål
                            , så skriv mig endelig en mail. Jeg svarer hurtigst muligt.</p>
                        <p className='mb-4'><span className='underline decoration-cyan-500 cursor-pointer'>augustdrp@gmail.com
                        </span></p>
                    </div>
                </div>

                <form>

                </form>
            </motion.div>
        </div>
    );
}
