import { motion } from "framer-motion";
import MyBreakLogo from '../assets/MyBreakLogo.png';
import LinkExternalWithText from "./LinkExternalWithText";

export default function Card() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}>
            <div className="w-full border-black bg-gray-100 rounded-md pt-4 px-4 mb-4 items-center justify-center">
                <img src={MyBreakLogo}></img>
            </div>
            <div className="flex justify-between items-center">
                <div className="text-xl">MyBreak</div>
                <LinkExternalWithText link='#' />
            </div>
            <div className="mb-20 text-gray-500">
                MyBreak er daglig inspiration til sjove Brain Breaks og små aktive pauser.
            </div>
        </motion.div>
    );
}
