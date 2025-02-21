"use client"; // Ensures this component is client-rendered

import React from "react";
import Image from "next/image";
import Head from "next/head"; // Replaces react-helmet for Next.js
import { mathematicians } from "./../../components/Images/images";

const Mathematicians = () => {
  return (
    <>
      {/* Replacing Helmet with Head for Next.js */}
      <Head>
        <title>My_Mathematics | Mathematicians</title>
      </Head>

      <h1 className="title-of-mathematicians">
        Greatest Mathematicians in the history of Mathematics
      </h1>

      <div className="all-mathematicians-information">
        {mathematicians.map((mathematician, index) => (
          <div className="mathematician" key={index}>
            <h1>{mathematician.name}</h1>
            {/* Using Next.js Image for optimization */}
            <Image
              src={mathematician.image}
              alt={mathematician.name}
              width={200}
              height={200}
            />
            <p className="moreInfo">
              <span>
                <strong>Birth Year :</strong> {mathematician.birthYear}
              </span>
              <br />
              <span>
                <strong>Death Year :</strong> {mathematician.deathYear}
              </span>
              <br />
              <span>
                <strong>Birth Place :</strong> {mathematician.birthplace}
              </span>
            </p>
            <p className="achievement">
              <strong>Achievements : </strong>
              <br />
              {mathematician.achievements}
            </p>
            <ul className="nobelWorks">
              <strong>Nobel Works : </strong>
              {mathematician.notableWorks.map((work) => (
                <li key={work}>{work}</li>
              ))}
            </ul>
            {mathematician.awards && mathematician.awards.length > 0 && (
              <p className="awards">
                <strong>Awards: </strong>
                <br />
                {mathematician.awards.join(", ")}
              </p>
            )}

            <p className="legacy">
              <strong>Legacy : </strong>
              <br />
              {mathematician.legacy}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Mathematicians;
