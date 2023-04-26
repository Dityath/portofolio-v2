import Card from "@/components/card";
import Layout from "@/components/layout";

import projects from "@/contents/projects/index.json";

const Projects = () => {
  return (
    <Layout page="Projects" desc={""}>
      <div className="mx-4 lg:px-10 mt-20 mb-4 text-blanco flex justify-center">
        <div className="max-w-lg md:max-w-2xl lg:max-w-5xl w-full">
          <h2 className="text-4xl mt-6 font-bold">My Projects</h2>
          <p>My latest projects</p>
          {projects.map((value, index) => (
            <Card
              key={index}
              title={value.title}
              subtitle={`${value.projectType} - As ${value.jobTitle}`}
              photoSrc={value.img}
              photoAlt={value.imgAlt}
              href={`/projects/${index}`}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Projects;
