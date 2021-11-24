mainEndpointOutputClipboardCopyBtnElem.addEventListener("click", () => {
    navigator.clipboard.writeText(mainEndpointOutputElem.textContent);
    mainEndpointOutputClipboardCopyBtnElem.classList.add("success-green-background");
    mainEndpointOutputClipboardCopyBtnElem.innerHTML = "Copied";
    mainEndpointOutputClipboardCopyBtnElem.disabled = true;
    setTimeout(() => {
        mainEndpointOutputClipboardCopyBtnElem.classList.remove("success-green-background");
        mainEndpointOutputClipboardCopyBtnElem.innerHTML = "Copy to Clipboard";
        mainEndpointOutputClipboardCopyBtnElem.disabled = false;
    }, 2000);
});