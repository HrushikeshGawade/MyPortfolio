
import React, { useState } from "react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    {name:"Education", href:"#education"},
    { name: "Achievements", href: "#achievements" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <div className="relative flex min-h-20 w-full items-center justify-between">
     
      <div className="flex items-center">
        <h1 className="m-3 whitespace-nowrap text-2xl font-white bg-gradient-to-l from-white to-indigo-600 bg-clip-text text-transparent sm:m-5 sm:text-3xl">
          HrushiKesh!
        </h1>
      </div>

     
      <nav className="hidden items-center md:flex">
        {links.map((link) => (
          <Button
            key={link.name}
            asChild
           
            className="mx-1 border-2 hover:border-white  font-white bg-gradient-to-l from-white to-indigo-600 bg-clip-text text-transparent cursor-pointer lg:mx-2"
          >
            <a href={link.href}>{link.name}</a>
          </Button>
        ))}
      </nav>

      
      <Button
        variant="outline"
        className="mr-3 md:hidden"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={menuOpen}
      >
        {menuOpen ? "Close ✕" : "Menu ☰"}
      </Button>

      {/* Mobile Navigation */}
      {menuOpen && (
        <nav className="absolute left-0 top-full z-50 flex w-full flex-col rounded-lg border bg-background p-3 shadow-lg md:hidden">
          {links.map((link) => (
            <Button
              key={link.name}
              asChild
              variant="ghost"
              className="justify-start font-black bg-gradient-to-l from-white to-indigo-600 bg-clip-text text-transparent"
              onClick={() => setMenuOpen(false)}
            >
              <a href={link.href}>{link.name}</a>
            </Button>
          ))}
        </nav>
      )}
    </div>
  );
};

export default Navbar;

