import React from "react";
import image from "../mybg.jpg";

export default function Home() {
  return (
    <main>
      <img
        src={image}
        alt="mybg"
        className="absolute objects-cover w-full h-full"
      />
      <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
        <h2 className="text-4xl text-70 font-bold leading-none lg:leading-snug home-name ">
          Hello, I'm Ray.
        </h2>
      </section>
    </main>
  );
}
