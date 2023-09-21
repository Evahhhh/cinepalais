import React from "react";
import { Link } from "react-router-dom";

export default function ContactUs() {
  return (
    <div className="mb-0 pb-24">
      <figure className="w-4/5 m-auto max-w-5xl bg-slate-100 rounded-xl p-4 md:p-0 dark:bg-slate-800">
        <div className="md:p-4 md:text-left flex justify-around flex-wrap">
          <blockquote className="flex align-items">
            <p class="text-lg text-white text-center pb-2 font-bold m-auto">
              Si vous avez des questions, contactez-nous
            </p>
          </blockquote>
          <Link to="/contact?type=contactUs">
            <button className="text-black bg-white hover:bg-gray-700 hover:text-white rounded-lg px-3 py-2 m-2 text-sm font-medium">
              Contact
            </button>
          </Link>
        </div>
      </figure>
    </div>
  );
}
