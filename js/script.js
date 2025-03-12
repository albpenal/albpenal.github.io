document.addEventListener("DOMContentLoaded", () => {
    const timeline = gsap.timeline({ repeat: -1 });
    const chars = document.querySelectorAll(".text");

    gsap.set(chars, { color: "#005000" });

    timeline.from(chars, { opacity: 1, scale: 1, ease: "sine", delay: 0 })
        .to(chars, { 
            fontWeight: 900,
            duration: 2.2,
            ease: "sine.inOut",
            stagger: { 
                yoyo: true,
                each: 0.1,
                repeat: -1
            }
        }, 1);
});
