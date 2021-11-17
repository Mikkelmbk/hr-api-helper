let mainEndpointConstructorContainers = document.querySelectorAll(".main__endpoint-constructor-container");
let reqProductBoxIdInputElem = document.querySelector("input[data-param='ids']");
let reqProductBoxIdLabelElem = document.querySelector("label[data-param='ids']");


mainEndpointConstructorContainers.forEach((item) => {
    let btn = item.querySelector(".main__endpoint-constructor-button");
    let input = item.querySelector(".main__endpoint-constructor-input");
    let label = item.querySelector(".main__endpoint-constructor-label");


    if (btn.dataset.param === "hierarchies") {
        btn.addEventListener("click", () => {

            if(!validateRequired(reqProductBoxIdInputElem.value)) return;
            if(!validateRequired(input.value)) return;

            let hierarchyIndexOne = 0;
            let preText = `&crawledData[${reqProductBoxIdInputElem.value}][${btn.dataset.param}][${hierarchyIndexOne}][]=${input.value}`;
            addToEndpoint(preText);
        });
    }
    else if (btn.dataset.param === "crawledData") {
        btn.addEventListener("click", () => {
            if(!validateRequired(input.value)) return;
            let preText = `&crawledData[${reqProductBoxIdInputElem.value}][${input.value}]=${input.value}`;
            addToEndpoint(preText);
        })
    }
    else {
        btn.addEventListener("click", () => {
            if(!validateRequired(input.value)) return;
            addToEndpoint(`&${input.dataset.param}=${input.value}`);
        });
    }

});


function addToEndpoint(addition) {
    outputElem.innerHTML += addition;
};


function validateRequired(input) {
    if (input == "") {
        return false;
    }
    return true;
};







