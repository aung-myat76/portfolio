import { useState, type FC } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Section from "../components/Section";
import type { PageType } from "../App";
import { FiDownload } from "react-icons/fi";
import ContactLink from "../components/ContactLink";
import {
    FaEnvelope,
    FaGithub,
    FaPhone,
    FaPhoneSlash,
    FaPhoneSquare,
    FaTelegram
} from "react-icons/fa";
import { FaPhoneFlip, FaSquarePhoneFlip } from "react-icons/fa6";
import { BiPhone } from "react-icons/bi";
import { HiPhoneArrowUpRight } from "react-icons/hi2";

const Contact: FC<PageType> = ({ setActive }) => {
    const [isSent, setIsSent] = useState(false);

    return (
        <Section
            setActive={setActive}
            className="bg-emerald-600 pt-20 px-5 text-stone-100"
            id="contact">
            <h2 className="text-2xl font-bold mb-5">
                Let's build something great together
            </h2>
            {/* <p>I usually respond within 24 hours</p> */}
            <motion.a
                href="/my_resume.pdf" // Direct path to public folder
                download="AungMyatHtut_Resume.pdf" // This forces the download
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center my-2 gap-2  p-1 bg-emerald-900 text-stone-100 rounded-md font-semibold transition-colors shadow-lg">
                <FiDownload />
                Download CV
            </motion.a>

            <form className="my-5">
                <p className="text-lg font-bold my-3">Contact with me</p>
                <textarea className="w-full h-25 text-emerald-900 font-bold focus:outline-emerald-900 px-2 py-1 bg-stone-100"></textarea>
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center my-2 gap-2  p-1 px-2  bg-emerald-900 text-stone-100 rounded-md font-semibold transition-colors shadow-lg">
                    Send Message
                </motion.button>
            </form>
            <div className="font-mono">
                <ContactLink
                    to="mailto:zz762389@gmail.com"
                    title="zz762389@gmail.com">
                    <FaEnvelope className="" />
                </ContactLink>

                <ContactLink
                    to="https://github.com/aung-myat76"
                    title="aung-myat76">
                    <FaGithub />
                </ContactLink>
                <ContactLink to="tel:+959669483086" title="+959669483086">
                    <HiPhoneArrowUpRight />
                </ContactLink>
                <ContactLink
                    to="https://t.me/aung_myat_htut"
                    title="@aung_myat_htut">
                    <FaTelegram />
                </ContactLink>
            </div>
        </Section>
    );
};

export default Contact;
