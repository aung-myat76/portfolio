import { useState, type FC } from "react";
import { FaClipboard, FaClipboardCheck } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";

type CopyTextType = {
    text: string;
};

const CopyText: FC<CopyTextType> = ({ text }) => {
    const [isCopy, setIsCopy] = useState(false);

    const handleCopy = async () => {
        try {
            await window.navigator.clipboard.writeText(text);
            setIsCopy(true);
            setTimeout(() => {
                setIsCopy(false);
            }, 3000);
        } catch (err) {
            console.log("Could not copy the text", err);
        }
    };

    return (
        <div className="flex items-center my-2">
            <span className="bg-emerald-500 text-stone-100 p-1 pl-2 rounded-tl-md rounded-bl-md">
                {text}
            </span>
            <motion.button
                className="bg-emerald-900 text-stone-100 p-2 rounded-tr-md rounded-br-md"
                onClick={handleCopy}>
                <AnimatePresence mode="wait" initial={false}>
                    {!isCopy ? (
                        <motion.div
                            className="cursor-pointer"
                            key="copy"
                            initial={{ opacity: 0, x: 5 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 5 }}
                            transition={{ duration: 0.2 }}>
                            <FaClipboard />
                        </motion.div>
                    ) : (
                        <motion.div
                            className="cursor-pointer"
                            key="copied"
                            initial={{ opacity: 0, x: 5 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 5 }}
                            transition={{ duration: 0.2 }}>
                            <FaClipboardCheck />
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.button>
            {/* <AnimatePresence>
                {isCopy && (
                    <motion.div
                        className="bg-emerald-400 text-stone-100 text-sm ml-1 p-1 rounded-md"
                        initial={{ opacity: 0, x: 25 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 25 }}>
                        Copyied
                    </motion.div>
                )}
            </AnimatePresence> */}
        </div>
    );
};

export default CopyText;
