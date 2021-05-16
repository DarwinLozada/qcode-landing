export default function useScrollTo() {
  // Check if server rendering was completed
  // ensuring the window object exists
  if (typeof window !== "undefined") {
    return (elementId) => {
      const elementToScroll = document.getElementById(elementId);
      elementToScroll.scrollIntoView({
        behavior: "smooth",
      });
    };
  }
}
