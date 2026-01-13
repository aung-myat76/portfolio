import type { FC, ReactNode } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

type CardType = {
    title: string;
    description: string;
    to?: string;
    children: ReactNode;
};

const Card: FC<CardType> = ({ title, description, to = "", children }) => {
    return (
        <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-[45%] min-h-48 py-3 bg-stone-100 text-emerald-800 rounded-md px-2 py-2">
            <Link to={to} className="flex flex-col items-center  ">
                {children}
                <h2 className="my-1 text-nowrap text-sm font-bold">{title}</h2>
                <p className="text-sm opacity-90">{description}</p>
            </Link>
        </motion.div>
    );
};

export default Card;
