document.querySelectorAll(".booth-image-toggle").forEach((button) => {
  const image = document.getElementById(button.getAttribute("aria-controls"));

  if (!image) return;

  button.addEventListener("click", () => {
    const showingGuide = button.getAttribute("aria-pressed") === "true";

    image.src = showingGuide ? button.dataset.kidsSrc : button.dataset.guideSrc;
    image.alt = showingGuide ? button.dataset.kidsAlt : button.dataset.guideAlt;
    button.textContent = showingGuide ? "しくみを見る" : "子ども向けに戻す";
    button.setAttribute("aria-pressed", String(!showingGuide));
  });
});
