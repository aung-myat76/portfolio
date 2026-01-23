import type { FC, ReactNode } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

type ContactLinkType = {
    to: string;
    children: ReactNode;
};

const ContactLink: FC<ContactLinkType> = ({ to, children }) => {
    return (
        <motion.div whileHover={{ y: -5 }} whileTap={{ scale: 0.9 }}>
            <Link
                to={to}
                className="flex items-center gap-2 p-1 mx-1 text-emerald-900 bg-stone-100 rounded-full">
                {children}
            </Link>
        </motion.div>
    );
};

export default ContactLink;
