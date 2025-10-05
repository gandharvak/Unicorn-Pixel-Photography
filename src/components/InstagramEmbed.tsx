import React, { useEffect } from 'react';

const InstagramEmbed = () => {
    useEffect(() => {
        // Dynamically load the widget script (loads once)
        const script = document.createElement('script');
        script.src = 'https://widgets.sociablekit.com/instagram-feed/widget.js';
        script.defer = true;
        document.body.appendChild(script);

        // Optional: Clean up script on unmount
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <section className="container mx-auto">
            <div className="text-center mb-16">
                <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6">
                    As Seen on Instagram
                </h2>
                <div className="w-24 h-1 bg-primary mx-auto mt-6"></div>
            </div>
            <div className="sk-instagram-feed" data-embed-id="25604928"></div>
        </section>
    );
};

export default InstagramEmbed;
