import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
    return (
        <Tilt className="xs:w-[250px] w-full">
            <motion.div
                variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
                className="w-full green-pink-gradient p-[1px] rounded-[20px] ">
                <div
                    options={{ max: 45, scale: 1, speed: 450 }}
                    className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
                    <img
                        src={icon}
                        alt={title}
                        className="w-16 h-16 object-contain"
                    />
                    <h3 className="text-white text-[20px] font-bold text-center">
                        {title}
                    </h3>
                </div>
            </motion.div>
        </Tilt>
    );
};

const About = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>Introduction</p>
                <h2 className={styles.sectionHeadText}>Overview.</h2>
            </motion.div>
            <motion.div
                variants={fadeIn("right", "tween", 0.2, 1)}
                className="flex flex-wrap gap-10 items-center">
                {services.map((service, index) => (
                    <div key={service.title} className="mt-5">
                        <ServiceCard index={index} {...service} />
                    </div>
                ))}
                <motion.p
                    variants={fadeIn("left", "tween", 0.8, 1)}
                    className="mt-4 text-secondary text-[17px] max-w-3xl leading=[30px]">
                    I am a skilled software developer with extensive experience
                    in Typescript, JavaScript, and C#. I have also worked with
                    popular frameworks such as React, Angular, and .NET. In
                    addition, I am proficient in technologies such as Java, SQL,
                    Git, Jira, and YouTrack, which allows me to contribute to a
                    wide range of projects. I am highly motivated and
                    detail-oriented, constantly staying updated with the latest
                    technologies. With a strong background in Agile
                    methodologies, I excel in collaborative team environments,
                    delivering high-quality work within deadlines. Overall, my
                    expertise in web development, programming languages, and
                    Agile methodologies make me a valuable asset to any team.
                </motion.p>
            </motion.div>
        </>
    );
};

export default SectionWrapper(About, "about");
