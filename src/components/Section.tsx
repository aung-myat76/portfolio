import { motion, type HTMLMotionProps, useInView } from "framer-motion";
import { useEffect, useRef, type FC, type ReactNode } from "react";

type SectionType = {
    id: string;
    children: ReactNode;
    setActive: (id: string) => void;
} & HTMLMotionProps<"section">;

const Section: FC<SectionType> = ({
    id,
    children,
    setActive,
    ...otherProps
}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { amount: 0.6 });

    useEffect(() => {
        if (isInView) {
            setActive(id);
        }
    }, [id, setActive, isInView]);
    return (
        <motion.section
            ref={ref}
            id={id}
            className=" px-3"
            {...otherProps}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}>
            {children}
        </motion.section>
    );
};

export default Section;
