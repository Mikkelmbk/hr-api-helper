let mainEndpointTestResponseWindowClearBtnElem = document.querySelector(".main__endpoint-test-response-window-clear-btn");

mainEndpointTestResponseWindowClearBtnElem.addEventListener("click",()=>{
    if(mainEndpointOutputResponseElem.textContent === "") return;
    mainEndpointOutputResponseElem.textContent = "";
    buttonFeedback(mainEndpointTestResponseWindowClearBtnElem, mainEndpointTestResponseWindowClearBtnElem.textContent);
});