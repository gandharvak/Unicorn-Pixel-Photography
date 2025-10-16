import React, { useEffect } from 'react';

const InstagramEmbed = () => {
    useEffect(() => {
        // Inject script once
        const script = document.createElement('script');
        script.src = 'https://widgets.sociablekit.com/instagram-feed/widget.js';
        script.defer = true;
        document.body.appendChild(script);

        // Elements we want to remove
        const selectors = [
            '.sk_branding',
            '.instagram-user-root-container',
            '.sk-ig-bottom-btn-container',
        ];

        const interval = setInterval(() => {
            let allRemoved = true;

            selectors.forEach((selector) => {
                const el = document.querySelector(selector);
                if (el) {
                    el.remove();
                } else {
                    allRemoved = false;
                }
            });

            // If all targeted elements are gone, stop checking
            if (allRemoved) {
                clearInterval(interval);
            }
        }, 500);

        return () => {
            clearInterval(interval);
            document.body.removeChild(script);
        };
    }, []);

    return (
        <section className="md:container mx-auto">
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
