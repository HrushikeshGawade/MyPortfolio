
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const subject = encodeURIComponent(
      `Portfolio Contact from ${form.name}`
    );

    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    );

    window.location.href =
      `mailto:hrushigawade198@gmail.com?subject=${subject}&body=${body}`;
  }

  return (
    <section
      id="contact"
      className="w-full   px-6 py-24 md:px-12 lg:py-32"
    >
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-white">
          To Get In Touch
          </p>

          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl bg-gradient-to-l from-white to-indigo-600 bg-clip-text text-transparent">
            Let's Work <span className=" bg-gradient-to-l from-white to-indigo-600 bg-clip-text text-transparent">Together</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-white text-muted-foreground">
            Have a project idea or a job opportunity? 
            reach out me. I'd be happy to connect with you.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2  w-full">
         
          <div className="rounded-xl border-2 hover:border-blue-900  p-8">
            <h3 className="text-2xl bg-gradient-to-l from-white to-indigo-600 bg-clip-text text-transparent font-bold">Contact Information</h3>

            <p className="mt-3 leading-7  text-muted-foreground">
              I'm open to entry-level software development
              opportunities, collaborations, and interesting projects.
            </p>

            <div className="mt-8 space-y-6">
              <div>
                <p className="text-sm text-muted-foreground text-white">Email</p>
                <a
                  href="mailto:hrushigawade198@gmail.com"
                  className="mt-1 inline-block text-white font-medium"
                >
                  hrushigawade198@gmail.com
                </a>
              </div>

              <div>
                <p className="text-sm text-white text-muted-foreground">LeetCode</p>
                <a
                  href="https://leetcode.com/u/0SarAuj3p5/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-block text-white font-medium "
                >
                  View My Profile ↗
                </a>
              </div>

              <div>
                <p className="text-sm text-white text-muted-foreground">GitHub</p>
                <a
                  href="https://github.com/HrushikeshGawade"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-block text-white font-medium "
                >
                  Visit GitHub ↗
                </a>
              </div>
            </div>
          </div>

          
          
        </div>
      </div>
    </section>
  );
}
