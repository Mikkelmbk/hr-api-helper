let mainEndpointConstructorContainerElems = document.querySelectorAll(".main__endpoint-constructor-container");
let mainEndpointConstructorInputProductBoxIdRecomElem = document.querySelector("input[data-param='ids']");
let mainEndpointConstructorLabelProductBoxIdRecomElem = document.querySelector("label[data-param='ids']");


mainEndpointConstructorContainerElems.forEach((item) => {
    let btn = item.querySelector(".main__endpoint-constructor-button");
    let input = item.querySelector(".main__endpoint-constructor-input");
    let label = item.querySelector(".main__endpoint-constructor-label");

    // Recommendation events.
    if (btn.dataset.param === "trackingUserId") {
        btn.addEventListener("click", () => {
            if(!validateNotEmpty(input.value, label)) return;
            if(!validateNoSpecialCharacters(input.value,label)) return;
            if(!validateNoDuplicates(input, label)) return;
            buttonFeedback(btn, btn.textContent, 1000);
            addToEndpoint(`&${input.dataset.param}=${removeWhitespace(input.value)}`, input.dataset.param);
        })
    }
    else if (btn.dataset.param === "ids") {
        btn.addEventListener("click", () => {
            if(!validateNotEmpty(input.value, label)) return;
            if(!validateRecommendationBoxKey(input.value,label)) return;
            if(!validateNoDuplicates(input, label)) return;
            buttonFeedback(btn, btn.textContent, 1000);
            addToEndpoint(`&${input.dataset.param}=${removeWhitespace(input.value)}`, input.dataset.param);
        })
    }
    else if (btn.dataset.param === "hierarchies") {
        btn.addEventListener("click", () => {
            if(!validateNotEmpty(input.value, label)) return;
            if(!validateNotEmpty(mainEndpointConstructorInputProductBoxIdRecomElem.value, mainEndpointConstructorLabelProductBoxIdRecomElem)) return;
            if(!validateRecommendationBoxKey(mainEndpointConstructorInputProductBoxIdRecomElem.value,mainEndpointConstructorLabelProductBoxIdRecomElem)) return;
            let hierarchyIndexOne = 0;
            let preText = `&crawledData[${removeWhitespace(recommendationBoxKeyPicker(mainEndpointConstructorInputProductBoxIdRecomElem.value, 0))}][${btn.dataset.param}][${hierarchyIndexOne}][]=${removeWhitespace(input.value)}`;
            buttonFeedback(btn, btn.textContent, 1000);
            addToEndpoint(preText, input.dataset.param);
        });
    }
    else if (btn.dataset.param === "crawledData") {
        btn.addEventListener("click", () => {
            if(!validateNotEmpty(input.value, label)) return;
            if(!validateEqualSign(input.value, label)) return;
            if(!validateNotEmpty(mainEndpointConstructorInputProductBoxIdRecomElem.value, mainEndpointConstructorLabelProductBoxIdRecomElem)) return;
            let formattedValue = input.value.split("=");
            console.log(formattedValue);
            let preText = `&crawledData[${removeWhitespace(recommendationBoxKeyPicker(mainEndpointConstructorInputProductBoxIdRecomElem.value, 0))}][${removeWhitespace(formattedValue.shift())}]=${removeWhitespace(formattedValue.pop())}`;
            buttonFeedback(btn, btn.textContent, 1000);
            addToEndpoint(preText, input.dataset.param);
        })
    }
    else if(btn.dataset.param === "extraData-crawledData"){
        btn.addEventListener("click", () => {
            if(!validateNotEmpty(input.value, label)) return;
            if(!validateEqualSign(input.value, label)) return;
            if(!validateNotEmpty(mainEndpointConstructorInputProductBoxIdRecomElem.value, mainEndpointConstructorLabelProductBoxIdRecomElem)) return;
            let formattedValue = input.value.split("=");
            let preText = `&crawledData[${removeWhitespace(recommendationBoxKeyPicker(mainEndpointConstructorInputProductBoxIdRecomElem.value, 0))}][extraData][${removeWhitespace(formattedValue.shift())}][]=${removeWhitespace(formattedValue.pop())}`;
            buttonFeedback(btn, btn.textContent, 1000);
            addToEndpoint(preText, input.dataset.param);
        })
    }
    else if(btn.dataset.param === "extraDataList-crawledData"){
        btn.addEventListener("click", () => {
            if(!validateNotEmpty(input.value, label)) return;
            if(!validateEqualSign(input.value, label)) return;
            if(!validateNotEmpty(mainEndpointConstructorInputProductBoxIdRecomElem.value, mainEndpointConstructorLabelProductBoxIdRecomElem)) return;
            let formattedValue = input.value.split("=");
            let preText = `&crawledData[${removeWhitespace(recommendationBoxKeyPicker(mainEndpointConstructorInputProductBoxIdRecomElem.value, 0))}][extraDataList][${removeWhitespace(formattedValue.shift())}][]=${removeWhitespace(formattedValue.pop())}`;
            buttonFeedback(btn, btn.textContent, 1000);
            addToEndpoint(preText, input.dataset.param);
        })
    }
    // Search events.
    else if(btn.dataset.param === "product_count" || btn.dataset.param === "product_start"){
        btn.addEventListener("click", () => {
            if(!validateNotEmpty(input.value, label)) return;
            if(!validateNumbers(input.value, label)) return;
            if(!validateNoDuplicates(input, label)) return;
            buttonFeedback(btn, btn.textContent, 1000);
            addToEndpoint(`&${input.dataset.param}=${removeWhitespace(input.value)}`, input.dataset.param);
        });
    }
    else if(btn.dataset.param === "filters[]"){
        btn.addEventListener("click", () => {
            if(!validateNotEmpty(input.value, label)) return;
            if(!validateColonSign(input.value, label)) return;
            buttonFeedback(btn, btn.textContent, 1000);
            addToEndpoint(`&${input.dataset.param}=${removeWhitespace(input.value)}`, input.dataset.param);
        });
    }
    else {
        btn.addEventListener("click", () => {
            if(!validateNotEmpty(input.value, label)) return;
            if(!validateNoDuplicates(input, label)) return;
            buttonFeedback(btn, btn.textContent, 1000);
            addToEndpoint(`&${input.dataset.param}=${removeWhitespace(input.value)}`, input.dataset.param);
        });
    }

});


function addToEndpoint(addition, param) {
    let endpointIdentifier = document.createElement('span');
    endpointIdentifier.classList.add(param);
    endpointIdentifier.classList.add("main__endpoint-output--addition");
    endpointIdentifier.innerHTML = addition;
    mainEndpointOutputElem.appendChild(endpointIdentifier);
    endpointIdentifier.addEventListener("click",(e)=>{
        endpointIdentifier.remove();
    });
};

function removeWhitespace(input){
    return input.replace(/\s/g,"%20");
}

function validateNotEmpty(input, label) {
    if (input == "") {
        console.log("empty input");
        buttonFeedback(label, "Cannot be empty", 3000, false);
        return false;
    }
    label.classList.remove("failure-red-background");
    return true;
};

function validateEqualSign(input, label) {
    if (!input.match(/^[A-z]*=[A-z0-9\s]+$/g)) {
        console.log("Missing equal sign");
        buttonFeedback(label, "Must contain values on both sides of an equal sign", 3000, false);
        return false;
    }
    label.classList.remove("failure-red-background");
    return true;
};
function validateColonSign(input, label) {
    if (!input.match(/^[A-z]*:[A-z0-9\s]+(,[0-9]+|$)/g)) {
        console.log("Missing colon sign");
        buttonFeedback(label, "Must contain values on both sides of a colon sign", 3000, false);
        return false;
    }
    label.classList.remove("failure-red-background");
    return true;
};

function validateNumbers(input, label){
    if (isNaN(input)) {
        console.log("Must be a number");
        buttonFeedback(label, "Must only contain numbers", 3000, false);
        return false;
    }
    label.classList.remove("failure-red-background");
    return true;
}

function validateRecommendationBoxKey(input,label){
    if(!input.match(/^[A-z0-9]+$/g) && !input.match(/^[A-z0-9]+,[A-z0-9]+$/)){
        console.log("Incorrect formatting");
        buttonFeedback(label, "Box id's must be separated by a comma", 3000, false);
        return false;
    }
    label.classList.remove("failure-red-background");
    return true;
}

function validateNoSpecialCharacters(input,label){
    if(!input.match(/^[A-z0-9]+$/)){
        console.log("Special characters present");
        buttonFeedback(label, "No special characters allowed", 3000, false);
        return false;
    }
    label.classList.remove("failure-red-background");
    return true;
}

function validateNoDuplicates(input,label){
    if(mainEndpointOutputElem.textContent.includes(input.dataset.param)){
        console.log(`${input.dataset.param} already exists.`);
        buttonFeedback(label, "No duplicate values allowed", 3000, false);
        return false;
    }
    label.classList.remove("failure-red-background");
    return true;
}

function recommendationBoxKeyPicker(ids, picked){
    let splitIds = ids.split(",");
    if(splitIds[picked] != "undefined"){
        return splitIds[picked];
    }
    else{
        return splitIds[0];
    }
}
