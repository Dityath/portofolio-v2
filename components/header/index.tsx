import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const Header = ({ page }: { page: string }) => {
  const [nav, setNav] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const variants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: "-10px" },
  };

  return (
    <>
      <header className="flex justify-center sticky top-0 text-blanco px-4 lg:px-10 py-5 border-b border-bordes bg-fondos z-50">
        <div className="flex justify-between items-center max-w-lg md:max-w-4xl lg:max-w-6xl xl:max-w-7xl w-full">
          <p className="text-xl font-medium lg:text-2xl">Dityath</p>
          {nav ? (
            <button
              className="lg:hidden"
              aria-label="Hamburger Button"
              onClick={() => {
                setNavbar(false);
                setTimeout(() => {
                  setNav(false);
                }, 500);
              }}
            >
              <svg
                width="22"
                height="24"
                viewBox="0 0 22 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 6.12305L17 18.123L14.5 15.623L12 13.123M5 18.123L17 5.87695"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          ) : (
            <button
              className="lg:hidden"
              aria-label="Hamburger Button"
              onClick={() => {
                setNav(true);
                setTimeout(() => {
                  setNavbar(true);
                }, 100);
              }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 6H20M4 12H20M13 18H20"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          )}
          <div className="items-center gap-5 hidden lg:flex">
            <Link href="/" legacyBehavior>
              <a
                className={
                  page == "Home"
                    ? "underline decoration-primario decoration-2 underline-offset-8 hover:opacity-80 transition"
                    : "hover:opacity-80 transition"
                }
              >
                Home
              </a>
            </Link>
            <Link href="/about" legacyBehavior>
              <a
                className={
                  page == "About"
                    ? "underline decoration-primario decoration-2 underline-offset-8 hover:opacity-80 transition"
                    : "hover:opacity-80 transition"
                }
              >
                About Me
              </a>
            </Link>
            <Link href="/experience" legacyBehavior>
              <a
                className={
                  page == "Experience"
                    ? "underline decoration-primario decoration-2 underline-offset-8 hover:opacity-80 transition"
                    : "hover:opacity-80 transition"
                }
              >
                Experience
              </a>
            </Link>
            <Link href="/projects" legacyBehavior>
              <a
                className={
                  page == "Projects"
                    ? "underline decoration-primario decoration-2 underline-offset-8 hover:opacity-80 transition"
                    : "hover:opacity-80 transition"
                }
              >
                Projects
              </a>
            </Link>
            <Link href="/blog" legacyBehavior>
              <a
                className={
                  page == "Blog"
                    ? "underline decoration-primario decoration-2 underline-offset-8 hover:opacity-80 transition"
                    : "hover:opacity-80 transition"
                }
              >
                Blog
              </a>
            </Link>
          </div>
        </div>
      </header>
      {nav ? (
        <motion.div
          animate={navbar ? "open" : "closed"}
          variants={variants}
          className="lg:hidden px-5 py-10 gap-5 flex flex-col text-blanco fixed z-40 bg-fondos w-screen h-full"
        >
          <Link href="/" legacyBehavior>
            <a
              className={
                page == "Home"
                  ? "underline decoration-primario decoration-2 underline-offset-8 hover:opacity-80 transition"
                  : "hover:opacity-80 transition"
              }
            >
              Home
            </a>
          </Link>
          <Link href="/about" legacyBehavior>
            <a
              className={
                page == "About"
                  ? "underline decoration-primario decoration-2 underline-offset-8 hover:opacity-80 transition"
                  : "hover:opacity-80 transition"
              }
            >
              About Me
            </a>
          </Link>
          <Link href="/experience" legacyBehavior>
            <a
              className={
                page == "Experience"
                  ? "underline decoration-primario decoration-2 underline-offset-8 hover:opacity-80 transition"
                  : "hover:opacity-80 transition"
              }
            >
              Experience
            </a>
          </Link>
          <Link href="/projects" legacyBehavior>
            <a
              className={
                page == "Projects"
                  ? "underline decoration-primario decoration-2 underline-offset-8 hover:opacity-80 transition"
                  : "hover:opacity-80 transition"
              }
            >
              Projects
            </a>
          </Link>
          <Link href="/blog" legacyBehavior>
            <a
              className={
                page == "Blog"
                  ? "underline decoration-primario decoration-2 underline-offset-8 hover:opacity-80 transition"
                  : "hover:opacity-80 transition"
              }
            >
              Blog
            </a>
          </Link>
        </motion.div>
      ) : (
        ""
      )}
    </>
  );
};

export default Header;
