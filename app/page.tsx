import React from "react";
import InternshipCard from "../components/InternshipCard";
import testimonials from "../data/testimonials";
import TestimonialCard from "../components/TestimonialCard";
import Link from "next/link";

export default function page() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <section className="max-w-[80%] md:max-w-[60%] mx-auto text-center py-10">
        <small className="bg-yellow-300 rounded-lg px-6 py-1">
          Winter Training 2023
        </small>
        <h1 className="text-4xl md:text-5xl mb-4 font-semibold md:font-bold mt-3">
          Learn from industry experts and get hands-on experience
        </h1>
        <p className="mb-6">
          Tailored to the needs of civil and computer engineering professionals
          and engineering students
        </p>
        <Link href="#trainings" className="text-2xl font-bold hover:text-4xl">
          ↓
        </Link>
      </section>

      <section className="my-2 md:my-10 py-3 md:py-10" id="trainings">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-7">
          <div className="py-5 md:col-span-1">
            <h1 className="text-3xl md:text-5xl mb-4 font-normal md:font-medium">
              Explore
            </h1>
            <p className="mb-2 text-md">
              Trainings curated for working civil and computer engineering
              professionals and engineering stundents.
            </p>
          </div>
          <div className="md:col-span-2">
            <InternshipCard />
          </div>
        </div>
      </section>

      <section className="bg-slate-300 p-6 md:p-10 rounded-3xl my-10 md:my-15">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-7">
          <div className="py-5 md:col-span-2">
            <h1 className="text-4xl md:text-5xl mb-2 font-poppins font-normal md:font-medium">
              Wall of Love...
            </h1>
            <p className="mb-2 text-md">
              What other people has to say about the basics class..
            </p>
          </div>
          {testimonials.map((testimony, index) => (
            <TestimonialCard
              id={testimony.id}
              key={index}
              name={testimony.name}
              message={testimony.message}
              organization={testimony.organization}
              keywords={testimony.keywords}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
