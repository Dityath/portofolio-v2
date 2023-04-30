import Image from "next/image";
import SliderComponent from "@/components/slider/SliderComponent";

const MotionWebsite = () => {
  return (
    <>
      <h1 className="text-5xl font-bold">
        <span className="text-primario">Motion</span> Website
      </h1>
      <br />
      <br />
      <Image
        src="/porto/Motionweb.png"
        alt="Motion Website"
        width={1000}
        height={200}
      />
      <br />
      <br />
      <ul>
        <li>Project Type: Website/Webapp</li>
        <li>Working As: Frontend Developer</li>
        <li>Link: The website is already expired</li>
      </ul>
      <br />
      <br />
      <h2 className="text-2xl font-semibold">Backstories</h2>
      <br />
      After working as a UI/UX designer for several months at Motion (Mobile
      Innovation Lab), my Chief Officer wishes to create a company profile
      website. And at the time, I was the only one who knew Frontend and Stuff,
      so he asked if I wanted to do it or not. &#34;Hell ya, why not?&#34; I
      said. So that&#39;s how the project got started. I&#39;m working together
      with my good friend Kurniadi as the Backend Developer, Dimas as the
      Project Manager, and a UI/UX designer (whose name I forgot, sorry bro).
      <br />
      <br />
      <h2 className="text-2xl font-semibold">Tech Stack</h2>
      <br />
      The frontend page is built with Next Js, the backend with Laravel PHP, and
      I was inexperienced at the time. So I&#39;m just using Next Js the same
      way I&#39;m using React Js. For frontend libraries, I only use Tailwind
      Css.
      <br />
      <br />
      <h2 className="text-2xl font-semibold">Stories</h2>
      <br />
      I worked on this website despite having little experience with frontend
      development. and, to be honest, it was more difficult than I anticipated.
      However, with a solid foundation of CSS knowledge and a basic
      understanding of programming, this project becomes easier each passing
      day.
      <br />
      <br />
      This is my first time working with Tailwind Css on a website. And this
      project made me fall in love with Tailwind CSS as well as other CSS
      frameworks like Chakra Ui and the newest Radix Ui. This was also my first
      time using the motion framer library to implement some moving animations
      in a project.
      <br />
      <br />
      Did everything go as planned? No, of course not. I discovered some bugs
      and errors. Particularly in the front-to-back section. Because this is
      also my first real-world experience with the backend. Postman and other
      tools were what I and my backend expected to work at the time, they just
      didn&#39;t work on the client browser. Also, there is an issue with the
      Context API, and logging in and out of the website admin section is also a
      little difficult. However, all problems can be resolved in the end.
      <br />
      <br />
      This was, without a doubt, a memorable experience for me. This project was
      a fantastic learning experience for me.
      <br />
      <br />
      <h2 className="text-2xl font-semibold">Galleries</h2>
      <br />
      <div className="flex justify-center">
        <SliderComponent
          galleryContent={[
            {
              img: "/porto/motion-gallery/1.png",
              desc: "The main Figma where me and my friends work.",
            },
            {
              img: "/porto/motion-gallery/2.png",
              desc: "The landing page of the website",
            },
            {
              img: "/porto/motion-gallery/3.png",
              desc: "The About Us page of the website",
            },
          ]}
        />
      </div>
    </>
  );
};

export default MotionWebsite;
