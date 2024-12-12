

//Optimized Code
const imgElements = [
  {
    img: document.querySelector("#first"),
    id: "img1",
    spanClass: ".span1",
  },
  {
    img: document.querySelector("#second"),
    id: "img2",
    spanClass: ".span2",
  },
  {
    img: document.querySelector("#third"),
    id: "img3",
    spanClass: ".span3",
  },
];

const updateLayout = (activeIndex) => {
  imgElements.forEach((element, index) => {
    const isActive = index === activeIndex;

    // Adjust scale of the image container
    gsap.from(`#${element.id}`, {
      scale: isActive ? 1.2 : 1,
      duration: 0.4,
      ease: "power2.out",
    });

    // Adjust widths
    gsap.to(element.img, {
      width: isActive ? "50%" : "25%",
    });

    // Set opacity of the span
    const spanElement = document.querySelector(`${element.spanClass}`);
    if (spanElement) {
      gsap.to(spanElement, {
        opacity: isActive ? 1 : 0,
      });
    }
  });
};

// Add click event listeners
imgElements.forEach((element, index) => {
  element.img.addEventListener("click", () => {
    updateLayout(index);
  });
});
