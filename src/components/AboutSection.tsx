import ElegantLine from './ElegantLine';

const AboutSection = () => {
  return (
    <section className="py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="text-[#333]">
          <h2 className="text-3xl text-center md:text-4xl mb-6">
            TURNING REAL EMOTIONS INTO<br />
            <span className="tracking-wide">EVERLASTING ART</span>
          </h2>

         <ElegantLine/>

          <p className="mb-4 text-lg leading-relaxed">
            <em>Welcome to <strong>Unicorn Pixel Photography</strong></em> where love comes to life through every frame.
            We believe that every couple’s story is one of a kind, and our passion lies in capturing those fleeting,
            emotional, and unforgettable moments that make your journey truly yours.
          </p>

          <p className="mb-4 text-lg leading-relaxed">
            With a blend of artistry and authenticity, we aim to preserve the genuine emotions, the unscripted glances,
            and the quiet magic that unfold throughout your special day. Whether it’s a grand celebration or a tender exchange,
            we focus on creating timeless imagery that resonates with your love and personality.
          </p>

          <p className="mb-4 text-lg leading-relaxed">
            Explore our gallery of love stories — a collection of real moments and beautiful connections, each reflecting the joy
            and soul of the couples we’ve had the honor to photograph.
          </p>

          <p className="text-lg leading-relaxed">
            Let your story be told through our lens where every photograph is not just an image, but a heartfelt memory captured forever.
          </p>
        </div>

        {/* Right Image */}
        <div className="w-full h-full">
          <img
            src="https://blogger.googleusercontent.com/img/a/AVvXsEgqZr5ukL3gA7VnFz9Tm5dGo6m0qvU5cGhv6aQu3XrC5gn1Nre3VL33eW0klEXf7jke6jszuAA9ZpOv3vNGbd9gTsJtJ0Ph9g8EdkbLSNMRYItM5E7MHBruNDoNWwikSqEASMydOEg_chzWpXNCWH15AZYL0QFFQWt8B4QWepGJdxgExWdOP7yDSolbxDzZ"
            alt="Wedding couple"
            className="w-full h-full rounded-sm object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
