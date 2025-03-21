document.addEventListener("DOMContentLoaded", () => {
    const timeline = gsap.timeline({ repeat: -1 });
    const chars = document.querySelectorAll(".text");

    gsap.set(chars, { color: "#008db8" });

    timeline.from(chars, { opacity: 1, scale: 0, ease: "sine", delay: 0.25 })
        .to(chars, { 
            fontWeight: 900, // Usa fontWeight en lugar de --font-weight
            duration: 0.9,
            ease: "sine.inOut",
            stagger: { 
                yoyo: true,
                each: 0.1,
                repeat: -1
            }
        }, 1);
});
