

import pd from '../assets/Portrait.png'

import { useEffect, useState } from "react";

function Title() {
  const roles = [
    "MCA Graduate",
    "Full Stack Developer",
  ];

  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];

    const timer = setTimeout(() => {
      if (!deleting) {
        if (displayText.length < currentRole.length) {
          setDisplayText(currentRole.slice(0, displayText.length + 1));
        } else {
          setDeleting(true);
        }
      } else if (displayText.length > 0) {
        setDisplayText(displayText.slice(0, -1));
      } else {
        setDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }, deleting ? 45 : 100);

    return () => clearTimeout(timer);
  }, [displayText, deleting, roleIndex]);

  return (
    <section
      id="home"
      className="relative flex min-h-[85vh] w-full items-center overflow-hidden bg-black px-6 py-16 sm:px-10 lg:px-20"
    >
    
      <div className="pointer-events-none absolute right-10 top-1/4 h-80 w-80 rounded-full bg-indigo-500/10 blur-3xl" />

      <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 md:grid-cols-2">
       
        <div className="animate-slide-up order-2 text-center md:order-1 md:text-left">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-white sm:text-base">
            Welcome to my portfolio
          </p>

          <h1 className="text-4xl text-white tracking-tight sm:text-5xl lg:text-7xl">
            Hi, I am{" "}
            <span className="animate-gradient bg-gradient-to-r from-indigo-700 via-purple-500 to-indigo-700 bg-clip-text text-transparent">
              HRUSHIKESH
            </span>
          </h1>

          <div className="mt-6 min-h-10 text-xl font-semibold text-muted-foreground sm:text-2xl">
            {displayText}
            <span className="ml-1 animate-pulse text-indigo-600">|</span>
          </div>

          <p className="mt-5 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">
            Building useful applications, solving problems, and turning ideas
            into reality through code.
          </p>

         
        </div>



       
 
<div className="order-1 flex justify-center md:order-2 md:justify-end">
  <div className="profile-image-container relative">
  
    <div className="profile-glow absolute -inset-3 rounded-2xl bg-gradient-to-r from-indigo-600 via-purple-500 to-indigo-600 blur-xl" />

    <img
      src={pd}
      alt="Hrushikesh"
      className="profile-image relative h-72 w-60 rounded-2xl border border-white/20 object-cover shadow-2xl sm:h-96 sm:w-80 lg:h-[480px] lg:w-[380px]"
    />
  </div>
</div>

      </div>
    </section>
  );
}

export default Title;

