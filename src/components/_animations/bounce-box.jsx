import { motion } from "framer-motion";

function BounceBox(props) {
    let delay = props.delay ?? 0
    return (
        <motion.div
            {...props}
            initial={{ scale: .8, display: "none" }}
            animate={{ scale: [1, .9, 1], display: "block" }}
            transition={{ delay: delay, ease: "easeOut", duration: .4 }}
        >
            {props.children}
        </motion.div>
    );
}

export default BounceBox