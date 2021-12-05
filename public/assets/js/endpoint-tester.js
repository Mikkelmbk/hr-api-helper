mainEndpointOutputTestBtnElem.addEventListener("click", () => {
    if (mainEndpointConstructorDescriptionElem.textContent.includes("Recommendation")) {
        if (!mainEndpointOutputElem.querySelector(".ids")) {
            buttonFeedback(mainEndpointOutputTestBtnElem, "Missing required parameter", 3000, false);
            return;
        }
    }
    else if (mainEndpointConstructorDescriptionElem.textContent.includes("Search")) {
        if (!mainEndpointOutputElem.querySelector(".key") || !mainEndpointOutputElem.querySelector(".q")) {
            buttonFeedback(mainEndpointOutputTestBtnElem, "Missing required parameter", 3000, false);
            return;
        }
    }
    else if (mainEndpointConstructorDescriptionElem.textContent.includes("Tracking")) {
        if (!mainEndpointOutputElem.querySelector(".websiteUuid") || !mainEndpointOutputElem.querySelector(".hello_retail_id")) {
            buttonFeedback(mainEndpointOutputTestBtnElem, "Missing required parameter", 3000, false);
            return;
        }
    }
    buttonFeedback(mainEndpointOutputTestBtnElem, "Testing Endpoint", 1500);
    mainEndpointOutputTestBtnElem.disabled = true;
    mainEndpointOutputResponseWindowElem.classList.remove("failure-red-background");
    mainEndpointOutputResponseWindowElem.classList.remove("success-green-background");
    fetch(mainEndpointOutputElem.textContent)
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            if(mainEndpointConstructorDescriptionElem.textContent.includes("Search") || mainEndpointConstructorDescriptionElem.textContent.includes("Recommendation")){
                if (mainEndpointConstructorDescriptionElem.textContent.includes("Recommendation")) {
                    let recomResponse = Object.keys(data.result)[0];
                    data = data.result[recomResponse];
                }
                APIresponse = data;
                mainEndpointOutputResponseElemAdvancedSimpleReponseView.dataset.responseView = "simple";
                mainEndpointOutputResponseElemAdvancedSimpleReponseView.textContent = "Show advanced response";
                mainEndpointOutputResponseElemAdvancedSimpleReponseView.classList.remove("hidden");
                buildSimpleView(APIresponse);
            }
            else if(mainEndpointConstructorDescriptionElem.textContent.includes("Tracking")){
                APIresponse = data;
                mainEndpointOutputResponseElemAdvancedSimpleReponseView.classList.add("hidden");
                trackingUserIdview(APIresponse);
            }
        })
});
