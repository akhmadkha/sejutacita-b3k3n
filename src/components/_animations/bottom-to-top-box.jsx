import { motion } from "framer-motion";

function BottomToTopBox(props) {
    return (
        <motion.div
            {...props}
            initial={{ scale: .8, display: "none", translateY: 100 }}
            animate={{ scale: 1, display: "block", translateY: 0 }}
            exit={{ scale: .8, display: "none" }}
            transition={{ delay: 0, ease: "easeOut", duration: .4 }}
        >
            {props.children}
        </motion.div>
    );
}

export default BottomToTopBox