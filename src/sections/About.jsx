import { useRef } from "react";
import { Card } from "../components/Card";
import { Globe } from "../components/globe";
import { EmailButton } from "../components/EmailButton";
import { Frameworks } from "../components/Frameworks";

export const About = () => {
  const grid2Container = useRef();
  return (
    <section className="c-space section-spacing" id="about">
      <h2 className="text-heading">About Me</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        <div className="flex items-end grid-default-color grid-1">
          <img
            src="assets/coding-pov.png"
            alt="coding"
            className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]"
          />
          <div className="z-10">
            <p className="headtext">Hi, I am Yash Srivastava</p>
            <p className="subtext">
              Over the last 2 years, I’ve been building responsive and
              user-friendly web applications, focusing on clean code and modern
              web technologies.
            </p>
          </div>
          <div className="absolute inset-x-0 pointer-events-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo" />
        </div>
        <div className="grid-default-color grid-2">
          <div
            ref={grid2Container}
            className="flex items-center justify-center h-full"
          >
            <p className="flex items-end text-5xl text-gray-500">MY SKILLS</p>
            <Card
              image="assets/logos/cplusplus.svg"
              style={{ rotate: "30deg", top: "5%", left: "10%" }}
              containerRef={grid2Container}
            />
            <Card
              image="assets/logos/css3.svg"
              style={{ rotate: "-15deg", top: "12%", left: "25%" }}
              containerRef={grid2Container}
            />
            <Card
              image="assets/logos/ejs.svg"
              style={{ rotate: "45deg", top: "8%", left: "70%" }}
              containerRef={grid2Container}
            />
            <Card
              image="assets/logos/express.svg"
              style={{ rotate: "-30deg", top: "18%", left: "50%" }}
              containerRef={grid2Container}
            />
            <Card
              image="assets/logos/git.svg"
              style={{ rotate: "10deg", top: "25%", left: "15%" }}
              containerRef={grid2Container}
            />
            <Card
              image="assets/logos/github.svg"
              style={{ rotate: "60deg", top: "22%", left: "80%" }}
              containerRef={grid2Container}
            />
            <Card
              image="assets/logos/html5.svg"
              style={{ rotate: "-45deg", top: "30%", left: "35%" }}
              containerRef={grid2Container}
            />
            <Card
              image="assets/logos/javascript.svg"
              style={{ rotate: "20deg", top: "32%", left: "60%" }}
              containerRef={grid2Container}
            />
            <Card
              image="assets/logos/microsoftsqlserver.svg"
              style={{ rotate: "75deg", top: "40%", left: "10%" }}
              containerRef={grid2Container}
            />
            <Card
              image="assets/logos/nodejs.svg"
              style={{ rotate: "-60deg", top: "45%", left: "75%" }}
              containerRef={grid2Container}
            />
            <Card
              image="assets/logos/react router.svg"
              style={{ rotate: "15deg", top: "50%", left: "25%" }}
              containerRef={grid2Container}
            />
            <Card
              image="assets/logos/react.svg"
              style={{ rotate: "-75deg", top: "55%", left: "55%" }}
              containerRef={grid2Container}
            />
            <Card
              image="assets/logos/sql.svg"
              style={{ rotate: "90deg", top: "62%", left: "40%" }}
              containerRef={grid2Container}
            />
            <Card
              image="assets/logos/sqlite.svg"
              style={{ rotate: "-20deg", top: "65%", left: "70%" }}
              containerRef={grid2Container}
            />
            <Card
              image="assets/logos/tailwindcss.svg"
              style={{ rotate: "35deg", top: "72%", left: "20%" }}
              containerRef={grid2Container}
            />
            <Card
              image="assets/logos/tanstack.svg"
              style={{ rotate: "-90deg", top: "78%", left: "50%" }}
              containerRef={grid2Container}
            />
            <Card
              image="assets/logos/threejs.svg"
              style={{ rotate: "120deg", top: "82%", left: "15%" }}
              containerRef={grid2Container}
            />
            <Card
              image="assets/logos/visualstudiocode.svg"
              style={{ rotate: "-120deg", top: "85%", left: "65%" }}
              containerRef={grid2Container}
            />
            <Card
              image="assets/logos/vitejs.svg"
              style={{ rotate: "150deg", top: "90%", left: "35%" }}
              containerRef={grid2Container}
            />
          </div>
        </div>
        <div className="grid-black-color grid-3">
          <div className="z-10 w-[50%]">
            <p className="headtext">Time Zone</p>
            <p className="subtext">
              I'm based in India, and open to remote work opportunities.
            </p>
          </div>
          <figure className="absolute left-[30%] top-[10%]">
            <Globe />
          </figure>
        </div>
        <div className="grid-special-color grid-4">
          <div className="flex flex-col items-center justify-center gap-4 size-full">
            <p className="text-center headtext">
              Want to collaborate on something impactful?
            </p>
            <EmailButton />
          </div>
        </div>
        <div className="grid-default-color grid-5">
          <div className="z-10 w-[50%]">
            <p className="headtext">Tech Stack</p>
            <p className="subtext">
              I build responsive and user-friendly web applications with modern
              technologies, focusing on clean code, performance, and great user
              experiences..
            </p>
          </div>
          <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
            <Frameworks />
          </div>
        </div>
      </div>
    </section>
  );
};
