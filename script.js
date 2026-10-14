// Lazy YouTube: show the thumbnail, load the player only on click.
document.querySelectorAll(".yt[data-id]").forEach((el) => {
  const id = el.dataset.id;
  el.style.backgroundImage = `url(https://i.ytimg.com/vi/${id}/hqdefault.jpg)`;
  el.addEventListener("click", () => {
    const iframe = document.createElement("iframe");
    iframe.src = `https://www.youtube-nocookie.com/embed/${id}?autoplay=1`;
    iframe.title = el.getAttribute("aria-label") || "YouTube video";
    iframe.allow = "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen";
    iframe.referrerPolicy = "strict-origin-when-cross-origin";
    iframe.allowFullscreen = true;
    el.replaceChildren(iframe);
    el.classList.add("playing");
  }, { once: true });
});
