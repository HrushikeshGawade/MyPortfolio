
const projects = [
  {
    title: "Chatur — AI-Powered Learning Platform",
    description:
      "A full-stack collaborative learning platform featuring automated subjective answer evaluation using BERT semantic similarity, along with dashboards for student progress and concept engagement.",
    tech: [
      "React.js",
      "FastAPI",
      "Python",
      "BERT",
      "SQLAlchemy",
      "SQL",
    ],
    category: "AI / Full Stack",
  },
  {
    title: "Task Flow",
    description:
      "A developer-focused project management platform built with React.js and Firebase, featuring task boards, authentication screens, responsive layouts, and real-time data handling.",
    tech: ["React.js", "Node.js", "Firebase"],
    category: "Full Stack",
  },
  {
    title: "Computer Shop & Management",
    description:
      "An e-commerce website for browsing and purchasing computer products and accessories, with backend functionality for product management, inventory tracking, and order handling.",
    tech: ["JavaScript", "HTML", "CSS", "PHP", "MySQL"],
    category: "Web Development",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="w-full  px-6 py-24 md:px-12 lg:py-32"
    >
      <div className="mx-auto max-w-6xl">
       
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-white">
            My Work
          </p>

          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl bg-gradient-to-l from-white to-indigo-600 bg-clip-text text-transparent">
            Developed <span className="text-primary bg-gradient-to-l from-white to-indigo-600 bg-clip-text text-transparent">Projects</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground text-white">
            A selection of projects where I apply my skills to
            build practical software Application.
          </p>
        </div>

        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="flex flex-col rounded-xl border-2 hover:cursor-pointer hover:border-blue-900  p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-4 ">
                <span className="rounded-full   bg-white  px-3 py-1 text-xs font-medium text-black">
                  {project.category}
                </span>
              </div>

              <h3 className="text-xl font-bold tracking-tight  bg-gradient-to-l from-white to-indigo-600 bg-clip-text text-transparent">
                {project.title}
              </h3>

              <p className="mt-4 flex-1 text-sm leading-7 text-muted-foreground">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.tech.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-md border text-white px-2.5 py-1 text-xs font-medium"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

     
      </div>
    </section>
  );
}
