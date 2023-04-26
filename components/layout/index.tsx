import { useRouter } from "next/router";

import Header from "../header";
import Footer from "../footer";
import Seo from "../seo";

import { motion } from "framer-motion";

type LayoutDataType = {
  page: string;
  children: any;
  desc: string | null;
};

const Layout = ({ page, children, desc }: LayoutDataType) => {
  const router = useRouter();

  return (
    <div className="font-body bg-fondos">
      <Seo page={page} desc={desc} />
      <Header page={page} />
      <motion.div
        key={router.route}
        initial="initial"
        animate="animate"
        variants={{
          initial: {
            opacity: 0,
          },
          animate: {
            opacity: 1,
          },
        }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.div>
      <Footer />
    </div>
  );
};

export default Layout;
