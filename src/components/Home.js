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
        <h1 className="text-6xl text-100 font-bold leading-none lg:leading-snug home-name ">
          Hello, I'm Ray.
        </h1>
      </section>
    </main>
  );
}
