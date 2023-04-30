import Image from "next/image";
import SliderComponent from "@/components/slider/SliderComponent";

const WangsaffJs = () => {
  return (
    <>
      <h1 className="text-5xl font-bold">
        Wangsaff<span className="text-primario">Js</span>
      </h1>
      <br />
      <br />
      <Image
        src="/porto/Whatsapp js.png"
        alt="Wangsaff Js"
        width={1000}
        height={200}
      />
      <br />
      <br />
      <ul>
        <li>Project Type: Node Js Application</li>
        <li>Working As: Software Engineer(?)</li>
        <li>Link: The application is already expired</li>
      </ul>
      <br />
      <br />
      <h2 className="text-2xl font-semibold">Stories</h2>
      <br />
      So, basically, this is a meme project that utilizes the use of WhatsApp
      bots. However, this project may be useful for some online stores that use
      WhatsApp as a sales channel. Some of my friends sell online through
      WhatsApp, and they, like everyone else, need some time off. And here is
      when WhatsApp bots might come in handy.
      <br />
      <br />
      This idea allows my buddies to go for take a break while still keeping
      clients served and seeing the sales catalog.
      <br />
      <br />
      <h2 className="text-2xl font-semibold">Tech Stack</h2>
      <br />
      Perhaps everyone will wonder how to make a WhatsApp bot, and how to make
      it &#34;smart&#34;. So let me explain. In this case, Node JS serves as the
      foundation for the entire program. And, of course, a WhatsApp phone number
      and a mobile phone that is rarely used are required, because the
      notifications will be stacked up.
      <br />
      <br />I installed a package in Node JS that allows Node JS to behave as a
      second client machine. In this case, I converted sales catalog to be SQL
      as well. And I simply designed the entire chatbot feel like an e-commerce
      site. The entire project is wrapped by Docker. I also use ORM Sequelize
      for SQL.
      <br />
      <br />
      This project was run for 6 months in VPS, before finally being shut down
      (covid hits and my friends got more plenty times to chat for their
      business).
    </>
  );
};

export default WangsaffJs;
