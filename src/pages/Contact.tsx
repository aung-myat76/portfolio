import { useRef, useState, type FC, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Section from "../components/Section";
import type { PageType } from "../App";
import { FiDownload } from "react-icons/fi";
import { FaTelegram } from "react-icons/fa";
import emailjs from "@emailjs/browser";

import Quote from "../components/Quote";

import profileImg from "../assets/profile.jpg";
import { Link } from "react-router-dom";

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
        "w-full mb-2 rounded-md text-emerald-900 text-emerald-900 font-bold focus:outline-emerald-900 px-2 py-1 bg-stone-100";

    const handleMessageSubmit = async (e: FormEvent) => {
        e.preventDefault();
        if (!formRef.current) return;
        const formData = new FormData(formRef.current);
        const name = formData.get("name");
        const email = formData.get("email");
        const message = formData.get("message");

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
            className="relative bg-emerald-600 text-stone-100"
            id="contact">
            <Quote>Let's Build Something Great Together</Quote>

            <div className="flex my-10 flex-col gap-2 bg-emerald-900 rounded-lg   p-2 mx-3">
                <div className="my-1">
                    <h2 className="font-bold text-lg flex items-center gap-2 mb-2 ">
                        {" "}
                        <img
                            src={profileImg}
                            className="w-10 h-10 object-cover bg-center shrink-0 rounded-full"
                        />
                        <span> Available for Work</span>
                    </h2>
                    <p className="text-[10px] mb-1">
                        Based in Yangon, Myanmar (GMT+6:30)
                    </p>
                    <p className="text-xs font-bold my-1">
                        I usually respond within 24 hours. Let's build something
                        amazing!
                    </p>
                    <div className="my-3 flex items-center justify-center gap-2">
                        <motion.a
                            href="/my_resume.pdf"
                            download="AungMyatHtut_Resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center my-1 gap-2  px-2 py-1 text-nowrap text-emerald-900 bg-stone-100 rounded-full font-semibold transition-colors shadow-lg">
                            <FiDownload />
                            Download CV
                        </motion.a>
                        <Link
                            className="text-3xl"
                            to="https://t.me/aung_myat_htut">
                            <FaTelegram />
                        </Link>
                    </div>
                </div>
            </div>

            <form
                ref={formRef}
                onSubmit={handleMessageSubmit}
                className=" mx-3">
                {/* <p className="text-lg font-bold my-3">Contact with me</p> */}
                <AnimatePresence mode="wait">
                    {error && (
                        <motion.p
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0 }}
                            key="noData"
                            className="text-center my-2 font-bold rounded-md bg-red-500">
                            {error}
                        </motion.p>
                    )}
                    {emailStatus === "success" && (
                        <motion.p
                            key="success"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0 }}
                            className="text-center my-2 font-bold bg-emerald-500 rounded-md">
                            {"Message has been sent!"}
                        </motion.p>
                    )}
                    {emailStatus === "error" && (
                        <motion.p
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0 }}
                            key="error"
                            className="text-center my-2 font-bold bg-red-500 rounded-md">
                            {"Could not sent the email!"}
                        </motion.p>
                    )}
                </AnimatePresence>
                <motion.input
                    whileFocus={{ scale: 1.025 }}
                    className={inputCls}
                    name="name"
                    placeholder="Name"
                />
                <motion.input
                    whileFocus={{ scale: 1.025 }}
                    className={inputCls}
                    name="email"
                    placeholder="Email"
                />
                <motion.textarea
                    whileFocus={{ scale: 1.025 }}
                    placeholder="Message"
                    name="message"
                    className={inputCls + " h-30"}></motion.textarea>

                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    exit={{ x: "90vw" }}
                    className="inline-flex items-center my-1    gap-2 cursor-pointer p-1 px-2  bg-emerald-900 text-stone-100 rounded-md font-semibold transition-colors shadow-lg">
                    {isSending ? "Sending Message..." : "Send Message"}
                </motion.button>
            </form>
        </Section>
    );
};

export default Contact;
