import type { FC } from "react";
import Section from "../components/Section";
import type { PageType } from "../App";
import CopyText from "../components/CopyText";

const About: FC<PageType> = ({ setActive }) => {
    return (
        <Section
            setActive={setActive}
            className="pt-20 px-3 bg-[url('/hero.svg')] bg-cover bg-center h-screen"
            id="about">
            <div className=" mb-3 font-bold text-md">
                Hi, My name is{" "}
                <div className="text-2xl font-mono">Aung Myat Htut </div>
            </div>
            <p>
                I'm a <strong>MERN Stack</strong> developer
            </p>

            <CopyText text="zz762389@gmail.com" />
        </Section>
    );
};

export default About;
