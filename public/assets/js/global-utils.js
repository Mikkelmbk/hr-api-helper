let mainEndpointConstructorOuterRecomContainerElem = document.querySelector(".main__endpoint-constructor-outer-recom-container"); // nav.js, constructor-builder.js,
let mainEndpointConstructorOuterSearchContainerElem = document.querySelector(".main__endpoint-constructor-outer-search-container"); // nav.js, constructor-builder.js,
let mainEndpointOutputClipboardCopyBtnElem = document.querySelector(".main__endpoint-output-clipboard-copy"); // copy-to-clipboard.js,
let mainEndpointOutputElem = document.querySelector(".main__endpoint-output"); // nav.js, copy-to-clipboard.js, endpoint-builder.js,
let mainEndpointConstructorDescriptionElem = document.querySelector(".main__endpoint-constructor-description"); // nav.js, endpoint-tester.js
let mainEndpointOutputTestBtnElem = document.querySelector(".main__endpoint-output-test"); // endpoint-tester.js
let mainEndpointOutputResponseWindowElem = document.querySelector(".main__endpoint-test-response-window-description"); // endpoint-tester.js
let mainEndpointOutputResponseElem = document.querySelector(".main__endpoint-test-response-output"); // endpoint-tester.js


function buttonFeedback(button, text, time, status){
    // if status is not provided or provided as true then show background color as green, otherwise show it as red.
    button.disabled = true;
    let bgColor = status == undefined || status == true ? "success-green-background" : "failure-red-background";
    let defaultText = button.textContent;
    let timer = time || 1500;
    button.classList.add(bgColor);
    button.innerHTML = text;
    setTimeout(() => {
        button.disabled = false;
        button.classList.remove(bgColor);
        button.innerHTML = defaultText;
    }, timer);
}