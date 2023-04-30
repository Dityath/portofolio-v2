import Image from "next/image";

const SeanCsoWebsite = () => {
  return (
    <>
      <h1 className="text-5xl font-bold">
        <span className="text-primario">SEAN-CSO</span> Website
      </h1>
      <br />
      <br />
      <Image
        src="/porto/SEAN-CSO.png"
        alt="SEAN-CSO Website"
        width={1000}
        height={200}
      />
      <br />
      <br />
      <ul>
        <li>Project Type: Website/Webapp</li>
        <li>Working As: Website Project Manager</li>
        <li>
          Link:{" "}
          <a
            href="https://www.sean-cso.org/"
            className="text-primario"
            target="_blank"
          >
            SEAN-CSO
          </a>
        </li>
      </ul>
      <br />
      <br />
      <h2 className="text-2xl font-semibold">Backstories</h2>
      <br />
      This is my first project as a employee of Peace Generation. They asked if
      I could supervise their newer website, and I was so surprised that I ended
      up becoming the project manager for the website. The website is owned by
      the organization SEAN-CSO, which is a collaboration between Deakin
      University and Peace Generation. This website focuses on Southeast
      Asia&#39;s social issues and extremism.
      <br />
      <br />
      This website should be isn&#39;t overly complicated, it&#39;s a Wordpress
      site that primarily serves as a resource for communities and does some
      blogging. That&#39;s what I thought at first, but became project manager
      is more complicated than that lol.
      <br />
      <br />
      <h2 className="text-2xl font-semibold">Tech Stack</h2>
      <br />
      This website is built with Bedrock Wordpress, Tailwind CSS, and a variety
      of custom plugins. Although it appears simple, Bedrock Wordpress is a
      custom Wordpress site that requires advanced PHP skills. You can create
      almost everything with Bedrock Wordpress. This website deployed on a
      shared VPS with SQL database.
      <br />
      <br />
      <h2 className="text-2xl font-semibold">Stories</h2>
      <br />
      Because this was my first project as project manager, I had no idea what I
      was supposed to do at first. But after a week, I realized that my job is
      to act as a liaison between the managerials and the developers. I
      organized several meetings, checked on developer progress, oversaw the
      website, and did a variety of other tasks. I listened to management
      feedback, organized it, and attempted to persuade management of the best
      solution to some technical issues. Essentially, that is what the project
      manager did.
      <br />
      <br />
      This project completely altered my perspective. I never imagined being a
      project manager would be this exhausting. Not because they don&#39;t code,
      they have an easier job.
    </>
  );
};

export default SeanCsoWebsite;
