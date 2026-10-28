
const achievements = [
  { type:" Presentation Certification",
    title: "Task Flow — Predictive & Secure Project Lifecycle Manager",
    description:
      "Presented at the AICTE-Sponsored National Conference on Leveraging IT for Sustainability in Agriculture and Healthcare – Viksit Bharat, 2026.",
    label: "View Certification",
    link: "https://drive.google.com/file/d/1yKC1NXHqEwRah8NqJib0GFE61JFmqCYd/view?usp=drive_link",
  },
  {
    type: "Problem Solving",
    title: "100+ DSA Problems Solved",
    description:
      "Practiced data structures and algorithms through coding challenges on LeetCode to strengthen problem-solving and programming skills.",
    label: "View LeetCode Profile",
    link: "https://leetcode.com/u/0SarAuj3p5/",
  },
  {
    type: "Certification",
    title: "Fundamentals of Digital Marketing",
    description:
      "Completed the Fundamentals of Digital Marketing course through Google Digital Unlocked.",
    label: "View Certificate",
    link: "https://drive.google.com/file/d/1p8PED2oDV8xe47xg9uTbDTrQebePbKbG/view?usp=drivesdk",
  },
];

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="w-full  px-6 py-24 md:px-12 lg:py-32"
    >
      <div className="mx-auto max-w-6xl">
        
        <div className="mb-12 text-center">
         

          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl bg-gradient-to-l from-white to-indigo-600 bg-clip-text text-transparent">
            My <span className="text-primary bg-gradient-to-l from-white to-indigo-600 bg-clip-text text-transparent">Achievements</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-white text-muted-foreground">
            Highlights of my technical practice, academic
            achievements, and professional learning journey.
          </p>
        </div>

        {/* Achievement cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {achievements.map((item) => (
            <article
              key={item.title}
              className="flex flex-col rounded-xl border-2 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
             <span className="mb-5 w-fit rounded-full bg-white text-black px-3 py-1 text-xs font-bold">
  {item.type}
</span>


              <h3 className="text-xl font-bold text-white leading-snug">
                {item.title}
              </h3>

              <p className="mt-4 flex-1 text-sm leading-7  text-muted-foreground">
                {item.description}
              </p>

              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex  w-fit items-center gap-2 text-sm font-semibold text-white hover:underline"
              >
                {item.label}
                <span aria-hidden="true">↗</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
