import { useEffect } from "react";

const useObserver = (selector, animationClass) => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(animationClass);
          observer.unobserve(entry.target); // Dejar de observar después de activar la animación
        }
      });
    }, { threshold: 0.3 });

    const elements = document.querySelectorAll(selector);
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [selector, animationClass]);
};

export default useObserver;

// intentar animar la pagina al cargar la pagina, hacer click en la barra de navegacion y/o al baja hacia la pagina