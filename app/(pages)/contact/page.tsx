import React from "react";

export default function Contact() {
  return (
    <div className="max-w-7xl mx-auto px-5 py-6 min-h-[70vh]">
      <h1 className="text-3xl md:text-5xl mb-6 md:mb-10 font-normal md:font-bold text-center">
        Contact Us
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-4 md:gap-6">
        <div className="col-span-1 rounded-3xl grid gap-6 mb-6 md:mb-0">
          <div className="bg-slate-100 rounded-3xl p-6">
            <p>
              <b>Email: </b>contact@balkapso.com
            </p>
          </div>
          <div className="bg-slate-100 rounded-3xl p-6">
            <p>
              <b>Phone: </b>+91 7076219337
            </p>
          </div>
        </div>
        <div className="col-span-3 rounded-3xl bg-slate-100 p-10">
          <p className="my-4">
            Thank you for visiting the BALKAPSO Training & Internship page! If
            you have any questions or comments, we would love to hear from you.
          </p>

          <p className="my-4">
            We strive to respond to all inquiries within one business day. Thank you for choosing us. We look forward to serving you!</p>
        </div>
      </div>

      {/* <div className="rounded-3xl p-10 mb-6 md:mb-10 bg-slate-100">
        <div className="grid grid-cols-4 bg-red-400">
          <div>conact</div>
          <div>
            <p>hello</p>
          </div>
        </div>
      </div> */}
    </div>
  );
}
