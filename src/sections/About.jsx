
import React from "react";

const About = () => {
  const skills = [
    {
      title: "REACT.JS",
      description: "Frontend Development",
    },
    {
      title: "CORE JAVA",
      description: "Programming & DSA",
    },
    {
      title: "FASTAPI",
      description: "Backend Development",
    },
    {
      title: "SQL & POSTGRESQL",
      description: "Database Fundamentals",
    },
  ];

  return (
    <section
      id="about"
      className="w-full overflow-hidden bg-black px-4 py-16 sm:px-6 sm:py-20 md:px-10 md:py-24 lg:px-12 lg:py-32"
    >
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-10 sm:gap-12 md:grid-cols-2 md:gap-8 lg:gap-16">

        {/* About content */}
        <div className="min-w-0">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-primary sm:text-sm">
            About Me
          </p>

          <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            <span className="bg-gradient-to-l from-white to-indigo-600 bg-clip-text text-transparent">
              A little info about{" "}
            </span>
            <span className="bg-gradient-to-l from-white to-indigo-600 bg-clip-text text-transparent">
              Myself.
            </span>
          </h2>

          <p className="mt-5 text-sm leading-7 text-white sm:mt-6 sm:text-base sm:leading-8">
            Hi, I'm Hrushikesh Gawade, an MCA graduate and aspiring
            software developer passionate about building useful web
            applications and solving challenging problems.
          </p>

          <p className="mt-4 text-sm leading-7 text-white sm:text-base sm:leading-8">
            I work with React.js, JavaScript, Java, and backend
            technologies. I am continuously improving my skills
            through hands-on projects and data structures and
            algorithms practice.
          </p>
        </div>

        {/* Skills cards */}
        <div className="grid min-w-0 grid-cols-1 gap-3 min-[400px]:grid-cols-2 sm:gap-4">
          {skills.map((skill) => (
            <div
              key={skill.title}
              className="flex min-h-32 min-w-0 flex-col justify-center rounded-xl border-2 border-white/70 p-4 transition-all duration-300 hover:border-indigo-500 hover:bg-white/5 sm:min-h-36 sm:p-5 md:p-4 lg:p-6"
            >
              <h3 className="break-words bg-gradient-to-l from-white to-indigo-600 bg-clip-text text-xl font-bold text-transparent sm:text-2xl lg:text-3xl">
                {skill.title}
              </h3>

              <p className="mt-2 text-xs leading-5 text-white/80 sm:text-sm">
                {skill.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default About;
