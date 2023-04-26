import { useEffect } from "react";

import SmallCard from "../smallCard";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AboutGridTools = () => {
  const { ref, inView } = useInView();
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        y: 0,
        opacity: 1,
      });
    }
  }, [animation, inView]);

  return (
    <div
      ref={ref}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5"
    >
      <motion.div
        initial={{ y: "10vh", opacity: 0 }}
        animate={animation}
        transition={{
          type: "spring",
          duration: 2.6,
          bounce: 0,
          delay: 0,
        }}
        className="w-full h-full"
      >
        <SmallCard image="/tools/figma.png" title="Figma" desc="" />
      </motion.div>
      <motion.div
        initial={{ y: "10vh", opacity: 0 }}
        animate={animation}
        transition={{
          type: "spring",
          duration: 2.6,
          bounce: 0,
          delay: 0.5,
        }}
        className="w-full h-full"
      >
        <SmallCard
          image="/tools/vscode.png"
          title="Visual Studio Code"
          desc=""
        />
      </motion.div>
      <motion.div
        initial={{ y: "10vh", opacity: 0 }}
        animate={animation}
        transition={{
          type: "spring",
          duration: 2.6,
          bounce: 0,
          delay: 1,
        }}
        className="w-full h-full"
      >
        <SmallCard image="/tools/vim.png" title="Vim or Neovim" desc="" />
      </motion.div>
      <motion.div
        initial={{ y: "10vh", opacity: 0 }}
        animate={animation}
        transition={{
          type: "spring",
          duration: 2.6,
          bounce: 0,
          delay: 1.5,
        }}
        className="w-full h-full"
      >
        <SmallCard image="/tools/notion.png" title="Notion App" desc="" />
      </motion.div>
      <motion.div
        initial={{ y: "10vh", opacity: 0 }}
        animate={animation}
        transition={{
          type: "spring",
          duration: 2.6,
          bounce: 0,
          delay: 2,
        }}
        className="w-full h-full"
      >
        <SmallCard image="/tools/trello.png" title="Trello" desc="" />
      </motion.div>
      <motion.div
        initial={{ y: "10vh", opacity: 0 }}
        animate={animation}
        transition={{
          type: "spring",
          duration: 2.6,
          bounce: 0,
          delay: 2.5,
        }}
        className="w-full h-full"
      >
        <SmallCard image="/tools/ubuntu.png" title="Linux Ubuntu" desc="" />
      </motion.div>
      <motion.div
        initial={{ y: "10vh", opacity: 0 }}
        animate={animation}
        transition={{
          type: "spring",
          duration: 2.6,
          bounce: 0,
          delay: 3,
        }}
        className="w-full h-full"
      >
        <SmallCard image="/tools/postman.png" title="Postman" desc="" />
      </motion.div>
    </div>
  );
};

export default AboutGridTools;
