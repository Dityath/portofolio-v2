import Card from "../../components/card";
import Layout from "../../components/layout";

import experience from "../../contents/experience/index.json";

const Experience = () => {
  return (
    <Layout page="Experience" desc="My experience">
      <div className="mx-4 lg:px-10 mt-20 mb-4 text-blanco flex justify-center">
        <div className="max-w-lg md:max-w-2xl lg:max-w-5xl w-full">
          <h2 className="text-4xl mt-6 font-bold">My Experiences</h2>
          <p>My working experience and internship experience</p>
          {experience.map((value, index) => (
            <Card
              key={index}
              title={`${value.title}, ${value.city}`}
              subtitle={`As ${value.jobTitle}, ${value.date}`}
              photoSrc={value.img}
              photoAlt={value.img}
              href={`/experience/${index}`}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Experience;
