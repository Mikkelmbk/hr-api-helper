let mainEndpointConstructorOuterRecomContainerElem = document.querySelector(".main__endpoint-constructor-outer-recom-container"); // nav.js, constructor-builder.js,
let mainEndpointConstructorOuterSearchContainerElem = document.querySelector(".main__endpoint-constructor-outer-search-container"); // nav.js, constructor-builder.js,
let mainEndpointOutputClipboardCopyBtnElem = document.querySelector(".main__endpoint-output-clipboard-copy"); // copy-to-clipboard.js,
let mainEndpointOutputElem = document.querySelector(".main__endpoint-output"); // nav.js, copy-to-clipboard.js, endpoint-builder.js,
let mainEndpointConstructorDescriptionElem = document.querySelector(".main__endpoint-constructor-description"); // nav.js, endpoint-tester.js
let mainEndpointOutputTestBtnElem = document.querySelector(".main__endpoint-output-test"); // endpoint-tester.js
let mainEndpointOutputResponseWindowElem = document.querySelector(".main__endpoint-test-response-window-description"); // endpoint-tester.js
let mainEndpointOutputResponseElem = document.querySelector(".main__endpoint-test-response-output"); // endpoint-tester.js


function buttonFeedback(button, text){
    let defaultText = button.textContent;
    button.classList.add("success-green-background");
    button.innerHTML = text;
    button.disabled = true;
    setTimeout(() => {
        button.classList.remove("success-green-background");
        button.innerHTML = defaultText;
        button.disabled = false;
    }, 1500);
}