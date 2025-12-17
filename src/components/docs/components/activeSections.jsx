import { useEffect, useState } from "react";

export default function useActiveSection() {
  const [activeId, setActiveId] = useState(null);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "0px 0px -90% 0px", // focus zone: top 20% of viewport
        threshold: 0
      }
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  return activeId;
}
