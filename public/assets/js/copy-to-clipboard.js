mainEndpointOutputClipboardCopyBtnElem.addEventListener("click", () => {
    navigator.clipboard.writeText(mainEndpointOutputElem.textContent);
    buttonFeedback(mainEndpointOutputClipboardCopyBtnElem, "Copied");
});