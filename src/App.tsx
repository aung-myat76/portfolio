import About from "./pages/About";
import Works from "./pages/Works";
import Services from "./pages/Services";
import Contact from "./pages/Contact";

import "./App.css";
import Header from "./components/Header";
import { useState } from "react";
import Footer from "./components/Footer";

export type PageType = {
    setActive: (id: string) => void;
};

const App = () => {
    const [active, setActive] = useState("about");
    return (
        // <Routes>
        //     <Route path="/" element={<MainLayout />}>
        //         <Route index element={<About />} />
        //         <Route path="/works" element={<Works />} />
        //         <Route path="/services" element={<Services />} />
        //         <Route path="/contact" element={<Contact />} />
        //         <Route path="*" element={<Navigate to="/" />} />
        //     </Route>
        // </Routes>
        <>
            <Header active={active}>wasabi</Header>
            <About setActive={setActive} />
            <Works setActive={setActive} />
            <Services setActive={setActive} />
            <Contact setActive={setActive} />
            <Footer />
        </>
    );
};

export default App;
