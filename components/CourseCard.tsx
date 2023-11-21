import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CourseData } from "../types/course";
import { FC } from "react";

const CourseCard: FC<CourseData> = ({
  id,
  name,
  description,
  price,
  offerPrice,
  thumbnail,
  slug,
  registration_link,
}) => {
  return (
    <div className="border rounded-2xl bg-slate-100 mb-6">
      <Image
        src={thumbnail}
        height="400"
        width="1500"
        alt="Winter training for Civil"
        className="rounded-t-2xl w-full"
      />
      <div className="p-4 md:p-8">
        <div className="flex gap-4 mb-2 md:mb-4">
          <small className="bg-yellow-300 px-6 py-1 rounded-xl text-sm capitalize">
            enroll open
          </small>
          <small className="bg-yellow-300 px-6 py-1 rounded-xl text-sm capitalize">
            limited seats
          </small>
        </div>
        <h1 className="font-bold text-xl md:text-3xl mb-3 md:mb-5">{name}</h1>

        <p className="mb-6">{description}</p>

        <div className="flex justify-between">
          <div className="flex">
            <Link
              href={registration_link}
              target="_blank"
              className="bg-slate-700 hover:bg-slate-800 text-white px-7 md:px-14 py-2 md:py-3 rounded-md mr-4"
            >
              Enroll
            </Link>
            <Link
              href={slug}
              className="py-2 md:py-3 ml-4 text-blue-700 hover:text-blue-800"
            >
              Learn more
            </Link>
          </div>

          <p className="text-lg">
            Price: <s>₹{price}</s> <b>₹{offerPrice}</b>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
