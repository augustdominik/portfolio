import { motion } from "framer-motion";

export default function Card() {
    return (
        <motion.div 
            initial={{opacity:0}}
            whileInView={{opacity:1}}>
            <div className="w-full h-48 border-black border-2 rounded-md mb-20">
            </div>
        </motion.div>
    );
}
