import Image from "next/image";
import SliderComponent from "@/components/slider/SliderComponent";

const TesCovId = () => {
  return (
    <>
      <h1 className="text-5xl font-bold">
        Tescov.<span className="text-primario">id</span>
      </h1>
      <br />
      <br />
      <Image
        src="/porto/Testcovid.png"
        alt="Motion Website"
        width={1000}
        height={200}
      />
      <br />
      <br />
      <ul>
        <li>Project Type: Website/Webapp</li>
        <li>Working As: UI/UX Designer</li>
        <li>
          Link:{" "}
          <a
            href="https://tescov-id-git-main-milhamm.vercel.app/"
            className="text-primario"
            target="_blank"
          >
            Tescov.id
          </a>
          (Only Frontend without Backend Service)
        </li>
      </ul>
      <br />
      <br />
      <h2 className="text-2xl font-semibold">Backstories</h2>
      <br />
      When Covid struck in 2020, the college hosted a hackathon competition. The
      tournament was called the Devday Hackathon. It was a 72 hours hackathon. I
      competed in the tournament alongside two friends, Avtara and Ilham
      Mubarak. We formed a group named DoubleEngOneDit. In the competition, I
      took the position of UIUX designer.
      <br />
      <br />
      <h2 className="text-2xl font-semibold">Tech Stack</h2>
      <br />
      The website is built with Next Js as the frontend framework and Golang for
      the backend. We utilize Mapbox API for the frontend for handling mapping
      and other issues in general.
      <br />
      <br />
      <h2 className="text-2xl font-semibold">Stories</h2>
      <br />
      We were unsure what we were intended to make at the moment. So I came up
      with the idea of creating the Covid Vaccinate website. It&#39;s a website
      that keeps track of all Vaccinate events around the city. There was no
      such website at the time.
      <br />
      <br />
      Everything went smoothly for the first two days, until the third day, when
      it took 8 hours for everything to finish. Suddenly, there are numerous
      issues with the backend deployment. We attempted several approaches to
      solving the deployment problem. We didn&#39;t sleep, and at 4 a.m., we
      addressed the problem by borrowing a friend&#39;s VPS to deploy the
      application.
      <br />
      <br />
      Because he was tired and at the time, unsure of what to do next. We can
      only pray for the presentation and the solution that will be offered. But,
      of course, we finished everything before the presentation began.
      <br />
      <br />
      Everyone on our team is shocked that we came in first place. Yup, we won.
      We didn&#39;t realize this project was a brilliant idea that executed
      flawlessly. It was a fantastic experience that I will never forget.
      <br />
      <br />
      <h2 className="text-2xl font-semibold">Galleries</h2>
      <br />
      <div className="flex justify-center">
        <SliderComponent
          galleryContent={[
            {
              img: "/porto/tescov-gallery/1.png",
              desc: "The main Figma",
            },
            {
              img: "/porto/tescov-gallery/2.png",
              desc: "My winner Certificate",
            },
            {
              img: "/porto/tescov-gallery/3.png",
              desc: "Instagram post where we won",
            },
          ]}
        />
      </div>
    </>
  );
};

export default TesCovId;
