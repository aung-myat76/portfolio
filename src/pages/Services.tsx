import type { FC } from "react";
import Section from "../components/Section";
import type { PageType } from "../App";
import { FaLaptop, FaPaintRoller, FaRocket, FaTools } from "react-icons/fa";
import Article from "../components/Article";

const Services: FC<PageType> = ({ setActive }) => {
    return (
        <Section
            setActive={setActive}
            className="bg-emerald-700 text-stone-100 py-20 px-3 "
            id="services">
            <h2 className="text-2xl mb-5 font-bold ">What I can offer</h2>
            <Article
                title="Development"
                description="Building the full-stack engine using the MERN ecosystem.">
                <FaLaptop className="" />
            </Article>
            <Article
                title="Design"
                description="Crafting responsive layouts with Tailwind CSS and interactive prototypes with smooth animations using Framer Motion.">
                <FaPaintRoller />
            </Article>
            <Article
                title="Strategy"
                description="Mapping out data structures with TypeScript for a bug-free foundation.">
                <FaTools />
            </Article>
            <Article
                title="Deployment"
                description="Optimizing for SEO and launching on high-speed cloud hosting.">
                <FaRocket />
            </Article>
        </Section>
    );
};

export default Services;
