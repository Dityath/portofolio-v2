import Image from "next/image";

import { motion } from "framer-motion";

import Layout from "@/components/layout";

import AboutGridSkill from "@/components/aboutGrid/aboutGridSkill";
import AboutGridTools from "@/components/aboutGrid/aboutGridTools";

import AboutContent from "@/contents/AboutContent.mdx";

const About = () => {
  return (
    <Layout page="About" desc={""}>
      <motion.main
        initial={{ y: "10vh", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", duration: 2.6, bounce: 0 }}
        className="mx-4 my-10 text-blanco flex justify-center"
      >
        <div className="max-w-lg md:max-w-2xl lg:max-w-5xl w-full flex flex-col lg:flex-row lg:gap-5">
          <div className="relative w-full sm:w-[294px] h-[297px] overflow-hidden rounded justify-self-center self-center lg:self-start lg:mt-6">
            <Image
              src="/foto-diri/foto2.jpg"
              alt="Ditya's Photo"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="lg:w-3/4">
            <h1 className="font-semibold my-5 text-2xl lg:text-4xl">
              Ditya Athallah
            </h1>
            <article>
              <AboutContent />
            </article>
          </div>
        </div>
      </motion.main>
      <section className="mx-4 my-10 text-blanco flex justify-center">
        <div className="max-w-lg md:max-w-2xl lg:max-w-5xl w-full text-blanco">
          <div className="mt-12">
            <h2 className="text-xl text-center">My Skills</h2>
            <AboutGridSkill />
            <h2 className="text-xl text-center mt-20">My Tools</h2>
            <AboutGridTools />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
