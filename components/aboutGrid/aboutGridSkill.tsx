import { useEffect } from "react";

import SmallCard from "../smallCard";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AboutGridSkill = () => {
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
        <SmallCard
          image="/skills/html.png"
          title="Html 5"
          desc="Well, as Frontend Dev, who doesn't need HTML?"
        />
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
          image="/skills/css.png"
          title="Css"
          desc="I learnt a lot about CSS, and I think understanding CSS is an underrated skills that not every FE Dev confident. But I'm confident enough to beat Goku in CSS Battle."
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
        <SmallCard
          image="/skills/js.png"
          title="Vanilla Javascript"
          desc="My first JS project ever should be done in JQuery. But somehow I wrote everything in Vanilla JS instead."
        />
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
        <SmallCard
          image="/skills/node.png"
          title="Node js"
          desc="Trust me, I understand Node.js(Fr)."
        />
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
        <SmallCard
          image="/skills/react.png"
          title="React js"
          desc="This is the framework or library that I really feel comfortable to work with, I learn React since 2019 and still learning everything about React. The hooks, the library, everything. I just love React Js. Sad they delete CRA from React Js docs :( But don't worry I know React Vite as well :D"
        />
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
        <SmallCard
          image="/skills/next.png"
          title="Next js"
          desc="If you read this right now, this website is written with Next Js. Now, Next Js is one of the world's most popular frameworks. And I enjoy using it, even though I'm still learning about Next Js."
        />
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
        <SmallCard
          image="/skills/sass.png"
          title="Sass"
          desc="Sass is a preprocessor scripting language. And when I'm write this right now(April 2023). I already moved to Tailwind"
        />
      </motion.div>
      <motion.div
        initial={{ y: "10vh", opacity: 0 }}
        animate={animation}
        transition={{
          type: "spring",
          duration: 2.6,
          bounce: 0,
          delay: 3.5,
        }}
        className="w-full h-full"
      >
        <SmallCard
          image="/skills/tailwind.png"
          title="Tailwind css"
          desc="I love this Css Framework, still the best for me. No cap"
        />
      </motion.div>
    </div>
  );
};

export default AboutGridSkill;
