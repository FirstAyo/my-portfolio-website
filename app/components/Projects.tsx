import React from "react";
import { client, urlFor } from "../lib/sanity";
import { projectCard } from "../lib/interface";
import Image from "next/image";
import Link from "next/link";

async function getData() {
  const query = `
  *[_type == 'project'] | order(_createdAt desc){
  title,
    smallDescription,
    "currentSlug": slug.current,
    featuredImage,
    _id,
    category[] -> {
      _id,
      slug,
      name
    }
}`;

  const data = await client.fetch(query);

  return data;
}

async function Projects() {
  const data: projectCard[] = await getData();

  return (
    <>
      <section className="bg-gray-100">
        <main className=" w-[95%] mx-auto gap-8 md:gap-4 grid md:grid-cols-2 lg:grid-cols-3 my-5 py-10">
          {data.map((post, idx) => (
            <div
              key={idx}
              className="rounded-t-md relative bg-white px-3 py-3 shadow-xl"
            >
              <Link href={`/blog/${post.currentSlug}`}>
                {" "}
                <Image
                  src={urlFor(post.featuredImage).url()}
                  alt={post.title}
                  width={300}
                  height={300}
                  priority
                  className=" object-cover h-[250px] w-full"
                />
              </Link>
              <div className="">
                <Link href={`/blog/${post.currentSlug}`}>
                  <h3 className="my-4 font-semibold text-xl hover:text-blue-500 line-clamp-2">
                    {post.title}
                  </h3>
                </Link>
                <p className="text-gray-500 line-clamp-3 my-5">
                  {post.smallDescription}
                </p>
                 {post.category && post.category.length > 0 && (
                   <p className="absolute top-0 left-0 bg-red-700/70 text-white font-semibold px-4 py-1 rounded-tl-md">{ post.category[0].name}</p>
                 )}
                
              </div>
            </div>
          ))}
        </main>
      </section>
    </>
  );
}

export default Projects;
