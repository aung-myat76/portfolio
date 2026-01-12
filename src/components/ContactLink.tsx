import type { FC, ReactNode } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

type ContactLinkType = {
    to: string;
    title: string;
    children: ReactNode;
};

const ContactLink: FC<ContactLinkType> = ({ to, title, children }) => {
    return (
        <motion.div
            whileHover={{ x: 10 }}
            whileTap={{ scale: 0.9 }}
            style={{ originX: 0 }}>
            <Link to={to} className="flex items-center gap-2 py-1 px-2">
                {children}
                <h2 className="font-bold">{title}</h2>
            </Link>
        </motion.div>
    );
};

export default ContactLink;
