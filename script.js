const copyButton = document.querySelector("[data-copy-target]");
const backToTopButton = document.querySelector(".back-to-top");

if (copyButton) {
  copyButton.addEventListener("click", async () => {
    const targetId = copyButton.getAttribute("data-copy-target");
    const target = document.getElementById(targetId);

    if (!target) {
      return;
    }

    const originalLabel = copyButton.textContent;

    try {
      await navigator.clipboard.writeText(target.textContent.trim());
      copyButton.textContent = "IBAN copiato";
      copyButton.classList.add("is-copied");
    } catch {
      copyButton.textContent = "Copia non riuscita";
    }

    window.setTimeout(() => {
      copyButton.textContent = originalLabel;
      copyButton.classList.remove("is-copied");
    }, 1800);
  });
}

if (backToTopButton) {
  const toggleBackToTop = () => {
    const shouldShow = window.scrollY > 480;
    backToTopButton.classList.toggle("is-visible", shouldShow);
  };

  backToTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  window.addEventListener("scroll", toggleBackToTop, { passive: true });
  toggleBackToTop();
}
