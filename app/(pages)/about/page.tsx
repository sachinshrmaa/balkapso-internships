import React from "react";

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-5 py-6 min-h-[70vh]">
      <h1 className="text-3xl md:text-5xl mb-5 md:mb-10 font-normal md:font-bold text-center">
        About Us
      </h1>

      <div className="rounded-3xl p-10 mb-6 md:mb-10 bg-slate-100">
        <p>
          At BALKAPSO Learning, we offer comprehensive courses that go beyond
          just teaching software, but also provide a deeper understanding of the
          engineering profession. Our approach is to make you understand your
          profession because we believe once you understand who you are,
          everything becomes easy to understand.
        </p>
      </div>

      <section className="rounded-3xl md:mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-2xl p-6 md:p-12 bg-slate-100">
            <h1 className="text-xl md:text-3xl md:mb-5 font-semibold mb-2">
              Our Mission
            </h1>
            <p className="mb-3">
              At BALKAPSO Learning, our mission is to serve the society through
              our profession by providing high-quality training to engineers and
              bridging the gap between academics and practice. We believe that
              by empowering engineers with the skills and knowledge they need to
              excel, we can contribute to the betterment of society and create a
              more sustainable future.
            </p>
            <p>
              Our goal is to connect engineers from diverse backgrounds and
              experiences to foster a community of continuous learning and
              growth.
            </p>
          </div>
          <div className="rounded-2xl p-6 md:p-12 bg-slate-100">
            <h1 className="text-xl md:text-3xl md:mb-5 font-semibold mb-2">
              Our Vision
            </h1>
            <p className="mb-3">
              Our vision at BALKAPSO Learning is to create a world where
              engineers are equipped with the necessary tools to solve complex
              challenges in a sustainable and innovative way. We envision a
              future where engineering concepts are applied using a design
              thinking approach, resulting in solutions that are not only
              technically sound but also socially and environmentally
              responsible.
            </p>
            <p>
              With our training programs, we aim to develop a new generation of
              engineers who are capable of adapting to the evolving needs of
              society and who can contribute to building a better world.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
