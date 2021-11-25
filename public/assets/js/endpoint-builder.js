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
            registerFeedback(btn);
            addToEndpoint(`&${input.dataset.param}=${removeWhitespace(input.value)}`);
        })
    }
    else if (btn.dataset.param === "ids") {
        btn.addEventListener("click", () => {
            if(!validateNotEmpty(input.value, label)) return;
            if(!validateRecommendationBoxKey(input.value,label)) return;
            if(!validateNoDuplicates(input, label)) return;
            registerFeedback(btn);
            addToEndpoint(`&${input.dataset.param}=${removeWhitespace(input.value)}`);
        })
    }
    else if (btn.dataset.param === "hierarchies") {
        btn.addEventListener("click", () => {
            if(!validateNotEmpty(input.value, label)) return;
            if(!validateNotEmpty(mainEndpointConstructorInputProductBoxIdRecomElem.value, mainEndpointConstructorLabelProductBoxIdRecomElem)) return;
            if(!validateRecommendationBoxKey(mainEndpointConstructorInputProductBoxIdRecomElem.value,mainEndpointConstructorLabelProductBoxIdRecomElem)) return;
            let hierarchyIndexOne = 0;
            let preText = `&crawledData[${removeWhitespace(recommendationBoxKeyPicker(mainEndpointConstructorInputProductBoxIdRecomElem.value, 0))}][${btn.dataset.param}][${hierarchyIndexOne}][]=${removeWhitespace(input.value)}`;
            registerFeedback(btn);
            addToEndpoint(preText);
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
            registerFeedback(btn);
            addToEndpoint(preText);
        })
    }
    else if(btn.dataset.param === "extraData-crawledData"){
        btn.addEventListener("click", () => {
            if(!validateNotEmpty(input.value, label)) return;
            if(!validateEqualSign(input.value, label)) return;
            if(!validateNotEmpty(mainEndpointConstructorInputProductBoxIdRecomElem.value, mainEndpointConstructorLabelProductBoxIdRecomElem)) return;
            let formattedValue = input.value.split("=");
            let preText = `&crawledData[${removeWhitespace(recommendationBoxKeyPicker(mainEndpointConstructorInputProductBoxIdRecomElem.value, 0))}][extraData][${removeWhitespace(formattedValue.shift())}][]=${removeWhitespace(formattedValue.pop())}`;
            registerFeedback(btn);
            addToEndpoint(preText);
        })
    }
    else if(btn.dataset.param === "extraDataList-crawledData"){
        btn.addEventListener("click", () => {
            if(!validateNotEmpty(input.value, label)) return;
            if(!validateEqualSign(input.value, label)) return;
            if(!validateNotEmpty(mainEndpointConstructorInputProductBoxIdRecomElem.value, mainEndpointConstructorLabelProductBoxIdRecomElem)) return;
            let formattedValue = input.value.split("=");
            let preText = `&crawledData[${removeWhitespace(recommendationBoxKeyPicker(mainEndpointConstructorInputProductBoxIdRecomElem.value, 0))}][extraDataList][${removeWhitespace(formattedValue.shift())}][]=${removeWhitespace(formattedValue.pop())}`;
            registerFeedback(btn);
            addToEndpoint(preText);
        })
    }
    // Search events.
    else if(btn.dataset.param === "product_count" || btn.dataset.param === "product_start"){
        btn.addEventListener("click", () => {
            if(!validateNotEmpty(input.value, label)) return;
            if(!validateNumbers(input.value, label)) return;
            if(!validateNoDuplicates(input, label)) return;
            registerFeedback(btn);
            addToEndpoint(`&${input.dataset.param}=${removeWhitespace(input.value)}`);
        });
    }
    else if(btn.dataset.param === "filters[]"){
        btn.addEventListener("click", () => {
            if(!validateNotEmpty(input.value, label)) return;
            if(!validateColonSign(input.value, label)) return;
            registerFeedback(btn);
            addToEndpoint(`&${input.dataset.param}=${removeWhitespace(input.value)}`);
        });
    }
    else {
        btn.addEventListener("click", () => {
            if(!validateNotEmpty(input.value, label)) return;
            if(!validateNoDuplicates(input, label)) return;
            registerFeedback(btn);
            addToEndpoint(`&${input.dataset.param}=${removeWhitespace(input.value)}`);
        });
    }

});


function addToEndpoint(addition) {
    let endpointIdentifier = document.createElement('span');
    endpointIdentifier.classList.add("main__endpoint-output");
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
        label.classList.add("failure-red-background");
        return false;
    }
    label.classList.remove("failure-red-background");
    return true;
};

function validateEqualSign(input, label) {
    if (!input.match(/^[A-z]*=[A-z0-9\s]+$/g)) {
        console.log("Missing equal sign");
        label.classList.add("failure-red-background");
        return false;
    }
    label.classList.remove("failure-red-background");
    return true;
};
function validateColonSign(input, label) {
    if (!input.match(/^[A-z]*:[A-z0-9\s]+(,[0-9]+|$)/g)) {
        console.log("Missing colon sign");
        label.classList.add("failure-red-background");
        return false;
    }
    label.classList.remove("failure-red-background");
    return true;
};

function validateNumbers(input, label){
    if (isNaN(input)) {
        console.log("Must be a number");
        label.classList.add("failure-red-background");
        return false;
    }
    label.classList.remove("failure-red-background");
    return true;
}

function validateRecommendationBoxKey(input,label){
    if(!input.match(/^[A-z0-9]+$/g) && !input.match(/^[A-z0-9]+,[A-z0-9]+$/)){
        console.log("Incorrect formatting");
        label.classList.add("failure-red-background");
        return false;
    }
    label.classList.remove("failure-red-background");
    return true;
}

function validateNoSpecialCharacters(input,label){
    if(!input.match(/^[A-z0-9]+$/)){
        console.log("Special characters present");
        label.classList.add("failure-red-background");
        return false;
    }
    label.classList.remove("failure-red-background");
    return true;
}

function validateNoDuplicates(input,label){
    if(mainEndpointOutputElem.textContent.includes(input.dataset.param)){
        console.log(`${input.dataset.param} already exists.`);
        label.classList.add("failure-red-background");
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

function registerFeedback(button){
    button.disabled = true;
    button.classList.add("success-green-background");
    setTimeout(()=>{
        button.classList.remove("success-green-background");
        button.disabled = false;
    },1000);
}
