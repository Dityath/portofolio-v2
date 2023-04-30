import Image from "next/image";

const DishutJabar = () => {
  return (
    <>
      <h1 className="text-5xl font-bold">
        Dashboard <span className="text-primario">Dinas Kehutanan</span> Jawa
        Barat
      </h1>
      <br />
      <br />
      <Image
        src="/porto/DashboardDishut.png"
        alt="Dashboard Dishut"
        width={1000}
        height={200}
      />
      <br />
      <br />
      <ul>
        <li>Project Type: Website/Webapp</li>
        <li>Working As: Frontend Developer</li>
        <li>
          Link:{" "}
          <a
            href="https://dashboard-dishut.jabarprov.go.id/"
            className="text-primario"
            target="_blank"
          >
            Dashboard Dishut
          </a>
        </li>
      </ul>
      <br />
      <br />
      <h2 className="text-2xl font-semibold">Backstories</h2>
      <br />
      This was my first project when I finally decided to join Braga
      Technologies as a Frontend Developer in May 2022. It is built on
      Javascript and utilizes React Vite as the main library/framework. This
      project is used as a dashboard that contains all information about
      Perhutani in West Java. So well, this is my first time worked with
      Government, it was a great experience.
      <br />
      <br />
      <h2 className="text-2xl font-semibold">Tech Stack</h2>
      <br />
      While the frontend is powered by React Vite, the backend is powered by
      Directus Headless CMS and a small amount of Fastify API. All of them are
      wrapped in the Docker Engine, which is running on the server.
      <br />
      <br />
      For frontend libraries, I use React Vite, Maplibre, Maptiler, Tailwind
      Css, and others, of which I believe there are many more. Also, I did not
      use redux because I believe react context is sufficient.
      <br />
      <br />
      <h2 className="text-2xl font-semibold">Stories</h2>
      <br />
      The most interesting aspect of this website is the mapping of all of West
      Java, which is done with Maplibre as a library and Maptiler as a map API.
      As I previously stated, we obviously require more API for the MVT (Mapbox
      Vector Tile) coordinates of the map, which is why we continue to use
      Fastify as a backend service.
      <br />
      <br />
      The utilization of WebGL on this website is insane. There are at least 5
      or 6 MVT layers on the &#34;/peta&#34; page, at least 3 MVT layers on the
      main page, and 2 maps on two different pages. I worked during the day and
      studied mapping in WebGL and Maplibre at night.
      <br />
      <br />
      I encountered several issues as well, the most difficult of which is when
      the map does not run properly. All of the map coordinates are scattered as
      a result of my errors in putting incorrect code on some MVT Layers, and I
      really want to kill myself. All thanks to my Senior who helped me.
      <br />
      <br />
      It was an amazing experience. I learned a lot about React, Mapping, WebGL,
      and much more. Kudos to Braga Technologies.
    </>
  );
};

export default DishutJabar;
