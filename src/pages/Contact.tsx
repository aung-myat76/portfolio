import type { FC } from "react";
import Section from "../components/Section";
import type { PageType } from "../App";

const Contact: FC<PageType> = ({ setActive }) => {
    return (
        <Section setActive={setActive} className="bg-emerald-600" id="contact">
            Contact
        </Section>
    );
};

export default Contact;
