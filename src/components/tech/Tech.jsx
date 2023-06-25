import { SectionWrapper } from "../../hoc";
import { technologies } from "../../constants";

import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion";

const TechCardContent = ({ title, icon }) => {
    return (
        <div
            options={{ max: 45, scale: 1, speed: 450 }}
            className="bg-tertiary rounded-[20px] p-5 flex justify-center items-center flex-col aspect-square">
            <h3 className="text-white text-[15px] text-center">{title}</h3>
            <img src={icon} alt={title} className="w-14 h-14 object-contain" />
        </div>
    );
};

const TechCard = ({ index, title, icon }) => {
    const isMobile = () => {
        return window.matchMedia("(max-width: 767px)").matches;
    };
    return (
        <Tilt className="w-[150px]">
            {isMobile() ? (
                <div className="w-full green-pink-gradient p-[3px] rounded-[40%] shadow-card">
                    <TechCardContent title={title} icon={icon} />
                </div>
            ) : (
                <motion.div
                    className="w-full green-pink-gradient p-[3px] rounded-[40%] shadow-card"
                    variants={fadeIn("right", "spring", 0.4 * index, 0.5)}>
                    <TechCardContent title={title} icon={icon} />
                </motion.div>
            )}
        </Tilt>
    );
};

const Tech = () => {
    return (
        <>
            <div className="flex flex-wrap justify-around gap-10">
                {technologies.map((tech, index) => (
                    <TechCard
                        key={`tech-card-${index}`}
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
