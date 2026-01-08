import type { FC } from "react";
import Section from "../components/Section";
import type { PageType } from "../App";

const Services: FC<PageType> = ({ setActive }) => {
    return (
        <Section setActive={setActive} className="bg-red-400" id="services">
            Services
        </Section>
    );
};

export default Services;
