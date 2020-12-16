import BlockContent from "@sanity/block-content-to-react";
import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";
import aboutme from "../aboutme.jpg";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

export default function About() {
  const [author, SetAuthor] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type=="author"]{
            name,
            bio,
            "authorImage": image.asset->url
        }`
      )
      .then((data) => SetAuthor(data[0]))
      .catch(console.error);
  }, []);

  if (!author)
    return (
      <button type="button" class="bg-rose-600 ..." disabled>
        <svg class="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24"></svg>
        Loading...
      </button>
    );

  return (
    <main className="relative bg-gray-800">
      <img src={aboutme} alt="aboutme" className="absolute w-full" />
      <div className="p-10 lg:pt-48 container mx-auto relative">
        <section className="bg-blue-600 rounded-lg shadow-2xl lg:flex p-20">
          <img
            src={urlFor(author.authorImage).url()}
            className="rounded w-32 h-32 lg:w-64 lg:h-64 mr-8"
            alt={author.name}
          />
          <br></br>
          <div className="text-lg flex flex-col justify-center">
            <h1 className="cursive text-5xl text-blue-300 mb-4">
              Welcome to my page, I'm{" "}
              <span className="text-blue-100">{author.name}</span>
            </h1>
            <div className="prose lg:prose-xl text-white">
              <BlockContent
                blocks={author.bio}
                projectId="sncsnz7u"
                dataset="production"
              />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
