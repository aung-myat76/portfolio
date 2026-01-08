import type { FC } from "react";
import Section from "../components/Section";
import type { PageType } from "../App";

const About: FC<PageType> = ({ setActive }) => {
    return (
        <Section setActive={setActive} className="" id="about">
            About
        </Section>
    );
};

export default About;
