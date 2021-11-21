copyToClipboardElem.addEventListener("click", () => {
    navigator.clipboard.writeText(outputElem.textContent);
    copyToClipboardElem.classList.add("success-green-background");
    copyToClipboardElem.innerHTML = "Copied";
    copyToClipboardElem.disabled = true;
    setTimeout(() => {
        copyToClipboardElem.classList.remove("success-green-background");
        copyToClipboardElem.innerHTML = "Copy to Clipboard";
        copyToClipboardElem.disabled = false;
    }, 2000);
});