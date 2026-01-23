import { FaEnvelope, FaGithub, FaTelegram } from "react-icons/fa";
import ContactLink from "./ContactLink";
import { HiPhoneArrowUpRight } from "react-icons/hi2";

const Footer = () => {
    return (
        <footer className="flex  justify-center w-full text-stone-100 bg-emerald-900 text-3xl py-2">
            <ContactLink to="mailto:zz762389@gmail.com">
                <FaEnvelope />
            </ContactLink>

            <ContactLink to="https://github.com/aung-myat76">
                <FaGithub />
            </ContactLink>
            <ContactLink to="tel:+959669483086">
                <HiPhoneArrowUpRight />
            </ContactLink>
            <ContactLink to="https://t.me/aung_myat_htut">
                <FaTelegram />
            </ContactLink>
        </footer>
    );
};

export default Footer;
