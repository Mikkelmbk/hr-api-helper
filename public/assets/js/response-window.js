let mainEndpointTestResponseWindowClearBtnElem = document.querySelector(".main__endpoint-test-response-window-clear-btn");

mainEndpointTestResponseWindowClearBtnElem.addEventListener("click",()=>{
    mainEndpointOutputResponseElemAdvancedSimpleReponseView.classList.add("hidden");
    mainEndpointOutputResponseWindowElem.classList.remove("success-green-background");
    mainEndpointOutputResponseWindowElem.classList.remove("failure-red-background");
    mainEndpointOutputResponseElem.textContent = "";
    buttonFeedback(mainEndpointTestResponseWindowClearBtnElem, mainEndpointTestResponseWindowClearBtnElem.textContent, 800);
});

mainEndpointOutputResponseElemAdvancedSimpleReponseView.addEventListener("click",(e)=>{
    mainEndpointOutputResponseElem.textContent = "";
    if(e.target.dataset.responseView === "simple"){
        e.target.dataset.responseView = "advanced";
        e.target.textContent = "Show simple response";
        buttonFeedback(e.target, "Show simple response", 300);
        buildAdvancedView(APIresponse);
    }
    else{
        e.target.dataset.responseView = "simple";
        e.target.textContent = "Show advanced response";
        buttonFeedback(e.target, "Show advanced response", 300);
        buildSimpleView(APIresponse);
    }
})