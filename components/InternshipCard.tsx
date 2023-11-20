import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function InternshipCard() {
  return (
    <div className="border rounded-2xl bg-slate-100 mb-6">
      <Image
        src="/civil-internship.png"
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
        <h1 className="font-bold text-xl md:text-3xl mb-3 md:mb-5">
          Winter Internship for Civil Engineering Students
        </h1>

        <p className="mb-4">
          Upgrade your civil engineering skills with our hands-on 1 month winter
          training program. Gain valuable experience in structural design,
          AutoCAD, soil testing, and more.
        </p>
        <p className="mb-2 font-semibold">
          Starting from: December and January
        </p>

        <p className="mb-2 font-semibold">Benefits:</p>
        <ul className="mb-10 list-disc pl-6 md:pl-10">
          <li>Learn the basics of structural design</li>
          <li>Master AutoCAD, the industry-standard drafting software</li>
          <li>Understand the importance of soil testing and its techniques</li>
          <li>Understand the concepts of SFD and BMD in real life structure</li>
          <li>Experience real-world retrofitting projects</li>
          <li>Visit ongoing construction sites</li>
        </ul>

        <div className="flex justify-between ">
          <Link
            href="https://forms.gle/iqcqSniqzq5LbtBP9"
            target="_blank"
            className="bg-slate-700 hover:bg-slate-800 text-white px-7 md:px-14 py-2 md:py-3 rounded-md mr-4"
          >
            Enroll
          </Link>
          <p className="text-lg">
            Price: <s>₹6000</s> <b>₹3000</b>
          </p>
        </div>
      </div>
    </div>
  );
}
