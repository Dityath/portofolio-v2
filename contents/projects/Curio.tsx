import Image from "next/image";
import SliderComponent from "@/components/slider/SliderComponent";

const Curio = () => {
  return (
    <>
      <h1 className="text-5xl font-bold">Curio</h1>
      <br />
      <br />
      <Image src="/porto/Curio.png" alt="Curio App" width={1000} height={200} />
      <br />
      <br />
      <ul>
        <li>Project Type: UI/UX Scientific Paper/Mobile App Concept</li>
        <li>Working As: UI/UX Designer</li>
        <li>Link: The main product is a Paper</li>
      </ul>
      <br />
      <br />
      <h2 className="text-2xl font-semibold">Backstories</h2>
      <br />
      In my second year of university, my good friends and I attempt to compete
      in a product design paper research competition. The competition is known
      as CHAMPIONSHIP REGENERATION 2021. We did not win, but it was our first
      time participating in a paper research competition.
      <br />
      <br />
      <h2 className="text-2xl font-semibold">Stories</h2>
      <br />
      At the time, my friends and I saw an announcement about the competition on
      our campus. We also thought we should try to enter this competition. We
      saw a learning opportunity there. And, of course, we followed it despite
      our limited understanding of everything. Especially for someone like me
      who previously didn&#39;t understand UIUX or Design. But that day. I
      literally said &#34;we balls&#34; at that time. After all, there isn&#39;t
      anything to lose.
      <br />
      <br />
      We used design thinking techniques as a framework at the time. which
      consists of 5 steps, Empathise, Define, Ideate, Prototype, and Test.
      Everything became jumbled and disoriented in Empathise&#39;s early stages.
      We have no ideas. But we kept brainstorming and looking for loopholes. And
      my friend came up with an idea. A mentoring application, because we all
      feel the need for a mentor.
      <br />
      <br />
      Then we try to move on to the next step by step. Create surveys,
      interviews, Affinity Diagrams, User Personas, User Flows, and finally,
      Lo-Fi and Hi-Fi Prototyping. And did we win after that? no. Did we learn
      anything? Absolutely, I learned a great deal. How to come up with an idea,
      how to communicate effectively with my teammate, and, of course, where to
      begin my design journey. It was really fun experience.
      <br />
      <br />
      <h2 className="text-2xl font-semibold">Galleries</h2>
      <br />
      <div className="flex justify-center">
        <SliderComponent
          galleryContent={[
            {
              img: "/porto/curio-gallery/1.png",
              desc: "The main Paper Proposal document",
            },
            {
              img: "/porto/curio-gallery/2.png",
              desc: "User Persona",
            },
            {
              img: "/porto/curio-gallery/3.png",
              desc: "User Flow",
            },
            {
              img: "/porto/curio-gallery/4.png",
              desc: "Splash Design",
            },
            {
              img: "/porto/curio-gallery/5.png",
              desc: "Lofi Prototype",
            },
            {
              img: "/porto/curio-gallery/6.png",
              desc: "Overall Design",
            },
          ]}
        />
      </div>
    </>
  );
};

export default Curio;
