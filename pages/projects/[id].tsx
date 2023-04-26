import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { useEffect } from "react";

import Layout from "@/components/layout";

import projects from "@/contents/projects/index.json";

const Detail = () => {
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (Number(id) >= projects.length) {
      router.push("/404");
    }
  }, [id, router]);

  return (
    <Layout page="Experiences" desc="">
      <motion.main
        initial={{ y: "10vh", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", duration: 2.6, bounce: 0 }}
        className="mx-4 my-10 text-blanco flex justify-center"
      >
        <div className="max-w-lg md:max-w-2xl lg:max-w-5xl w-full flex flex-col lg:flex-row lg:gap-5 min-h-[60vh]">
          Sorry guys, I haven&#39;t write anything about{" "}
          {projects[Number(id)] ? projects[Number(id)].title : ""} :(
        </div>
      </motion.main>
    </Layout>
  );
};

export default Detail;
