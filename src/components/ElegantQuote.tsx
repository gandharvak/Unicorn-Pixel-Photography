import React from "react";
import ElegantLine from "./ElegantLine";

const ElegantQuote = () => {
  return (
    <div className="container max-w-max mx-auto text-center px-4 py-12">
      {/* Decorative Divider */}
     <ElegantLine/>

      {/* Quote Text */}
      <blockquote className="text-2xl md:text-3xl italic text-[#111827] max-w-4xl mx-auto leading-relaxed">
        "Love is a journey, and every glance, smile, and embrace
        <br className="hidden md:block" />
        deserves to be captured in its most authentic light."
      </blockquote>
    </div>
  );
};

export default ElegantQuote;
