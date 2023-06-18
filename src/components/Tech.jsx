import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

const TechCard = ({ index, title, icon }) => {
    return (
        <Tilt className="xs:w-[150px] w-full">
            <motion.div
                variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
                className="w-full green-pink-gradient p-[3px] rounded-[40%] shadow-card">
                <div
                    options={{ max: 45, scale: 1, speed: 450 }}
                    className="bg-tertiary rounded-[20px] p-5 flex justify-center items-center flex-col aspect-square">
                    <h3 className="text-white text-[15px] text-center">
                        {title}
                    </h3>
                    <img
                        src={icon}
                        alt={title}
                        className="w-14 h-14 object-contain"
                    />
                </div>
            </motion.div>
        </Tilt>
    );
};

const Tech = () => {
    return (
        <>
            <div className="flex flex-wrap justify-around gap-10">
                {technologies.map((tech, index) => (
                    <TechCard
                        key={index}
                        title={tech.name}
                        icon={tech.icon}
                        index={index}
                    />
                ))}
            </div>
        </>
    );
};

export default SectionWrapper(Tech, "");
