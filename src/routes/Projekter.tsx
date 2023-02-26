import { Posts } from '../components/Posts';
import { motion } from 'framer-motion';

export default function Projekter() {
    return (
        <div>
            <motion.div
                className='mb-8'
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 0.4,
                    ease: [0, 0.71, 0.2, 1.01]
                }}
            >
                <h1 className='text-3xl mb-4'>Hej!</h1>
                <p>
                    Jeg er <span className='underline'>August Dominik Raaschou-Pedersen</span>. En softwareudvikler med passion for at
                    skabe fede digitale oplevelser.
                </p>
                <p>
                    Jeg har en baggrund indenfor spiludvikling,
                    men i dag er mit blik rettet mod webudvikling med fokus på både frontend- og backend-udvikling.
                </p>
                {/* <p> */}
                {/*     Hvis du vil sammenarbejde eller har nogle spørgsmål, er du velkommen til at kontakte mig via min mail: <span className='underline decoration-cyan-500 cursor-pointer'>augustdrp@gmail.com</span>. */}
                {/* </p> */}
                <p>
                    Nedenfor kan du få et billede af de projekter, jeg har bygget gennem tiden.
                </p>
            </motion.div>
            {Posts}
        </div>
    );
}
