let mainEndpointConstructorContainers = document.querySelectorAll(".main__endpoint-constructor-container");
let reqProductBoxIdInputElem = document.querySelector("input[data-param='ids']");
let reqProductBoxIdLabelElem = document.querySelector("label[data-param='ids']");


mainEndpointConstructorContainers.forEach((item) => {
    let btn = item.querySelector(".main__endpoint-constructor-button");
    let input = item.querySelector(".main__endpoint-constructor-input");
    let label = item.querySelector(".main__endpoint-constructor-label");

    // Recommendation events.
    if (btn.dataset.param === "hierarchies") {
        btn.addEventListener("click", () => {
            if(!validateNotEmpty(input.value, label)) return;
            if(!validateNotEmpty(reqProductBoxIdInputElem.value, reqProductBoxIdLabelElem)) return;
            let hierarchyIndexOne = 0;
            let preText = `&crawledData[${removeWhitespace(reqProductBoxIdInputElem.value)}][${btn.dataset.param}][${hierarchyIndexOne}][]=${removeWhitespace(input.value)}`;
            addToEndpoint(preText);
        });
    }
    else if (btn.dataset.param === "crawledData") {
        btn.addEventListener("click", () => {
            if(!validateNotEmpty(input.value, label)) return;
            if(!validateEqualSign(input.value, label)) return;
            if(!validateNotEmpty(reqProductBoxIdInputElem.value, reqProductBoxIdLabelElem)) return;
            let formattedValue = input.value.split("=");
            console.log(formattedValue);
            let preText = `&crawledData[${removeWhitespace(reqProductBoxIdInputElem.value)}][${removeWhitespace(formattedValue.shift())}]=${removeWhitespace(formattedValue.pop())}`;
            addToEndpoint(preText);
        })
    }
    else if(btn.dataset.param === "extraData-crawledData"){
        btn.addEventListener("click", () => {
            if(!validateNotEmpty(input.value, label)) return;
            if(!validateEqualSign(input.value, label)) return;
            if(!validateNotEmpty(reqProductBoxIdInputElem.value, reqProductBoxIdLabelElem)) return;
            let formattedValue = input.value.split("=");
            let preText = `&crawledData[${removeWhitespace(reqProductBoxIdInputElem.value)}][extraData][${removeWhitespace(formattedValue.shift())}][]=${removeWhitespace(formattedValue.pop())}`;
            addToEndpoint(preText);
        })
    }
    else if(btn.dataset.param === "extraDataList-crawledData"){
        btn.addEventListener("click", () => {
            if(!validateNotEmpty(input.value, label)) return;
            if(!validateEqualSign(input.value, label)) return;
            if(!validateNotEmpty(reqProductBoxIdInputElem.value, reqProductBoxIdLabelElem)) return;
            let formattedValue = input.value.split("=");
            let preText = `&crawledData[${removeWhitespace(reqProductBoxIdInputElem.value)}][extraDataList][${removeWhitespace(formattedValue.shift())}][]=${removeWhitespace(formattedValue.pop())}`;
            addToEndpoint(preText);
        })
    }
    // Search events.
    else if(btn.dataset.param === "product_count" || btn.dataset.param === "product_start"){
        btn.addEventListener("click", () => {
            if(!validateNotEmpty(input.value, label)) return;
            if(!validateNumbers(input.value, label)) return;
            addToEndpoint(`&${input.dataset.param}=${removeWhitespace(input.value)}`);
        });
    }
    else if(btn.dataset.param === "filters[]"){
        btn.addEventListener("click", () => {
            if(!validateNotEmpty(input.value, label)) return;
            if(!validateColonSign(input.value, label)) return;
            addToEndpoint(`&${input.dataset.param}=${removeWhitespace(input.value)}`);
        });
    }
    else {
        btn.addEventListener("click", () => {
            if(!validateNotEmpty(input.value, label)) return;
            addToEndpoint(`&${input.dataset.param}=${removeWhitespace(input.value)}`);
        });
    }

});


function addToEndpoint(addition) {
    outputElem.innerHTML += addition;
};

function removeWhitespace(input){
    return input.replace(/\s/g,"");
}

function validateNotEmpty(input, label) {
    if (input == "") {
        console.log("empty input");
        label.classList.add("failure-red-text-color");
        return false;
    }
    label.classList.remove("failure-red-text-color");
    return true;
};

function validateEqualSign(input, label) {
    if (!input.match(/^[A-z]*=[A-z0-9]+$/g)) {
        console.log("Missing equal sign");
        label.classList.add("failure-red-text-color");
        return false;
    }
    label.classList.remove("failure-red-text-color");
    return true;
};
function validateColonSign(input, label) {
    // if (!input.match(/^[A-z]*:[A-z0-9,0-9]+$/g)) {
    if (!input.match(/^[A-z]*:[A-z0-9]+(,[0-9]+|$)/g)) {
        console.log("Missing colon sign");
        label.classList.add("failure-red-text-color");
        return false;
    }
    label.classList.remove("failure-red-text-color");
    return true;
};

function validateNumbers(input, label){
    if (isNaN(input)) {
        console.log("Must be a number");
        label.classList.add("failure-red-text-color");
        return false;
    }
    label.classList.remove("failure-red-text-color");
    return true;
}










