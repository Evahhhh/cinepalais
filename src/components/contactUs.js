import React from "react";
import { Link } from "react-router-dom";

export default function ContactUs() {
    return (
<figure className="w-4/5 m-auto md:flex max-w-5xl bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
  <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
    <blockquote className="flex align-items">
      <p class="text-lg text-white font-bold w-4/5 max-w-5xl m-auto">
        Si vous avez des questions, contactez-nous
      </p>
      <Link to="/contact?type=contactUs">
                  <button className="text-black bg-white hover:bg-gray-700 hover:text-white rounded-lg px-3 py-2 text-sm font-medium"
                  >
                   Contact
                  </button>
                </Link>
    </blockquote>
   
  </div>
</figure>
    )
}