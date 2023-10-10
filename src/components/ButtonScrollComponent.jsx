import { useEffect } from "react";

function ButtonScrollComponent() {
  useEffect(() => {
    const scrollToTopButton = document.getElementById("scrollToTop");
    scrollToTopButton.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
      ) {
        scrollToTopButton.style.display = "block";
      } else {
        scrollToTopButton.style.display = "none";
      }
    });
  }, []);

  return (
    <div>
      <button
        id="scrollToTop"
        className="fixed bottom-10 right-10 bg-orange-500 hover:bg-orange-400 text-black px-4 py-2 rounded-full shadow z-50"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75"
          />
        </svg>
      </button>
    </div>
  );
}

export default ButtonScrollComponent;
