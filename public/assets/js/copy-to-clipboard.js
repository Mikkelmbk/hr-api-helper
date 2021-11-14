copyToClipboardElem.addEventListener("click", () => {
    navigator.clipboard.writeText(outputElem.innerHTML);
    copyToClipboardElem.classList.add("success-green-background");
    copyToClipboardElem.innerHTML = "Copied";
    setTimeout(() => {
        copyToClipboardElem.classList.remove("success-green-background");
        copyToClipboardElem.innerHTML = "Copy to Clipboard";
    }, 2500);
});