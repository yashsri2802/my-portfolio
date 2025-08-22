import { Circles } from "./Circles";

export function Frameworks() {
  const skills = [
    "ejs",
    "express",
    "cplusplus",
    "threejs",
    "css3",
    "nodejs",
    "visualstudiocode",
    "git",
    "html5",
    "javascript",
    "sql",
    "react",
    "react router",
    "tailwindcss",
    "vitejs",
    "tanstack",
  ];
  return (
    <div className="relative flex h-[15rem] w-full flex-col items-center justify-center">
      <Circles iconSize={40}>
        {skills.map((skill, index) => (
          <Icon key={index} src={`assets/logos/${skill}.svg`} />
        ))}
      </Circles>
      <Circles iconSize={25} radius={100} reverse speed={2}>
        {skills.reverse().map((skill, index) => (
          <Icon key={index} src={`assets/logos/${skill}.svg`} />
        ))}
      </Circles>
    </div>
  );
}

const Icon = ({ src }) => (
  <img src={src} className="duration-200 rounded-sm hover:scale-110" />
);
