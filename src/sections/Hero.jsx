import { Canvas, useFrame } from "@react-three/fiber";
import { Astronaut } from "../components/Astronaut";
import { HeroText } from "../components/HeroText";
import { Parallax } from "../components/ParallaxBG";
import { useMediaQuery } from "react-responsive";
import { easing } from "maath";
import { Float } from "@react-three/drei";
import { Suspense } from "react";
import { Loader } from "../components/Loader";

export const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 853 });
  return (
    <section className="flex items-start justify-center min-h-screen overflow-hidden md:items-start md:justify-start c-space ">
      <HeroText />
      <Parallax />
      <figure
        className="absolute inset-0"
        style={{
          width: "100vw",
          height: "100vh",
        }}
      >
        <Canvas camera={{ position: [0, 1, 3] }}>
          <Suspense fallback={<Loader />}>
            <Float>
              <Astronaut
                scale={isMobile && 0.23}
                position={isMobile && [0, -1.5, 0]}
              />
            </Float>
          </Suspense>
          <Rig />
        </Canvas>
      </figure>
    </section>
  );
};

function Rig() {
  return useFrame((state, delta) => {
    easing.damp3(
      state.camera.position,
      [state.mouse.x / 10, 1 + state.mouse.y / 10, 3],
      0.5,
      delta
    );
  });
}
