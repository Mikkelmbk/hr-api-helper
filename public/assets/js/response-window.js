let mainEndpointTestResponseWindowClearBtnElem = document.querySelector(".main__endpoint-test-response-window-clear-btn");

mainEndpointTestResponseWindowClearBtnElem.addEventListener("click",()=>{
    mainEndpointOutputResponseWindowElem.classList.remove("success-green-background");
    mainEndpointOutputResponseWindowElem.classList.remove("failure-red-background");
    mainEndpointOutputResponseElem.textContent = "";
    buttonFeedback(mainEndpointTestResponseWindowClearBtnElem, mainEndpointTestResponseWindowClearBtnElem.textContent, 2000);
});