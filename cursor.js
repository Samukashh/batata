document.addEventListener("DOMContentLoaded", () => {
    // Só ativa em dispositivos com mouse
    if (!window.matchMedia("(pointer: fine)").matches) return;
  
    const cursor = document.querySelector(".custom-cursor");
    if (!cursor) return;
  
    document.addEventListener("mousemove", (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    });
  
    document.querySelectorAll("a, button").forEach((el) => {
      el.addEventListener("mouseenter", () => {
        cursor.style.transform = "translate(-50%, -50%) scale(1.8)";
        cursor.style.background = "rgba(63,163,77,0.2)";
      });
  
      el.addEventListener("mouseleave", () => {
        cursor.style.transform = "translate(-50%, -50%) scale(1)";
        cursor.style.background = "transparent";
      });
    });
  });
  