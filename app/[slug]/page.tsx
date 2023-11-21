import React from "react";
import { Metadata } from "next";
import courses from "../../data/courses";
import Image from "next/image";
import Link from "next/link";

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
      <Link href="/" className="text-blue-700 hover:text-blue-800">
        ← back to home
      </Link>

      {course.map((cohort) => (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-6">
          <div className="col-span-3 md:col-span-2">
            <Image
              src={cohort.thumbnail}
              height="400"
              width="1500"
              alt="Winter training for Civil"
              className="rounded-3xl w-full"
            />
          </div>
          <div className="rounded-3xl p-8 bg-slate-100 col-span-3 md:col-span-1 flex flex-col justify-between">
            <div>
              <p className="text-lg mb-4">
                <b>Price: </b>
                <s>₹{cohort.price}</s> <b>₹{cohort.offerPrice}</b>
              </p>

              <p className="text-lg mb-4">
                <b> Duration: </b>1 months
              </p>

              <p className="text-lg mb-4">
                <b> Starts From: </b>December 2023 - Jan 2024
              </p>
            </div>

            <Link
              href={cohort.registration_link}
              target="_blank"
              className="bg-slate-700 hover:bg-slate-800 text-white py-2 md:py-3 rounded-md block text-center"
            >
              Enroll
            </Link>
          </div>
          <div className="rounded-3xl p-10 bg-slate-100 col-span-3">
            <h1 className="font-bold text-xl md:text-3xl mb-3 md:mb-5">
              {cohort.name}
            </h1>

            <p className="mb-6">{cohort.description}</p>

            <div dangerouslySetInnerHTML={{ __html: cohort.content }} />
          </div>
        </div>
      ))}
    </div>
  );
}
