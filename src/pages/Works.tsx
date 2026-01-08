import type { FC } from "react";
import Section from "../components/Section";
import type { PageType } from "../App";

const Works: FC<PageType> = ({ setActive }) => {
    return (
        <Section setActive={setActive} className="bg-yellow-400" id="works">
            Works
        </Section>
    );
};

export default Works;
