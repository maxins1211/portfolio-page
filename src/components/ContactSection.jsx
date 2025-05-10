import { Github, Linkedin, Mail } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <div className="gradient-border p-6 md:p-8 bg-card shadow-md backdrop-blur-sm">
          <div className="space-y-10 flex flex-col items-center">
            {/* Email Contact */}
            <div className="text-center">
              <h3 className="text-2xl font-semibold mb-4">Send me an Email</h3>
              <a
                href="mailto:lamvo.tech@gmail.com"
                className="flex items-center justify-center gap-2 hover:text-primary transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span>lamvo.tech@gmail.com</span>
              </a>
            </div>

            {/* Social Media Links */}
            <div className="text-center">
              <h3 className="text-2xl font-semibold mb-4">
                Find Me On Social Media
              </h3>
              <div className="flex justify-center gap-6 mt-4">
                <a
                  href="https://www.linkedin.com/in/nghi-lam-vo/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cosmic-button flex items-center gap-2"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="https://github.com/maxins1211"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cosmic-button flex items-center gap-2"
                >
                  <Github className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
