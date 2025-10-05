import React from 'react';
import awardLogo from '@/assets/award/weddingsutra.png'; 
const AwardSection = () => {
  return (
    <section className="bg-[#fefcf9] py-16 px-6 text-center">
      <div className="max-w-4xl mx-auto">
        {/* Award Logo */}
        <img
          src={awardLogo}
          alt="WeddingSutra Photography Awards Nominee"
          className="mx-auto w-52 md:w-64 mb-10"
        />

        {/* Text Content */}
        <p className="text-lg md:text-xl text-gray-800 font-light leading-relaxed">
          <strong className="font-semibold text-black">Team Unicorn Pixel Photography</strong> are so glad and thrilled
          to share that we have been nominated in the <strong>'Prewedding Photographer of the Year'</strong> category at the prestigious <strong>"WeddingSutra Photography Awards 2024"</strong>.
          <br /><br />
          From our beginning, we've worked so hard and passionately, pouring our heart and soul into every photoshoot.
          As artists, we've always admired Award Ceremonies in various art forms, and the desire to hold that trophy has been
          a strong dream for us.
        </p>
      </div>
    </section>
  );
};

export default AwardSection;
