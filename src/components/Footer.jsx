import React from "react";
import { ArrowUp } from "lucide-react";
const Footer = () => {
  return (
    <footer className="relative py-5 px-4 bg-card relative border-t border-border mt-12 flex items-center justify-center">
      {" "}
      <p className="text-sm text-muted-foreground ">
        {" "}
        &copy; {new Date().getFullYear()} Nghi Lam Vo
      </p>
      <a
        href="#hero"
        className="absolute p-3 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors top-2 right-5"
      >
        <ArrowUp size={20} />
      </a>
    </footer>
  );
};

export default Footer;
