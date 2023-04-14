import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, View } from "@react-three/drei";
import CanvasLoader from "./Loader";
import useRefs from "react-use-refs";
import Ball from "./canvas/Ball";

const Tech = () => {
    const [
        ref,
        view0,
        view1,
        view2,
        view3,
        view4,
        view5,
        view6,
        view7,
        view8,
        view9,
        view10,
        view11,
        view12,
        view13,
    ] = useRefs();

    const ballsRef = [
        view0,
        view1,
        view2,
        view3,
        view4,
        view5,
        view6,
        view7,
        view8,
        view9,
        view10,
        view11,
        view12,
        view13,
    ];

    return (
        <>
            <div
                ref={ref}
                className="flex flex-row flex-wrap justify-center gap-10">
                {ballsRef.map((ballRef, i) => (
                    <div key={i} ref={ballRef} className="w-28 h-28" />
                ))}
                <Canvas
                    eventSource={ref}
                    style={{ position: "fixed", top: "0px", left: "0px" }}>
                    <Suspense fallback={<CanvasLoader />}>
                        {ballsRef.map((ballRef, i) => (
                            <View
                                key={technologies[i].name + i}
                                track={ballRef}>
                                <Ball imgUrl={technologies[i].icon} />
                                <OrbitControls enableZoom={false} />
                            </View>
                        ))}
                    </Suspense>

                    <Preload all />
                </Canvas>
            </div>
        </>
    );
};

export default SectionWrapper(Tech, "");
