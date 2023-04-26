import Link from "next/link";
import Layout from "@/components/layout";

const Blog = () => {
  return (
    <Layout page="Blog" desc={null}>
      <div className="flex flex-col gap-10 justify-center items-center h-screen text-blanco">
        <div className="text-center">
          <h1 className="text-3xl font-bold">
            Sorry, unfortunately, I haven&#39;t write any blog hehe
          </h1>
          <p>Maybe go back to Home Page?</p>
        </div>
        <Link href="/" legacyBehavior>
          <a className="bg-primario w-36 h-12 rounded hover:opacity-80 transition flex justify-center items-center">
            Go to Home
          </a>
        </Link>
      </div>
    </Layout>
  );
};

export default Blog;
