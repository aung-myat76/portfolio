import { useRef, useState, type FC, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Section from "../components/Section";
import type { PageType } from "../App";
import { FiDownload } from "react-icons/fi";
import ContactLink from "../components/ContactLink";
import { FaEnvelope, FaGithub, FaTelegram } from "react-icons/fa";
import emailjs from "@emailjs/browser";

import { HiPhoneArrowUpRight } from "react-icons/hi2";

const Contact: FC<PageType> = ({ setActive }) => {
    const formRef = useRef<HTMLFormElement>(null);
    const emailJsServiceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const emailJsTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const emailJsPublicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    const [isSending, setIsSending] = useState(false);
    const [emailStatus, setEmailStatus] = useState<
        "idle" | "success" | "error"
    >("idle");
    const [error, setError] = useState("");

    const inputCls =
        "w-full mb-2 text-emerald-900 font-bold focus:outline-emerald-900 px-2 py-1 bg-stone-100";

    const handleMessageSubmit = async (e: FormEvent) => {
        e.preventDefault();
        if (!formRef.current) return;
        const formData = new FormData(formRef.current);
        const name = formData.get("name");
        const email = formData.get("email");
        const message = formData.get("message");
        console.log(name);
        if (!name || !email || !message) {
            setError("Please fill all input fields");
            return;
        } else {
            setIsSending(true);
            try {
                const res = await emailjs.sendForm(
                    emailJsServiceId,
                    emailJsTemplateId,
                    formRef.current,
                    emailJsPublicKey
                );
                console.log(res);
                if (res.text !== "OK") {
                    throw new Error("Could not send the  email");
                }
                setEmailStatus("success");
                setError("");
                formRef.current.reset();
            } catch (err) {
                console.log(err);
                setError("");
                setEmailStatus("error");
            } finally {
                setIsSending(false);
                setTimeout(() => {
                    setEmailStatus("idle");
                }, 5000);
            }
        }
    };

    return (
        <Section
            setActive={setActive}
            className="bg-emerald-600 pt-20 px-5 text-stone-100"
            id="contact">
            <h2 className="text-2xl font-bold mb-2">
                Let's build something great together
            </h2>
            {/* <p>I usually respond within 24 hours</p> */}
            <motion.a
                href="/my_resume.pdf"
                download="AungMyatHtut_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center my-2 gap-2  p-1 bg-emerald-900 text-stone-100 rounded-md font-semibold transition-colors shadow-lg">
                <FiDownload />
                Download CV
            </motion.a>

            <form ref={formRef} onSubmit={handleMessageSubmit} className="my-5">
                {/* <p className="text-lg font-bold my-3">Contact with me</p> */}
                <AnimatePresence mode="wait">
                    {error && (
                        <motion.p
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 1 }}
                            key="noData"
                            className="text-center my-2 font-bold rounded-sm bg-red-500">
                            {error}
                        </motion.p>
                    )}
                    {emailStatus === "success" && (
                        <motion.p
                            key="success"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 1 }}
                            className="text-center my-2 font-bold bg-emerald-500">
                            {"Message has been sent!"}
                        </motion.p>
                    )}
                    {emailStatus === "error" && (
                        <motion.p
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 1 }}
                            key="error"
                            className="text-center my-2 font-bold bg-red-500">
                            {"Could not sent the email!"}
                        </motion.p>
                    )}
                </AnimatePresence>
                <input className={inputCls} name="name" placeholder="Name" />
                <input className={inputCls} name="email" placeholder="Email" />
                <textarea
                    placeholder="Message"
                    name="message"
                    className={inputCls + " h-20"}></textarea>

                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    exit={{ x: "90vw" }}
                    className="inline-flex items-center my-1    gap-2 cursor-pointer p-1 px-2  bg-emerald-900 text-stone-100 rounded-md font-semibold transition-colors shadow-lg">
                    {isSending ? "Sending Message..." : "Send Message"}
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
