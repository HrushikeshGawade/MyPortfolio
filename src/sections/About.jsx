import React from 'react'

const About = () => {
  return (
    <section
      id="about"
      className="w-full bg-black  px-6 py-24 md:px-12 lg:py-32"
    >
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:items-center">

   
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-primary">
            About Me
          </p>

          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl bg-gradient-to-l from-white to-indigo-600 bg-clip-text text-transparent">
            A little info about{" "}
            <span className="text-primary bg-gradient-to-l from-white to-indigo-600 bg-clip-text text-transparent">Myself.</span>
          </h2>

          <p className="mt-6 leading-8 text-muted-foreground text-white">
            Hi, I'm Hrushikesh Gawade, an MCA graduate and aspiring software developer passionate about building useful Web Applications and solving challenging problems.
   </p>

          <p className="mt-4 leading-8 text-muted-foreground text-white">
            I work with React.js, JavaScript, Java, and backend
            technologies. I am continuously improving my skills
            through hands-on projects and data structures and
            algorithms practice.
          </p>
        </div>

       
        <div className="grid grid-cols-2   gap-4">
          <div className="rounded-xl border border-white border-2 p-6">
            <h3 className="text-3xl font-bold bg-gradient-to-l from-white to-indigo-600 bg-clip-text text-transparent ">REACT.JS</h3>
            <p className="mt-2 text-sm text-muted-foreground text-white">
              Frontend Development
            </p>
          </div>

          
          <div className="rounded-xl border border-white border-2 p-6">
            <h3 className="text-3xl font-bold bg-gradient-to-l from-white to-indigo-600 bg-clip-text text-transparent ">CORE JAVA</h3>
            <p className="mt-2 text-sm text-muted-foreground text-white">
              Programming & DSA
            </p>
          </div>


          

          
          <div className="rounded-xl border border-white border-2 p-6">
            <h3 className="text-3xl font-bold bg-gradient-to-l from-white to-indigo-600 bg-clip-text text-transparent ">FASTAPI</h3>
            <p className="mt-2 text-sm text-muted-foreground text-white">
             Backend Development
            </p>
          </div>

         
          <div className="rounded-xl border border-white border-2 p-6">
            <h3 className="text-3xl font-bold bg-gradient-to-l from-white to-indigo-600 bg-clip-text text-transparent ">SQL & POSTGRESQL</h3>
            <p className="mt-2 text-sm text-muted-foreground text-white">
             Database Fundamentals
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}

export default About
