import { Posts } from '../components/Posts';
import { motion } from 'framer-motion';

export default function Projekter() {
    return (
        <div>
            <motion.div
                className='mb-8'
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
            >
                <h1 className='text-3xl mb-4'>Hej!</h1>
                <p>
                    Velkommen til min porteføljewebside!
                </p>
                <p>
                    Mit navn er August Dominik Raaschou-Pedersen, og jeg er softwareudvikler med en passion for at
                    skabe fede digitale oplevelser.
                    Jeg har en baggrund indenfor spiludvikling,
                    men i dag er mit blik rettet mod webudvikling med fokus på både frontend- og backend-udvikling.
                </p>
                <p>
                    Nedenfor kan du få et billede af de projekter, jeg har bygget gennem tiden.
                    Hvis du vil sammenarbejde eller har nogle spørgsmål, er du velkommen til at kontakte mig via min mail: <span className='underline decoration-cyan-500 cursor-pointer'>augustdrp@gmail.com</span>.
                </p>
                <p>
                    Mange tak for at tjekke min portefølje ud!
                </p>

            </motion.div>
            {Posts}
        </div>
    );
}
