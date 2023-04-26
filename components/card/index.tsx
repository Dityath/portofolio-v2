import { useEffect } from "react";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Image from "next/image";
import { useRouter } from "next/router";

type CardDataType = {
  title: string;
  subtitle: string;
  photoSrc: string;
  photoAlt: string;
  href: string;
};
const Card = ({ title, subtitle, photoSrc, photoAlt, href }: CardDataType) => {
  const router = useRouter();
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
    <motion.div
      ref={ref}
      initial={{ y: "10vh", opacity: 0 }}
      animate={animation}
      transition={{ type: "spring", duration: 1, bounce: 0.5 }}
      className="w-full h-36 sm:h-44 md:h-60 lg:h-[534px] mt-6 relative rounded overflow-hidden"
      onClick={() => router.push(href)}
    >
      <div className="absolute opacity-0 hover:opacity-100 transition cursor-pointer top-0 left-0 z-20 w-full h-full bg-gradient-to-t from-black/100 to-black/0 flex flex-col justify-end p-2 lg:p-4">
        <h3 className="text-sm font-bold md:text-base lg:text-xl">{title}</h3>
        <p className="text-xs md:text-sm lg:text-lg">{subtitle}</p>
      </div>
      <div className="w-full h-full relative z-10">
        <Image
          src={photoSrc}
          alt={photoAlt}
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="bg-rellenos animate-pulse w-full h-full z-0"></div>
    </motion.div>
  );
};

export default Card;
