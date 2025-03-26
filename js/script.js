
// {Videogame Developer}
document.addEventListener("DOMContentLoaded", () => {
    const timeline = gsap.timeline({ repeat: -1 });
    const chars = document.querySelectorAll(".text");

    gsap.set(chars, { color: "#6F0F07" });

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

// FUNCIONES VENTANA EMERGENTE
function openModal(title, description, videoSrc) {
    document.getElementById("modal-title").innerText = title;
    document.getElementById("modal-description").innerHTML = description;
    document.getElementById("modal-video").querySelector("source").src = videoSrc;
    document.getElementById("modal-video").load(); // Recargar el video
    document.getElementById("modal").style.display = "flex";
}
function closeModal() {
    document.getElementById('modal').style.display = 'none';
    document.getElementById("modal-video").pause();
}
