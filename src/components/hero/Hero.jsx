import { motion } from "framer-motion";

import { styles } from "../../styles";

const ContactInfoButton = ({ children }) => {
    return (
        <div className="green-pink-gradient p-[2px] mt-5 rounded-full inline-block">
            <button className="bg-tertiary p-2 rounded-full w-[40px] h-[40px] md:w-[60px] md:h-[60px]">
                {children}
            </button>
        </div>
    );
};

const Hero = () => {
    return (
        <section className="relative w-full h-screen mx-auto">
            <div
                className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
                <div className="flex flex-col justify-center items-center mt-5">
                    <div className="w-5 h-5 rounded-full bg-[#915eff]" />
                    <div className="w-1 sm:h-80 h-40 violet-gradient" />
                </div>
                <div>
                    <h1 className={`${styles.heroHeadText} text-white`}>
                        Hi. I'm <span className="text-[#915eff]">Julia</span>
                    </h1>
                    <p className={`${styles.heroSubText} mt-2 text-white-100`}>
                        I develop user interfaces and
                        <br className="sm:block hidden" /> web applications
                    </p>
                    <div className="flex gap-3">
                        <ContactInfoButton>
                            <span className="font-extrabold">CV</span>
                        </ContactInfoButton>
                        <ContactInfoButton>
                            <i className="fa-brands fa-linkedin-in fa-lg" />
                        </ContactInfoButton>
                        <ContactInfoButton>
                            <i className="fa-brands fa-github-alt fa-lg" />
                        </ContactInfoButton>
                    </div>
                </div>
            </div>

            <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
                <a href="#about">
                    <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
                        <motion.div
                            animate={{ y: [0, 24, 0] }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                repeatType: "loop",
                            }}
                            className="w-3 h-3 rounded-full bg-secondary mb-1"
                        />
                    </div>
                </a>
            </div>
        </section>
    );
};

export default Hero;
