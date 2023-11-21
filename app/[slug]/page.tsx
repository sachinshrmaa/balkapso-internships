import React from "react";
import { Metadata } from "next";
import courses from "../../data/courses";
import Image from "next/image";

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // read route params
  const { slug } = params;

  // fetch data
  const course = courses.filter((cohort) => cohort.slug === slug);

  return {
    title: `${course.map((cohort) => cohort.name)}`,
    description: `${course.map((cohort) => cohort.description)}`,
  };
}

export default function DetailedPage({ params }) {
  const { slug } = params;

  const course = courses.filter((course) => course.slug === slug);

  console.log(course);

  return (
    <div className="max-w-7xl mx-auto px-5 py-6 min-h-[70vh]">
      {course.map((cohort) => (
        <>
          <Image
            src={cohort.thumbnail}
            height="400"
            width="1500"
            alt="Winter training for Civil"
            className="rounded-2xl w-full mb-6"
          />
          <div className="px-2">
            <h1 className="font-bold text-xl md:text-3xl mb-3 md:mb-5">
              {cohort.name}
            </h1>

            <p className="mb-6">{cohort.description}</p>
          </div>
        </>
      ))}
    </div>
  );
}
