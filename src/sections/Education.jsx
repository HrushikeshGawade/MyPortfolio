
export default function Education() {
  const education = [
    {
      degree: "Master of Computer Applications (MCA)",
      college: "PES Modern College of Engineering, Pune",
      duration: "Sept 2024 – July 2026",
      percentage: "65%",
      coursework: [
        "Object-Oriented Programming (OOP)",
        "Data Structures & Algorithms",
        "Database Management Systems (DBMS)",
        "Fundamentals of AI",
        "Computer Networking",
      ],
    },
    {
      degree: "BBA – Computer Applications (BBA-CA)",
      college: "Modern College of Arts, Science & Commerce, Pune",
      duration: "Aug 2020 – Mar 2026",
      percentage: "79.53%",
      coursework: [
        "Computer Fundamentals",
        "Operating Systems",
        "Software Development Life Cycle (SDLC)",
      ],
    },
  ];

  return (
    <section
      id="education"
      className="w-full  px-6 py-24 md:px-12 lg:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-white">
            My Academic Background
          </p>

          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
            <span className="bg-gradient-to-l from-white to-indigo-600 bg-clip-text text-transparent">
              EDUCATION
            </span>
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {education.map((item) => (
            <div
              key={item.degree}
              className="rounded-xl border-2 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-8"
            >
              <h3 className="text-xl text-white font-bold sm:text-2xl">
                {item.degree}
              </h3>

              <p className="mt-3 text-white font-medium text-white">
                {item.college}
              </p>

              <p className="mt-2 text-sm text-muted-foreground">
                {item.duration}
              </p>

              <div className="mt-5 inline-flex rounded-lg  px-4 py-2 font-semibold bg-gradient-to-l from-white to-indigo-600 bg-clip-text text-transparent">
                Percentage: {item.percentage}
              </div>

              <div className="mt-6">
                <h4 className="mb-3 font-semibold text-white">
                  Relevant Coursework
                </h4>

                <ul className="flex flex-wrap gap-2">
                  {item.coursework.map((course) => (
                    <li
                      key={course}
                      className="rounded-md border-2 text-white px-3 py-2 text-sm text-muted-foreground"
                    >
                      {course}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
