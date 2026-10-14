"use strict";

const dialog = document.querySelector("#image-dialog");
const dialogImage = document.querySelector("#dialog-image");
const dialogTitle = document.querySelector("#dialog-title");

if (dialog && typeof dialog.showModal === "function") {
  document.querySelectorAll(".figure-link").forEach((link) => {
    link.addEventListener("click", (event) => {
      if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      dialogImage.src = link.href;
      dialogImage.alt = link.querySelector("img").alt;
      dialogTitle.textContent = link.dataset.figureTitle;
      dialog.showModal();
      document.body.classList.add("dialog-open");
    });
  });
  dialog.querySelector(".dialog-close").addEventListener("click", () => dialog.close());
  dialog.addEventListener("click", (event) => {
    if (event.target !== dialog) return;
    const bounds = dialog.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right ||
        event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
  });
  dialog.addEventListener("close", () => document.body.classList.remove("dialog-open"));
}

const copyButton = document.querySelector("#copy-citation");
const copyStatus = document.querySelector("#copy-status");

copyButton.addEventListener("click", async () => {
  const citation = document.querySelector("#bibtex").textContent;
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(citation);
    } else {
      const field = document.createElement("textarea");
      field.value = citation;
      field.style.position = "fixed";
      field.style.opacity = "0";
      document.body.appendChild(field);
      field.select();
      const succeeded = document.execCommand("copy");
      field.remove();
      if (!succeeded) throw new Error("Clipboard unavailable");
    }
    copyButton.textContent = "Copied!";
    copyStatus.textContent = "Citation copied to clipboard.";
    setTimeout(() => { copyButton.textContent = "Copy citation"; }, 2000);
  } catch {
    copyStatus.textContent = "Please select and copy the citation text.";
    copyButton.textContent = "Select text to copy";
    setTimeout(() => { copyButton.textContent = "Copy citation"; }, 3000);
  }
});
