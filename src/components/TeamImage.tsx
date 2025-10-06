import { useEffect, useState } from "react";

const TeamImage = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768); // md breakpoint
        handleResize(); // initial check
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const links = {
        mobile: "https://blogger.googleusercontent.com/img/a/AVvXsEimQmnQg_J9urDmgT3dkF6pJrrHYSfgKmtr1Q32fySNryMSCaf-j6gFZyx_fpS4Hd4gkTmolu2RScl2p2Mde5bjiYnE19VqfzIc64kTt0OqFT86TZJtRE61gFEASzGL4kiWKYJ0ztLnlQwVMAHkGY65MA3ckld_oEAe5y5hjd52zRLiOzo8X8AGozu7cpvI",
        others: "https://blogger.googleusercontent.com/img/a/AVvXsEienJWl0i7BCflo4BR884KGPmabs50VLs1g4Fl7NVnwXlj2W2XXwwGFk0DX9L7uSZYjpOFEMw6z3Knh6ROKW8ZaGOzmHYFXFaGLDLzDlLnH34Db-sdXALRXo5DLUGimFTTQrLz6t1pUSUPUbI88yztFnxLbHsCMnKpqC4t5-xwF6YTDNdW0sv0NkiRyUm7X"
    }

    return (
        <div className="relative h-dvh overflow-hidden">
            <div
                className={`absolute inset-0 transition-opacity duration-1000 opacity-100`}
            >
                <img
                    src={isMobile ? links.mobile : links.others}
                    alt="Team Image"
                    className="w-full h-full object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-b ${isMobile? "from-black/40" : "from-transparent"} via-transparent to-black`} />

                {/* Content */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-center px-4 w-full">
                    <div className="max-w-4xl text-white mx-auto">
                        <h1 className="font-playfair text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
                            Excellence in Every Frame
                        </h1>
                        <p className="text-lg md:text-xl lg:text-2xl mb-6 opacity-90 animate-fade-in">
                            With creativity, professionalism, and a deep respect for our clients' stories, we continue to strive for excellence in every frame we take.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TeamImage