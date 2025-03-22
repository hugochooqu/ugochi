"use client";
import React, { useState } from "react";


export function About() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("hugotchee1@gmail.com");

    setCopied(true);
  };
  return (
    <div className=" max-w-7xl mx-auto w-full text-lg text-gray-400 px-12 md:px-20 pt-8 lg:pt-28">
      <h1 className="lg:hidden text-4xl text-teal-300 pb-12">About</h1>
      <p>
        {" "}
        Hi there! I'm Ugochukwu Victor. Growing up, i was nicknamed 'computer'
        because of how well i loved things that related to computers. I ended up
        studying computer science in the university. I started programming
        during my days in the university and have never stopped learning since,
        constantly exploring new technologies and frameworks.
        <br />
        <br />
        In my spare time I like to improve on my culinary skills, i love to
        watch football and hang out with my friends. Sometimes, I would rather
        read a book or watch the news to remain updated on what's happening in
        the world.
        <br />
        <br />
        Below are some of my notable projects I have developed over the years,
        minus the ones I signed with a non-disclosure agreement.
      </p>
      <br />
      <button onClick={() => window.open("/NwanumaUgochukwu.pdf", "_blank")} className="rounded-md border border-teal-300 p-2 w-auto hover:text-teal-300">Download my resume</button>
    </div>
  );
}
